import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Car, DollarSign, Wrench, AlertTriangle, Users, FileText } from 'lucide-react';

const OwnerDashboard: React.FC = () => {
  // Mock Data
  const fleetStatusData = [
    { name: 'Alugados', value: 18, color: '#45A29E' }, // Secondary
    { name: 'Disponíveis', value: 5, color: '#66FCF1' }, // Accent
    { name: 'Manutenção', value: 2, color: '#F59E0B' }, // Warning
  ];

  const revenueData = [
    { name: 'Sem 1', receita: 4500 },
    { name: 'Sem 2', receita: 5200 },
    { name: 'Sem 3', receita: 4800 },
    { name: 'Sem 4', receita: 6100 },
  ];

  return (
    <div className="p-6 space-y-6 bg-lexia-dark min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Visão Geral da Frota</h1>
          <p className="text-gray-400">Monitoramento em tempo real e rentabilidade.</p>
        </div>
        <button className="bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 shadow-lg shadow-lexia-secondary/10">
          <Car size={18} />
          Adicionar Veículo
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-lexia-card p-5 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Total Veículos</p>
              <h3 className="text-2xl font-bold text-white">25</h3>
            </div>
            <div className="p-2 bg-lexia-dark rounded-lg text-lexia-secondary border border-lexia-secondary/20">
              <Car size={20} />
            </div>
          </div>
          <div className="text-xs text-lexia-success">+2 novos este mês</div>
        </div>

        <div className="bg-lexia-card p-5 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Receita Mensal</p>
              <h3 className="text-2xl font-bold text-white">R$ 20.6k</h3>
            </div>
            <div className="p-2 bg-lexia-dark rounded-lg text-lexia-success border border-lexia-success/20">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="text-xs text-lexia-success">+12% vs mês anterior</div>
        </div>

        <div className="bg-lexia-card p-5 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Taxa Ocupação</p>
              <h3 className="text-2xl font-bold text-white">72%</h3>
            </div>
            <div className="p-2 bg-lexia-dark rounded-lg text-lexia-accent border border-lexia-accent/20">
              <Users size={20} />
            </div>
          </div>
          <div className="text-xs text-gray-500">Meta: 80%</div>
        </div>

        <div className="bg-lexia-card p-5 rounded-xl border border-gray-800 hover:border-lexia-secondary/30 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Em Manutenção</p>
              <h3 className="text-2xl font-bold text-white">2</h3>
            </div>
            <div className="p-2 bg-lexia-dark rounded-lg text-lexia-warning border border-lexia-warning/20">
              <Wrench size={20} />
            </div>
          </div>
          <div className="text-xs text-lexia-warning">1 atrasado</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fleet Status Chart */}
        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-bold text-white mb-6">Status da Frota</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fleetStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {fleetStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2833', borderColor: '#374151', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-bold text-white mb-6">Receita Semanal (Fev)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  cursor={{fill: '#374151', opacity: 0.4}}
                  contentStyle={{ backgroundColor: '#1F2833', borderColor: '#374151', color: '#fff' }}
                />
                <Bar dataKey="receita" fill="#45A29E" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Vehicle List Table */}
      <div className="bg-lexia-card rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Veículos Recentes</h3>
          <button className="text-sm text-lexia-accent hover:underline">Ver Todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-lexia-dark text-gray-200 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Modelo</th>
                <th className="px-6 py-4">Placa</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Motorista</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { model: 'Renault Kwid', plate: 'RTY-5678', status: 'Alugado', driver: 'João Silva', statusColor: 'text-lexia-secondary' },
                { model: 'Fiat Mobi', plate: 'ABC-1234', status: 'Disponível', driver: '-', statusColor: 'text-lexia-accent' },
                { model: 'HB20', plate: 'GHJ-9012', status: 'Manutenção', driver: '-', statusColor: 'text-lexia-warning' },
                { model: 'Renault Kwid', plate: 'UIO-3456', status: 'Alugado', driver: 'Maria Oliveira', statusColor: 'text-lexia-secondary' },
              ].map((vehicle, idx) => (
                <tr key={idx} className="hover:bg-lexia-dark/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{vehicle.model}</td>
                  <td className="px-6 py-4">{vehicle.plate}</td>
                  <td className={`px-6 py-4 ${vehicle.statusColor} font-medium`}>{vehicle.status}</td>
                  <td className="px-6 py-4">{vehicle.driver}</td>
                  <td className="px-6 py-4">
                    <button className="text-lexia-accent hover:text-white transition-colors flex items-center gap-1">
                      <FileText size={14} /> Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
