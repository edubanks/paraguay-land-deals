
import React, { useState, useEffect } from 'react';
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";

const RoiCalculator: React.FC = () => {
  const [investment, setInvestment] = useState<number>(500000);
  const [years, setYears] = useState<number>(5);
  const [landAppreciation, setLandAppreciation] = useState<number>(10);
  const [farmingYield, setFarmingYield] = useState<number>(8);
  const [results, setResults] = useState({
    futureValue: 0,
    totalReturn: 0,
    annualizedReturn: 0,
    farmingIncome: 0,
    appreciationGain: 0
  });

  useEffect(() => {
    // Calculate future value
    const appreciationGain = investment * Math.pow((1 + landAppreciation / 100), years);
    const farmingIncome = Array.from({length: years}, (_, i) => 
      investment * (farmingYield / 100) * Math.pow((1 + landAppreciation / 100), i)
    ).reduce((sum, current) => sum + current, 0);
    
    const futureValue = appreciationGain + farmingIncome;
    const totalReturn = ((futureValue - investment) / investment) * 100;
    const annualizedReturn = (Math.pow((futureValue / investment), (1 / years)) - 1) * 100;
    
    setResults({
      futureValue: Math.round(futureValue),
      totalReturn: Math.round(totalReturn * 10) / 10,
      annualizedReturn: Math.round(annualizedReturn * 10) / 10,
      farmingIncome: Math.round(farmingIncome),
      appreciationGain: Math.round(appreciationGain - investment)
    });
  }, [investment, years, landAppreciation, farmingYield]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <Calculator className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Investment Calculator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estimate your potential returns from investing in Paraguay farmland
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Calculator Inputs */}
          <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
            <div>
              <Label htmlFor="investment-amount" className="text-lg font-medium">
                Investment Amount: {formatCurrency(investment)}
              </Label>
              <Slider
                id="investment-amount"
                min={100000}
                max={2000000}
                step={50000}
                value={[investment]}
                onValueChange={(value) => setInvestment(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="investment-period" className="text-lg font-medium">
                Investment Period: {years} years
              </Label>
              <Slider
                id="investment-period"
                min={1}
                max={20}
                step={1}
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="land-appreciation" className="text-lg font-medium">
                Annual Land Appreciation: {landAppreciation}%
              </Label>
              <Slider
                id="land-appreciation"
                min={0}
                max={20}
                step={0.5}
                value={[landAppreciation]}
                onValueChange={(value) => setLandAppreciation(value[0])}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Historical average: 10-15% annually
              </p>
            </div>
            
            <div>
              <Label htmlFor="farming-yield" className="text-lg font-medium">
                Annual Farming Yield: {farmingYield}%
              </Label>
              <Slider
                id="farming-yield"
                min={0}
                max={20}
                step={0.5}
                value={[farmingYield]}
                onValueChange={(value) => setFarmingYield(value[0])}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Based on crop type and management efficiency
              </p>
            </div>
          </div>
          
          {/* Results */}
          <div className="flex flex-col space-y-4">
            <Card className="bg-forest-50 border-forest-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-forest-700 mb-4">Estimated Results</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Initial Investment:</span>
                    <span className="font-bold">{formatCurrency(investment)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Future Value:</span>
                    <span className="font-bold">{formatCurrency(results.futureValue)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Return:</span>
                    <span className="font-bold text-forest-600">{results.totalReturn}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annualized Return:</span>
                    <span className="font-bold text-forest-600">{results.annualizedReturn}%</span>
                  </div>
                  
                  <div className="pt-4 border-t border-forest-200">
                    <h4 className="font-bold mb-2">Breakdown</h4>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appreciation Gain:</span>
                      <span>{formatCurrency(results.appreciationGain)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Farming Income:</span>
                      <span>{formatCurrency(results.farmingIncome)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-sm text-gray-500 italic">
              Disclaimer: This calculator provides estimates only. Actual returns may vary based on market conditions, management, and other factors. Past performance is not indicative of future results.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
