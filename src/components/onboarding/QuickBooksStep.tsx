
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Monitor, HardDrive, X, Calendar } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface QuickBooksStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuickBooksStep = ({ data, updateData, onNext, onPrev }: QuickBooksStepProps) => {
  const options = [
    { 
      id: "online", 
      label: "Yes: QuickBooks Online", 
      description: "Excellent. We'll sync seamlessly with real-time financial data.",
      icon: Monitor,
      color: "green",
      highlight: true
    },
    { 
      id: "desktop", 
      label: "Yes: QuickBooks Desktop", 
      description: "We can work with Desktop. Let's discuss the best integration approach.",
      icon: HardDrive,
      color: "orange"
    },
    { 
      id: "no", 
      label: "No accounting software yet", 
      description: "Perfect. We'll show you our built-in financial reporting features.",
      icon: X,
      color: "blue"
    },
    { 
      id: "planning", 
      label: "Planning to use QuickBooks", 
      description: "Smart choice. We'll set up the integration when you're ready.",
      icon: Calendar,
      color: "purple"
    },
  ];

  const handleSelect = (optionId: string) => {
    updateData("quickBooks", optionId);
  };

  const canProceed = data.quickBooks !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Do you use QuickBooks for accounting?</h2>
        <p className="text-gray-600">We'll configure the right financial sync to keep everything connected.</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.quickBooks === option.id;
          
          return (
            <div
              key={option.id}
              className={`border rounded-lg p-5 cursor-pointer transition-all hover:bg-gray-50 relative ${
                isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
              } ${option.highlight ? "ring-2 ring-green-200" : ""}`}
              onClick={() => handleSelect(option.id)}
            >
              {option.highlight && (
                <div className="absolute -top-2 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Most Popular
                </div>
              )}
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isSelected 
                    ? "bg-blue-100" 
                    : option.color === "green" 
                      ? "bg-green-100" 
                      : option.color === "orange" 
                        ? "bg-orange-100" 
                        : option.color === "purple" 
                          ? "bg-purple-100" 
                          : "bg-blue-100"
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    isSelected 
                      ? "text-blue-600" 
                      : option.color === "green" 
                        ? "text-green-600" 
                        : option.color === "orange" 
                          ? "text-orange-600" 
                          : option.color === "purple" 
                            ? "text-purple-600" 
                            : "text-blue-600"
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{option.label}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                  isSelected 
                    ? "border-blue-500 bg-blue-500" 
                    : "border-gray-300"
                }`}>
                  {isSelected && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full m-1"></div>
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
          Complete Setup
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuickBooksStep;
