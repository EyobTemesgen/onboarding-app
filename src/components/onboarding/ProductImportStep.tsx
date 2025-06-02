
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Upload, Zap, Check, FileText, HelpCircle, Package } from "lucide-react";
import { OnboardingData } from "../OnboardingFlow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProductImportStepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProductImportStep = ({ data, updateData, onNext, onPrev }: ProductImportStepProps) => {
  const [importMethod, setImportMethod] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [sampleProducts] = useState([
    { sku: "WID-001", name: "Wireless Headphones", qty: 150 },
    { sku: "LTP-256", name: "Gaming Laptop", qty: 25 },
    { sku: "MUG-BLU", name: "Coffee Mug - Blue", qty: 200 }
  ]);

  const handleMethodSelect = (method: string) => {
    setImportMethod(method);
    updateData("productImport", method);
    
    // Simulate import process
    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  const handleSkip = () => {
    updateData("productImport", "skipped");
    onNext();
  };

  if (showSuccess) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            {importMethod === "csv" ? "Products Imported Successfully!" : 
             importMethod === "quickbooks" ? "QuickBooks Connected!" : 
             "Sample Data Loaded!"}
          </h2>
          <p className="text-slate-600">
            {importMethod === "csv" 
              ? "Your product catalog is now loaded and ready to sync across channels."
              : importMethod === "quickbooks"
              ? "Your QuickBooks inventory data is now syncing automatically."
              : "You're all set with sample products to explore the system."
            }
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="font-semibold text-slate-900 mb-3">
            {importMethod === "sample" ? "Sample products loaded:" : "Preview of imported products:"}
          </h3>
          <div className="space-y-2">
            {sampleProducts.map((product, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="font-medium">{product.sku}</span>
                <span className="text-slate-600">{product.name}</span>
                <span className="text-green-600 font-medium">{product.qty} in stock</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </Button>
          <Button 
            onClick={onNext}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Continue Setup
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">Bring In Your Products, Your Way</h2>
        <p className="text-slate-600">Choose the method that works best for you. You can always add more products later.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          className="border border-slate-200 rounded-lg p-6 cursor-pointer transition-all hover:border-blue-300 hover:bg-blue-50/30"
          onClick={() => handleMethodSelect("csv")}
        >
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Upload CSV File</h3>
              <p className="text-sm text-slate-600">Import your existing product list from a spreadsheet or export file.</p>
            </div>
            <div className="flex items-center justify-center space-x-1 text-xs text-slate-500">
              <FileText className="w-3 h-3" />
              <span>SKU, Name, Quantity format</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-3 h-3" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Required columns: SKU, Product Name, Quantity<br/>Optional: Price, Description, Category</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div 
          className="border border-slate-200 rounded-lg p-6 cursor-pointer transition-all hover:border-green-300 hover:bg-green-50/30"
          onClick={() => handleMethodSelect("quickbooks")}
        >
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Connect to QuickBooks</h3>
              <p className="text-sm text-slate-600">Automatically sync your existing inventory data and keep everything up to date.</p>
            </div>
            <div className="flex items-center justify-center space-x-1 text-xs text-slate-500">
              <Zap className="w-3 h-3" />
              <span>Real-time sync enabled</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-3 h-3" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Requires QuickBooks Online with inventory tracking enabled</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div 
          className="border border-slate-200 rounded-lg p-6 cursor-pointer transition-all hover:border-purple-300 hover:bg-purple-50/30"
          onClick={() => handleMethodSelect("sample")}
        >
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Start with Sample Data</h3>
              <p className="text-sm text-slate-600">Explore the system with pre-loaded sample products. Perfect for getting started quickly.</p>
            </div>
            <div className="flex items-center justify-center space-x-1 text-xs text-slate-500">
              <Package className="w-3 h-3" />
              <span>Ready to explore immediately</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-3 h-3" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Includes sample SKUs, names, and quantities<br/>You can replace with real data anytime</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={handleSkip}
          className="text-slate-500 hover:text-slate-700 text-sm underline"
        >
          Skip for now – I'll add products later
        </button>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onPrev}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        <div className="text-sm text-slate-500 self-center">
          Select an import method to continue
        </div>
      </div>
    </div>
  );
};

export default ProductImportStep;
