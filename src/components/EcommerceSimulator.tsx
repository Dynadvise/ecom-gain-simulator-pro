
import React, { useState, useEffect } from 'react';
import { SimulatorForm } from './SimulatorForm';
import { SimulatorResults } from './SimulatorResults';
import { ExplanatoryContent } from './ExplanatoryContent';
import { calculateSimulatorResults, validateInput, SimulatorInputs } from '@/utils/ecommerceCalculations';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const EcommerceSimulator: React.FC = () => {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    monthlyTraffic: 0,
    currentConversionRate: 0,
    currentAverageOrder: 0,
    targetConversionRate: 0,
    newAverageOrder: 0
  });

  const [results, setResults] = useState(calculateSimulatorResults(inputs));
  const [isDataComplete, setIsDataComplete] = useState(false);

  useEffect(() => {
    // Check if all required data is filled and valid
    const complete = 
      inputs.monthlyTraffic > 0 &&
      inputs.currentConversionRate > 0 &&
      inputs.currentAverageOrder > 0 &&
      inputs.targetConversionRate > 0 &&
      inputs.newAverageOrder > 0;
    
    setIsDataComplete(complete);
    
    // Recalculate results whenever inputs change
    if (complete) {
      setResults(calculateSimulatorResults(inputs));
    }
  }, [inputs]);

  const handleInputChange = (field: string, value: number) => {
    // Validate input based on field type
    let isValid = true;
    
    if (field.includes('ConversionRate')) {
      isValid = validateInput(value, 0, 100);
    } else {
      isValid = validateInput(value, 0);
    }

    if (isValid) {
      setInputs(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-ecommerce-dark-blue to-ecommerce-teal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Simulateur de gains CRO
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Découvrez le potentiel d'augmentation de votre chiffre d'affaires 
              en optimisant votre taux de conversion et votre panier moyen
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Simulator Section */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="animate-fade-in">
              <SimulatorForm
                monthlyTraffic={inputs.monthlyTraffic}
                currentConversionRate={inputs.currentConversionRate}
                currentAverageOrder={inputs.currentAverageOrder}
                targetConversionRate={inputs.targetConversionRate}
                newAverageOrder={inputs.newAverageOrder}
                onInputChange={handleInputChange}
              />
            </div>
            
            <div className="animate-fade-in">
              <SimulatorResults 
                results={results} 
                isDataComplete={isDataComplete}
              />
            </div>
          </div>

          {/* Explanatory Content */}
          <div className="animate-fade-in">
            <ExplanatoryContent />
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <footer className="bg-gray-50 border-t py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              <strong>Note importante :</strong> Les résultats de ce simulateur sont fournis à titre indicatif 
              et ne constituent pas une garantie de gains. Les performances réelles peuvent varier en fonction 
              de nombreux facteurs (saisonnalité, concurrence, budget marketing, qualité du trafic, etc.). 
              Les calculs supposent que le trafic reste constant et que les améliorations du taux de conversion 
              et du panier moyen sont maintenues dans le temps. Ces estimations vous donnent un ordre de grandeur 
              du potentiel d'optimisation de votre site e-commerce.
            </p>
          </div>
        </div>
      </footer>

      {/* Dynadvise Return Section */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img 
              src="/lovable-uploads/0ca3b414-56fc-462c-9499-3d5be9156a83.png" 
              alt="Dynadvise Logo" 
              className="h-12 w-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-3">
                Revenir au site Dynadvise
              </p>
              <Button asChild>
                <a 
                  href="https://dynadvise.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Visiter Dynadvise.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
