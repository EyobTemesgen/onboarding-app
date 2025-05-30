
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface InventoryTrackingStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const InventoryTrackingStep = ({ data, updateData, onNext, onPrev }: InventoryTrackingStepProps) => {
  const options = [
    { id: "none", label: "We don't (starting from scratch)", description: "Perfect! We'll help you set up everything from the beginning" },
    { id: "spreadsheets", label: "Spreadsheets", description: "We'll show you how much time you can save with automation" },
    { id: "quickbooks", label: "QuickBooks", description: "Great! We have seamless QuickBooks integration" },
    { id: "other_tool", label: "Another inventory tool", description: "We can help you migrate your existing data" },
    { id: "fishbowl", label: "Fishbowl Classic / other ERPs", description: "We specialize in upgrading from legacy systems" },
  ];

  const handleSelect = (optionId: string) => {
    updateData("inventoryTracking", optionId);
  };

  const canProceed = data.inventoryTracking !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">How do you currently track inventory?</h2>
        <p className="text-gray-600">This helps us understand your current setup and pain points</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:bg-gray-50 ${
              data.inventoryTracking === option.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
            }`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-4 h-4 rounded-full border-2 mt-1 transition-all ${
                data.inventoryTracking === option.id 
                  ? "border-blue-500 bg-blue-500" 
                  : "border-gray-300"
              }`}>
                {data.inventoryTracking === option.id && (
                  <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{option.label}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
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

export default InventoryTrackingStep;
