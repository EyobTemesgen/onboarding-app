
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, TrendingUp, Zap } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Package className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome to InventoryPro
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Let's set up your inventory management system in just a few minutes. 
          We'll customize your experience based on how your business operates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Increase Efficiency</h3>
          <p className="text-sm text-slate-600">Automate inventory tracking and reduce manual errors</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-sky-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Real-time Insights</h3>
          <p className="text-sm text-slate-600">Get instant visibility into your stock levels and sales</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto">
            <Package className="w-6 h-6 text-violet-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Scale Seamlessly</h3>
          <p className="text-sm text-slate-600">Grow your business with integrations and automation</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onNext} 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg shadow-lg"
          size="lg"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-slate-500">
          Takes about 3 minutes • No credit card required
        </p>
      </div>
    </div>
  );
};

export default WelcomeStep;
