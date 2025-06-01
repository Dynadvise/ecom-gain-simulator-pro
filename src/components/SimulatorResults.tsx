
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react';
import { SimulatorResults as Results } from '@/utils/ecommerceCalculations';
import { formatCurrency, formatNumber, formatPercentage } from '@/utils/ecommerceCalculations';

interface SimulatorResultsProps {
  results: Results;
  isDataComplete: boolean;
}

export const SimulatorResults: React.FC<SimulatorResultsProps> = ({ results, isDataComplete }) => {
  if (!isDataComplete) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-ecommerce-dark-blue flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Résultats de votre simulation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Remplissez tous les champs pour voir vos résultats</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full border-l-4 border-l-ecommerce-coral">
      <CardHeader>
        <CardTitle className="text-ecommerce-dark-blue flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Résultats de votre simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Key Results - Highlighted */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-ecommerce-coral/20">
            <h3 className="font-bold text-lg text-ecommerce-dark-blue mb-4">
              🎯 Votre potentiel d'amélioration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-ecommerce-coral">
                  {formatCurrency(results.revenueIncrease)}
                </div>
                <div className="text-sm text-gray-600">Augmentation mensuelle</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-ecommerce-coral">
                  {formatPercentage(results.revenueIncreasePercentage)}
                </div>
                <div className="text-sm text-gray-600">Croissance du CA</div>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Current Performance */}
            <div className="space-y-4">
              <h4 className="font-semibold text-ecommerce-dark-blue border-b border-gray-200 pb-2">
                Performance actuelle
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <DollarSign className="w-4 h-4" />
                    CA mensuel actuel
                  </span>
                  <span className="font-semibold">{formatCurrency(results.currentMonthlyRevenue)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="w-4 h-4" />
                    Conversions mensuelles
                  </span>
                  <span className="font-semibold">{formatNumber(results.currentConversions)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <TrendingUp className="w-4 h-4" />
                    RPV actuel
                  </span>
                  <span className="font-semibold">{formatCurrency(results.currentRPV)}</span>
                </div>
              </div>
            </div>

            {/* Target Performance */}
            <div className="space-y-4">
              <h4 className="font-semibold text-ecommerce-dark-blue border-b border-gray-200 pb-2">
                Performance cible
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <DollarSign className="w-4 h-4" />
                    CA mensuel cible
                  </span>
                  <span className="font-semibold text-green-700">{formatCurrency(results.targetMonthlyRevenue)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="w-4 h-4" />
                    Conversions cibles
                  </span>
                  <span className="font-semibold text-green-700">{formatNumber(results.targetConversions)}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                  <span className="flex items-center gap-2 text-sm text-gray-700">
                    <TrendingUp className="w-4 h-4" />
                    Nouveau RPV
                  </span>
                  <span className="font-semibold text-green-700">
                    {formatCurrency(results.targetMonthlyRevenue / (results.currentConversions > 0 ? results.currentConversions * (100 / (results.currentConversions > 0 ? (results.currentMonthlyRevenue / results.currentConversions) * 100 / results.currentMonthlyRevenue : 1)) : 1))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
