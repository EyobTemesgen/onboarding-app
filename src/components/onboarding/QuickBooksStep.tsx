
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, Monitor, HardDrive, X, Calendar, Mail } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface QuickBooksStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuickBooksStep = ({ data, updateData, onNext, onPrev }: QuickBooksStepProps) => {
  const [showEnterpriseDialog, setShowEnterpriseDialog] = useState(false);

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
      description: "Desktop requires our Advanced enterprise solution for full integration.",
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
    if (optionId === "desktop") {
      setShowEnterpriseDialog(true);
    } else {
      updateData("quickBooks", optionId);
    }
  };

  const handleSendInfo = () => {
    // In a real app, this would trigger an API call to notify the sales team
    console.log("Enterprise info request sent for QuickBooks Desktop integration");
    setShowEnterpriseDialog(false);
    updateData("quickBooks", "desktop");
  };

  const canProceed = data.quickBooks !== "";

  return (
    <>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Do you use QuickBooks for accounting?</h2>
          <p className="text-gray-600">We'll configure the right financial sync to keep everything connected.</p>
        </div>

        <RadioGroup value={data.quickBooks} onValueChange={handleSelect} className="space-y-3">
          {options.map((option) => {
            const IconComponent = option.icon;
            const isSelected = data.quickBooks === option.id;
            
            return (
              <div
                key={option.id}
                className={`border rounded-lg p-5 cursor-pointer transition-all hover:bg-gray-50 relative ${
                  isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
                } ${option.highlight ? "ring-2 ring-green-200" : ""}`}
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
                    <Label htmlFor={option.id} className="cursor-pointer">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{option.label}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </Label>
                  </div>
                  <RadioGroupItem value={option.id} id={option.id} />
                </div>
              </div>
            );
          })}
        </RadioGroup>

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

      <Dialog open={showEnterpriseDialog} onOpenChange={setShowEnterpriseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-orange-600" />
              QuickBooks Desktop Integration
            </DialogTitle>
            <DialogDescription>
              QuickBooks Desktop requires our Advanced enterprise solution for full integration capabilities. 
              Our team can show you how this works and discuss pricing options.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">What you'll get:</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Full QuickBooks Desktop sync</li>
                <li>• Advanced inventory management</li>
                <li>• Priority support</li>
                <li>• Custom integrations</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end gap-3">
            <Button variant="outline" onClick={() => setShowEnterpriseDialog(false)}>
              Maybe Later
            </Button>
            <Button onClick={handleSendInfo} className="bg-orange-600 hover:bg-orange-700">
              <Mail className="mr-2 w-4 h-4" />
              Send Me Info
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickBooksStep;
