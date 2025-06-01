
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, TrendingUp, Zap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ExplanatoryContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Dynadvise Return Section - Single Line */}
      <div className="bg-white border border-gray-200 rounded-lg py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/lovable-uploads/0ca3b414-56fc-462c-9499-3d5be9156a83.png" 
              alt="Dynadvise Logo" 
              className="h-8 w-auto"
            />
            <span className="text-gray-600">Revenir au site Dynadvise</span>
            <Button asChild size="sm">
              <a 
                href="https://dynadvise.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retourner sur le site Dynadvise.com
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-ecommerce-teal/20">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-ecommerce-dark-blue mb-2">
                Pourquoi optimiser votre taux de conversion ?
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                L'optimisation du taux de conversion (CRO) et de la valeur moyenne de commande 
                représente l'un des leviers les plus puissants pour augmenter votre chiffre d'affaires 
                sans investir dans l'acquisition de nouveaux clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-teal/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-ecommerce-teal" />
                </div>
                <h3 className="font-semibold text-ecommerce-dark-blue">Impact immédiat</h3>
                <p className="text-sm text-gray-600">
                  Chaque amélioration se traduit directement par une hausse des revenus, 
                  sans coût d'acquisition supplémentaire.
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-teal/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-ecommerce-teal" />
                </div>
                <h3 className="font-semibold text-ecommerce-dark-blue">ROI élevé</h3>
                <p className="text-sm text-gray-600">
                  L'optimisation de la conversion offre généralement un retour sur investissement 
                  parmi les plus élevés du marketing digital.
                </p>
              </div>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-ecommerce-teal/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-ecommerce-teal" />
                </div>
                <h3 className="font-semibold text-ecommerce-dark-blue">Croissance durable</h3>
                <p className="text-sm text-gray-600">
                  Les améliorations apportées bénéficient à tous vos futurs visiteurs, 
                  créant un effet cumulatif sur le long terme.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-ecommerce-dark-blue flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Comment interpréter vos résultats ?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-ecommerce-dark-blue mb-2">📊 Augmentation du CA</h4>
                <p className="text-gray-700 text-sm">
                  Cette valeur représente le gain mensuel supplémentaire que vous pourriez réaliser. 
                  Multipliez par 12 pour estimer l'impact annuel de vos optimisations.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-ecommerce-dark-blue mb-2">💰 Revenu par visiteur (RPV)</h4>
                <p className="text-gray-700 text-sm">
                  Cet indicateur mesure la valeur moyenne de chaque visiteur. Une hausse du RPV 
                  indique une meilleure performance globale de votre site.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-ecommerce-dark-blue mb-2">🎯 Objectifs réalistes</h4>
                <p className="text-gray-700 text-sm">
                  Visez des améliorations progressives : +0,5% de taux de conversion ou +10% 
                  de panier moyen sont déjà d'excellents résultats.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-ecommerce-dark-blue mb-2">📈 Effet cumulé</h4>
                <p className="text-gray-700 text-sm">
                  Même de petites améliorations peuvent générer des gains significatifs. 
                  L'effet se cumule sur tous vos visiteurs futurs.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-ecommerce-coral/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-ecommerce-dark-blue">
              Prêt à concrétiser ces gains ?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Les résultats de cette simulation vous donnent un aperçu du potentiel de votre site. 
              Pour transformer ces projections en réalité, une stratégie d'optimisation structurée 
              et des tests A/B rigoureux sont essentiels.
            </p>
            <div className="inline-flex items-center gap-2 text-ecommerce-coral font-semibold">
              <span>Découvrez comment optimiser votre conversion</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
