
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Home, Building2, Truck, Clock } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface ShippingLocationStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ShippingLocationStep = ({ data, updateData, onNext, onPrev }: ShippingLocationStepProps) => {
  const options = [
    { 
      id: "one_location", 
      label: "One location (in-house)", 
      description: "Simple setup with warehouse management and shipping integrations",
      icon: Home,
      color: "blue"
    },
    { 
      id: "multiple_warehouses", 
      label: "Multiple in-house warehouses", 
      description: "Advanced multi-location inventory tracking and allocation",
      icon: Building2,
      color: "green"
    },
    { 
      id: "third_party", 
      label: "3PL or Fulfilled by Amazon (FBA)", 
      description: "Seamless integration with third-party logistics providers",
      icon: Truck,
      color: "purple"
    },
    { 
      id: "not_shipping", 
      label: "Not shipping yet", 
      description: "We'll help you prepare for when you're ready to start fulfillment",
      icon: Clock,
      color: "orange"
    },
  ];

  const handleSelect = (optionId: string) => {
    updateData("shippingLocation", optionId);
  };

  const canProceed = data.shippingLocation !== "";

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Where do you ship from?</h2>
        <p className="text-gray-600">This helps us configure the right fulfillment features for your business</p>
      </div>

      <div className="space-y-3">
        {options.map((option) => {
          const IconComponent = option.icon;
          const isSelected = data.shippingLocation === option.id;
          
          return (
            <div
              key={option.id}
              className={`border rounded-lg p-5 cursor-pointer transition-all hover:bg-gray-50 ${
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
                        : option.color === "orange"
                          ? "bg-orange-100"
                          : "bg-blue-100"
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    isSelected 
                      ? "text-blue-600" 
                      : option.color === "green" 
                        ? "text-green-600" 
                        : option.color === "purple" 
                          ? "text-purple-600" 
                          : option.color === "orange"
                            ? "text-orange-600"
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
          Continue
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShippingLocationStep;
