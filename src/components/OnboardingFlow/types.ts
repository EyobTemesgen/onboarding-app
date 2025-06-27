export interface OnboardingData {
  salesChannels: string[];
  inventoryTracking: string;
  shippingLocation: string;
  quickBooks: string;
  productImport: string;
}

export interface BaseStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}
