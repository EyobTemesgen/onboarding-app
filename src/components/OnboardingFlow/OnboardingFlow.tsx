import { useState, useEffect } from "react";
import { Card, CardContent, LinearProgress, Box, Typography } from '@mui/material';
import SalesChannelStep from "../steps/SalesChannel";
import LandingPage from "../steps/LandingPage/index";
import InventoryTrackingStep from "../steps/InventoryTracking";
import QuickBooksStep from "../steps/QuickBooks";
import OnboardingComplete from "../steps/OnboardingComplete";
import ShippingLocationStep from "../steps/ShippingLocation";
import ProductImportStep from "../steps/ProductImport";
import { OnboardingData } from "./types";
import { useSearchParams } from "react-router-dom";

const OnboardingFlow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepParam = parseInt(searchParams.get("step") || "0", 10);
  const [currentStep, setCurrentStep] = useState(isNaN(stepParam) ? 0 : stepParam);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    salesChannels: [],
    inventoryTracking: "",
    shippingLocation: "",
    quickBooks: "",
    productImport: "",
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    // If the URL step param changes, update the state
    if (!isNaN(stepParam) && stepParam !== currentStep) {
      setCurrentStep(stepParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepParam]);

  useEffect(() => {
    // When currentStep changes, update the URL param
    if (currentStep !== stepParam) {
      setSearchParams({ step: String(currentStep) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

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
        return <LandingPage onNext={nextStep} />;
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
          <ShippingLocationStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <QuickBooksStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ProductImportStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return <OnboardingComplete data={onboardingData} />;
      default:
        return <LandingPage onNext={nextStep} />;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #dbeafe 50%, #e0e7ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '800px' }}>
        {currentStep > 0 && currentStep <= totalSteps - 1 && (
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                Step {currentStep} of {totalSteps - 1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.round(progress)}% complete
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8, 
                borderRadius: 4, 
                backgroundColor: '#F5F7FA',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#181F2B',
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        )}
        
        <Card 
          sx={{ 
            p: 4, 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            {renderStep()}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default OnboardingFlow;
