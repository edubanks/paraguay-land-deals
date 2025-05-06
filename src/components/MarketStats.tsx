
import React from 'react';
import { ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line, 
  Legend 
} from 'recharts';

const landValueData = [
  { year: '2016', value: 100 },
  { year: '2017', value: 112 },
  { year: '2018', value: 125 },
  { year: '2019', value: 138 },
  { year: '2020', value: 148 },
  { year: '2021', value: 166 },
  { year: '2022', value: 185 },
  { year: '2023', value: 207 },
  { year: '2024', value: 231 },
];

const exportData = [
  { year: '2016', soybeans: 2000, corn: 1100, wheat: 800 },
  { year: '2017', soybeans: 2200, corn: 1300, wheat: 750 },
  { year: '2018', soybeans: 2400, corn: 1400, wheat: 900 },
  { year: '2019', soybeans: 2700, corn: 1600, wheat: 950 },
  { year: '2020', soybeans: 2500, corn: 1500, wheat: 1000 },
  { year: '2021', soybeans: 2900, corn: 1700, wheat: 1100 },
  { year: '2022', soybeans: 3200, corn: 1900, wheat: 1200 },
  { year: '2023', soybeans: 3500, corn: 2100, wheat: 1300 },
];

const investorData = [
  { name: 'European', value: 35 },
  { name: 'North American', value: 25 },
  { name: 'South American', value: 20 },
  { name: 'Asian', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#3c8c44', '#5bac64', '#8cc992', '#bae0be', '#dcefde'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded shadow-sm">
        <p className="font-bold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MarketStats: React.FC = () => {
  return (
    <section id="market-stats" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-forest-100 p-3 rounded-full">
              <ChartBar className="h-8 w-8 text-forest-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Market Performance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data-driven insights on Paraguay's agricultural market trends
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Land Value Growth Index</h3>
              <p className="text-sm text-gray-600 mb-4">Base: 2016 = 100</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={landValueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3c8c44" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Paraguay farmland has shown consistent appreciation, outperforming many traditional investments.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Agricultural Exports</h3>
              <p className="text-sm text-gray-600 mb-4">In thousands of tons</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={exportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="soybeans" fill="#3c8c44" name="Soybeans" />
                    <Bar dataKey="corn" fill="#5bac64" name="Corn" />
                    <Bar dataKey="wheat" fill="#8cc992" name="Wheat" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Growing global demand for Paraguay's agricultural products drives strong returns.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Investor Demographics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={investorData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {investorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold mb-4">Global Interest in Paraguay</h4>
                <p className="text-gray-600 mb-4">
                  Paraguay has attracted diverse international investors seeking agricultural opportunities and land appreciation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-forest-600 mr-2"></span>
                    <span>European investors lead with 35% market share</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-forest-500 mr-2"></span>
                    <span>North American investment growing rapidly</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-forest-400 mr-2"></span>
                    <span>Strong regional interest from South America</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarketStats;
