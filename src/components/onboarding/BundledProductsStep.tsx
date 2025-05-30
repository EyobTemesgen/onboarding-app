
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Package, Wrench, HelpCircle } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface BundledProductsStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const BundledProductsStep = ({ data, updateData, onNext, onPrev }: BundledProductsStepProps) => {
  const options = [
    { 
      id: "yes", 
      label: "Yes", 
      description: "We'll show you our powerful kitting and assembly features",
      icon: Package,
      color: "green"
    },
    { 
      id: "no", 
      label: "No", 
      description: "Perfect! We'll focus on individual product inventory management",
      icon: Wrench,
      color: "blue"
    },
    { 
      id: "not_sure", 
      label: "Not sure", 
      description: "No worries! We'll help you identify opportunities during setup",
      icon: HelpCircle,
      color: "purple"
    },
  ];

  const handleSelect = (optionId: string) => {
    updateData("bundledProducts", optionId);
  };

  const canProceed = data.bundledProducts !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Do you sell products that are bundled or assembled from parts?</h2>
        <p className="text-gray-600">This includes kits, bundles, or any products made from multiple components</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.bundledProducts === option.id;
          
          return (
            <div
              key={option.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all hover:bg-gray-50 ${
                isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isSelected 
                    ? "bg-blue-100" 
                    : option.color === "green" 
                      ? "bg-green-100" 
                      : option.color === "purple" 
                        ? "bg-purple-100" 
                        : "bg-blue-100"
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    isSelected 
                      ? "text-blue-600" 
                      : option.color === "green" 
                        ? "text-green-600" 
                        : option.color === "purple" 
                          ? "text-purple-600" 
                          : "text-blue-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.label}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                  isSelected 
                    ? "border-blue-500 bg-blue-500" 
                    : "border-gray-300"
                }`}>
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full m-1"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onPrev}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default BundledProductsStep;
