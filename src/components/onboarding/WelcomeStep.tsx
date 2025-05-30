
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingUp, Zap } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Package className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to InventoryPro
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Let's set up your inventory management system in just a few minutes. 
          We'll customize your experience based on how your business operates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Increase Efficiency</h3>
          <p className="text-sm text-gray-600">Automate inventory tracking and reduce manual errors</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Real-time Insights</h3>
          <p className="text-sm text-gray-600">Get instant visibility into your stock levels and sales</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <Package className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Scale Seamlessly</h3>
          <p className="text-sm text-gray-600">Grow your business with integrations and automation</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onNext} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
          size="lg"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-gray-500">
          Takes about 3 minutes • No credit card required
        </p>
      </div>
    </div>
  );
};

export default WelcomeStep;
