
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface SalesChannelStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const SalesChannelStep = ({ data, updateData, onNext, onPrev }: SalesChannelStepProps) => {
  const options = [
    { id: "ecommerce", label: "Shopify or other ecommerce site", description: "Online stores and platforms" },
    { id: "marketplaces", label: "Amazon, Walmart, or other marketplaces", description: "Third-party selling platforms" },
    { id: "b2b", label: "B2B (email, phone, portal orders)", description: "Business-to-business sales" },
    { id: "manual", label: "Manual orders (trade shows, spreadsheets)", description: "Traditional order processing" },
    { id: "retail", label: "Retail or POS", description: "Point of sale systems" },
    { id: "not_selling", label: "Not selling yet", description: "Planning to start selling" },
  ];

  const handleToggle = (optionId: string) => {
    const currentChannels = data.salesChannels;
    const newChannels = currentChannels.includes(optionId)
      ? currentChannels.filter(id => id !== optionId)
      : [...currentChannels, optionId];
    
    updateData("salesChannels", newChannels);
  };

  const canProceed = data.salesChannels.length > 0;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">How do you sell your products today?</h2>
        <p className="text-slate-600">Select all that apply - this helps us customize your setup</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all hover:bg-slate-50 ${
              data.salesChannels.includes(option.id) ? "border-blue-500 bg-blue-50/50" : "border-slate-200"
            }`}
            onClick={() => handleToggle(option.id)}
          >
            <div className="flex items-start space-x-3">
              <Checkbox
                checked={data.salesChannels.includes(option.id)}
                onChange={() => {}}
                className="mt-1"
              />
              <div className="flex-1">
                <h3 className="font-medium text-slate-900">{option.label}</h3>
                <p className="text-sm text-slate-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
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
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SalesChannelStep;
