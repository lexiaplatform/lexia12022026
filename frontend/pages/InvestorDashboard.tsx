import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, PieChart, ArrowUpRight, Download, Info } from 'lucide-react';

const InvestorDashboard: React.FC = () => {
  const [simulationAmount, setSimulationAmount] = useState(50000);
  const [simulationMonths, setSimulationMonths] = useState(12);
  const MONTHLY_RATE = 0.02; // 2% per month as per report

  // Mock Data for ROI
  const roiData = [
    { month: 'Jan', value: 10000 },
    { month: 'Fev', value: 10200 },
    { month: 'Mar', value: 10450 },
    { month: 'Abr', value: 10800 },
    { month: 'Mai', value: 11200 },
    { month: 'Jun', value: 11650 },
  ];

  // Calculation for simulator (2% monthly)
  const projectedReturn = Math.floor(simulationAmount * Math.pow(1 + MONTHLY_RATE, simulationMonths));
  const profit = projectedReturn - simulationAmount;
  const monthlyIncome = Math.floor(simulationAmount * MONTHLY_RATE);

  return (
    <div className="p-6 space-y-6 bg-lexia-dark min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Painel do Investidor</h1>
          <p className="text-gray-400">Acompanhe seus rendimentos e simule novos aportes.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-lexia-secondary transition-colors flex items-center gap-2">
            <Download size={16} />
            Extrato
          </button>
          <button className="bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-lg shadow-lexia-secondary/10">
            <DollarSign size={18} />
            Novo Aporte
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-lexia-dark rounded-lg text-lexia-accent border border-lexia-accent/20">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Saldo Total</p>
              <h3 className="text-3xl font-bold text-white">R$ 154.320</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-lexia-success text-sm bg-lexia-success/10 px-2 py-1 rounded w-fit">
            <ArrowUpRight size={16} />
            <span>+2.1% este mês</span>
          </div>
        </div>

        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-lexia-dark rounded-lg text-lexia-secondary border border-lexia-secondary/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Rendimento Acumulado</p>
              <h3 className="text-3xl font-bold text-white">R$ 32.450</h3>
            </div>
          </div>
          <div className="text-sm text-gray-500">Desde Jan 2025</div>
        </div>

        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-lexia-dark rounded-lg text-lexia-warning border border-lexia-warning/20">
              <PieChart size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Ativos Financiados</p>
              <h3 className="text-3xl font-bold text-white">4 Veículos</h3>
            </div>
          </div>
          <div className="text-sm text-gray-500">Participação média: 25%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ROI Chart */}
        <div className="lg:col-span-2 bg-lexia-card p-6 rounded-xl border border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Crescimento do Patrimônio</h3>
            <select className="bg-lexia-dark border border-gray-700 text-gray-300 text-sm rounded-lg px-3 py-1 focus:outline-none focus:border-lexia-secondary">
              <option>Últimos 6 meses</option>
              <option>Último ano</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={roiData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#66FCF1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#66FCF1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2833', borderColor: '#374151', color: '#fff' }}
                  itemStyle={{ color: '#66FCF1' }}
                />
                <Area type="monotone" dataKey="value" stroke="#66FCF1" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Simulator */}
        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-bold text-white">Simulador de Investimento</h3>
            <div className="group relative">
              <Info size={16} className="text-gray-500 cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-black text-xs text-gray-300 rounded hidden group-hover:block border border-gray-700">
                Baseado na taxa média histórica de 2% a.m.
              </div>
            </div>
          </div>
          
          <div className="space-y-8 flex-1">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="text-gray-400">Valor do Aporte</label>
                <span className="text-lexia-accent font-bold">R$ {simulationAmount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="5000"
                value={simulationAmount}
                onChange={(e) => setSimulationAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lexia-secondary"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <label className="text-gray-400">Período</label>
                <span className="text-white font-bold">{simulationMonths} meses</span>
              </div>
              <input 
                type="range" 
                min="6" 
                max="48" 
                step="6"
                value={simulationMonths}
                onChange={(e) => setSimulationMonths(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lexia-secondary"
              />
            </div>

            <div className="bg-lexia-dark/50 p-4 rounded-lg border border-gray-700 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Renda Mensal Est.</span>
                <span className="text-lexia-secondary font-bold">R$ {monthlyIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Lucro Total</span>
                <span className="text-lexia-success font-bold">+ R$ {profit.toLocaleString()}</span>
              </div>
              <div className="pt-3 border-t border-gray-700 flex justify-between items-center">
                <span className="text-gray-300 font-medium">Montante Final</span>
                <span className="text-xl font-bold text-white">R$ {projectedReturn.toLocaleString()}</span>
              </div>
            </div>
            
            <button className="w-full py-3 bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark font-bold rounded-lg transition-all duration-300 shadow-lg shadow-lexia-secondary/20 mt-auto">
              Investir Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
