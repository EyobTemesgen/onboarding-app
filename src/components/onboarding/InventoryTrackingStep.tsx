
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
    { id: "none", label: "We don't track inventory yet", description: "Perfect. We'll build your system from the ground up." },
    { id: "spreadsheets", label: "Spreadsheets", description: "Time to eliminate manual errors and save hours each week." },
    { id: "quickbooks", label: "QuickBooks", description: "Excellent. We'll sync seamlessly with your existing setup." },
    { id: "other_tool", label: "Another inventory tool", description: "We'll help you migrate and upgrade your workflow." },
    { id: "fishbowl", label: "Fishbowl Classic or other ERP", description: "Ready to modernize? We specialize in smooth transitions." },
  ];

  const handleSelect = (optionId: string) => {
    updateData("inventoryTracking", optionId);
  };

  const canProceed = data.inventoryTracking !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">How do you track inventory now?</h2>
        <p className="text-slate-600">Don't worry—we'll work with what you have and eliminate the pain points.</p>
      </div>

      <RadioGroup value={data.inventoryTracking} onValueChange={handleSelect} className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:bg-slate-50 ${
              data.inventoryTracking === option.id ? "border-blue-500 bg-blue-50/50" : "border-slate-200"
            }`}
          >
            <div className="flex items-start space-x-3">
              <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                <h3 className="font-medium text-slate-900">{option.label}</h3>
                <p className="text-sm text-slate-600">{option.description}</p>
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>

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
          Set Up My System
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default InventoryTrackingStep;
