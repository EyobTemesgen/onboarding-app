
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star, Zap, Target } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";

interface OnboardingCompleteProps {
  data: OnboardingData;
}

const OnboardingComplete = ({ data }: OnboardingCompleteProps) => {
  const getPersonalizedMessage = () => {
    const { salesChannels, inventoryTracking, bundledProducts, shippingLocation, quickBooks } = data;
    
    let features = [];
    
    if (salesChannels.includes("ecommerce")) {
      features.push("Shopify/ecommerce integrations");
    }
    if (salesChannels.includes("marketplaces")) {
      features.push("Amazon & marketplace sync");
    }
    if (salesChannels.includes("b2b")) {
      features.push("B2B portal and manual order creation");
    }
    if (bundledProducts === "yes") {
      features.push("advanced kitting and assembly features");
    }
    if (quickBooks === "online") {
      features.push("seamless QuickBooks Online sync");
    }
    if (shippingLocation === "multiple_warehouses") {
      features.push("multi-warehouse management");
    }
    
    return features.length > 0 
      ? `Based on your setup, we'll prioritize ${features.slice(0, 2).join(" and ")}${features.length > 2 ? " plus other key features" : ""}.`
      : "We'll customize your dashboard with the most relevant features for your business.";
  };

  const getRecommendedNextSteps = () => {
    const steps = [];
    
    if (data.inventoryTracking === "spreadsheets") {
      steps.push({ title: "Import your existing inventory", description: "Upload your spreadsheet data" });
    } else if (data.inventoryTracking === "quickbooks") {
      steps.push({ title: "Connect QuickBooks", description: "Sync your existing items and accounts" });
    } else {
      steps.push({ title: "Add your first products", description: "Start building your inventory catalog" });
    }
    
    if (data.salesChannels.includes("ecommerce")) {
      steps.push({ title: "Connect your sales channels", description: "Link Shopify and other platforms" });
    }
    
    if (data.shippingLocation !== "not_shipping") {
      steps.push({ title: "Set up shipping", description: "Configure warehouse locations and carriers" });
    }
    
    return steps.slice(0, 3);
  };

  const nextSteps = getRecommendedNextSteps();

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          You're all set! 🎉
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {getPersonalizedMessage()}
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your personalized setup is ready</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900">Tailored Dashboard</h4>
            <p className="text-sm text-gray-600">Customized for your business model</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900">Smart Automations</h4>
            <p className="text-sm text-gray-600">Pre-configured for your workflow</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900">Expert Support</h4>
            <p className="text-sm text-gray-600">Dedicated help when you need it</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Recommended next steps:</h3>
        <div className="space-y-3">
          {nextSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3 text-left bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
          size="lg"
        >
          Start Your Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-gray-500">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default OnboardingComplete;
