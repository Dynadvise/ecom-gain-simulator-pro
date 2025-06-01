
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, TrendingUp, ShoppingCart, Target } from 'lucide-react';

interface SimulatorFormProps {
  monthlyTraffic: number;
  currentConversionRate: number;
  currentAverageOrder: number;
  targetConversionRate: number;
  newAverageOrder: number;
  onInputChange: (field: string, value: number) => void;
}

export const SimulatorForm: React.FC<SimulatorFormProps> = ({
  monthlyTraffic,
  currentConversionRate,
  currentAverageOrder,
  targetConversionRate,
  newAverageOrder,
  onInputChange
}) => {
  const handleInputChange = (field: string, value: string) => {
    const numericValue = parseFloat(value) || 0;
    onInputChange(field, numericValue);
  };

  return (
    <Card className="w-full border-l-4 border-l-ecommerce-teal">
      <CardHeader>
        <CardTitle className="text-ecommerce-dark-blue flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Vos données actuelles et objectifs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Data Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ecommerce-dark-blue border-b border-gray-200 pb-2">
              Situation actuelle
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="monthlyTraffic" className="text-ecommerce-dark-blue flex items-center gap-2">
                <Users className="w-4 h-4" />
                Trafic mensuel
              </Label>
              <Input
                id="monthlyTraffic"
                type="number"
                placeholder="ex: 50 000"
                value={monthlyTraffic || ''}
                onChange={(e) => handleInputChange('monthlyTraffic', e.target.value)}
                min="0"
                className="focus:border-ecommerce-teal"
              />
              <p className="text-xs text-gray-500">Nombre de visiteurs par mois</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentConversionRate" className="text-ecommerce-dark-blue flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Taux de conversion actuel (%)
              </Label>
              <Input
                id="currentConversionRate"
                type="number"
                placeholder="ex: 2"
                value={currentConversionRate || ''}
                onChange={(e) => handleInputChange('currentConversionRate', e.target.value)}
                min="0"
                max="100"
                step="0.1"
                className="focus:border-ecommerce-teal"
              />
              <p className="text-xs text-gray-500">Pourcentage de visiteurs qui achètent</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentAverageOrder" className="text-ecommerce-dark-blue flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Panier moyen actuel (€)
              </Label>
              <Input
                id="currentAverageOrder"
                type="number"
                placeholder="ex: 50"
                value={currentAverageOrder || ''}
                onChange={(e) => handleInputChange('currentAverageOrder', e.target.value)}
                min="0"
                step="0.01"
                className="focus:border-ecommerce-teal"
              />
              <p className="text-xs text-gray-500">Valeur moyenne d'une commande</p>
            </div>
          </div>

          {/* Target Data Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-ecommerce-dark-blue border-b border-gray-200 pb-2">
              Objectifs après optimisation
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="targetConversionRate" className="text-ecommerce-dark-blue flex items-center gap-2">
                <Target className="w-4 h-4" />
                Taux de conversion cible (%)
              </Label>
              <Input
                id="targetConversionRate"
                type="number"
                placeholder="ex: 3"
                value={targetConversionRate || ''}
                onChange={(e) => handleInputChange('targetConversionRate', e.target.value)}
                min="0"
                max="100"
                step="0.1"
                className="focus:border-ecommerce-teal"
              />
              <p className="text-xs text-gray-500">Taux de conversion visé</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newAverageOrder" className="text-ecommerce-dark-blue flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Nouveau panier moyen (€)
              </Label>
              <Input
                id="newAverageOrder"
                type="number"
                placeholder="ex: 65"
                value={newAverageOrder || ''}
                onChange={(e) => handleInputChange('newAverageOrder', e.target.value)}
                min="0"
                step="0.01"
                className="focus:border-ecommerce-teal"
              />
              <p className="text-xs text-gray-500">Valeur de commande visée</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
