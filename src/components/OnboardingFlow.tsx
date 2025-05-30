
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import WelcomeStep from "./onboarding/WelcomeStep";
import SalesChannelStep from "./onboarding/SalesChannelStep";
import InventoryTrackingStep from "./onboarding/InventoryTrackingStep";
import BundledProductsStep from "./onboarding/BundledProductsStep";
import ShippingLocationStep from "./onboarding/ShippingLocationStep";
import QuickBooksStep from "./onboarding/QuickBooksStep";
import OnboardingComplete from "./onboarding/OnboardingComplete";

export interface OnboardingData {
  salesChannels: string[];
  inventoryTracking: string;
  bundledProducts: string;
  shippingLocation: string;
  quickBooks: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    salesChannels: [],
    inventoryTracking: "",
    bundledProducts: "",
    shippingLocation: "",
    quickBooks: "",
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (key: keyof OnboardingData, value: any) => {
    setOnboardingData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />;
      case 1:
        return (
          <SalesChannelStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <InventoryTrackingStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <BundledProductsStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <ShippingLocationStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <QuickBooksStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return <OnboardingComplete data={onboardingData} />;
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {currentStep > 0 && currentStep <= totalSteps - 1 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">
                Step {currentStep} of {totalSteps - 1}
              </span>
              <span className="text-sm text-slate-600">{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <Card className="p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          {renderStep()}
        </Card>
      </div>
    </div>
  );
};

export default OnboardingFlow;
