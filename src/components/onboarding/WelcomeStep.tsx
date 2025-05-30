
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
          Welcome to Drive – Smarter Inventory Starts Here
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto">
          Get multi-channel control, real-time sync, and workflow automation 
          up and running in minutes. Your growing business deserves modern inventory management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Multi-Channel Control</h3>
          <p className="text-sm text-slate-600">Sync inventory across all your sales channels automatically</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-sky-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Real-Time Sync</h3>
          <p className="text-sm text-slate-600">Never oversell again with instant inventory updates</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto">
            <Package className="w-6 h-6 text-violet-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Workflow Automation</h3>
          <p className="text-sm text-slate-600">Streamline operations from order to fulfillment</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onNext} 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg shadow-lg"
          size="lg"
        >
          Let's Go
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-sm text-slate-500">
          Takes 3 minutes • Set up your first win fast
        </p>
      </div>
    </div>
  );
};

export default WelcomeStep;
