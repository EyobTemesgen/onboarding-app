
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
      label: "Yes, we create bundles or kits", 
      description: "We'll show you our powerful kitting features that track components automatically.",
      icon: Package,
      color: "emerald"
    },
    { 
      id: "no", 
      label: "No, we sell individual products", 
      description: "Perfect. We'll focus on streamlined single-item inventory management.",
      icon: Wrench,
      color: "sky"
    },
    { 
      id: "not_sure", 
      label: "Not sure yet", 
      description: "No problem. We'll help you identify opportunities during setup.",
      icon: HelpCircle,
      color: "violet"
    },
  ];

  const handleSelect = (optionId: string) => {
    updateData("bundledProducts", optionId);
  };

  const canProceed = data.bundledProducts !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">Do you sell kits or bundled products?</h2>
        <p className="text-slate-600">This includes any products made from multiple components or sold as sets.</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.bundledProducts === option.id;
          
          return (
            <div
              key={option.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all hover:bg-slate-50 ${
                isSelected ? "border-blue-500 bg-blue-50/50" : "border-slate-200"
              }`}
              onClick={() => handleSelect(option.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isSelected 
                    ? "bg-blue-100" 
                    : option.color === "emerald" 
                      ? "bg-emerald-100" 
                      : option.color === "violet" 
                        ? "bg-violet-100" 
                        : "bg-sky-100"
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    isSelected 
                      ? "text-blue-600" 
                      : option.color === "emerald" 
                        ? "text-emerald-600" 
                        : option.color === "violet" 
                          ? "text-violet-600" 
                          : "text-sky-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{option.label}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                  isSelected 
                    ? "border-blue-500 bg-blue-500" 
                    : "border-slate-300"
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
        <Button variant="outline" onClick={onPrev} className="border-slate-300 text-slate-700 hover:bg-slate-50">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
        >
          Configure Products
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default BundledProductsStep;
