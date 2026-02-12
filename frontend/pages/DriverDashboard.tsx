import React from 'react';
import { Car, Calendar, CreditCard, AlertCircle, CheckCircle, Clock, FileText, User } from 'lucide-react';

const DriverDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-lexia-dark min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Olá, Carlos</h1>
          <p className="text-gray-400">Bem-vindo ao seu painel de motorista.</p>
        </div>
        <div className="bg-lexia-card px-4 py-2 rounded-lg border border-lexia-success/30 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-lexia-success animate-pulse"></div>
          <span className="text-sm text-gray-300">Conta Verificada (KYC)</span>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:border-lexia-accent/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Car size={64} className="text-lexia-accent" />
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Veículo Atual</h3>
          <div className="text-2xl font-bold text-white mb-2">Fiat Mobi 2024</div>
          <div className="flex items-center gap-2 text-sm text-lexia-secondary">
            <span className="bg-lexia-secondary/10 px-2 py-1 rounded border border-lexia-secondary/20">ABC-1234</span>
            <span>•</span>
            <span>Ativo</span>
          </div>
        </div>

        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:border-lexia-warning/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar size={64} className="text-lexia-warning" />
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Próximo Pagamento</h3>
          <div className="text-2xl font-bold text-white mb-2">R$ 450,00</div>
          <div className="flex items-center gap-2 text-sm text-lexia-warning">
            <Clock size={14} />
            <span>Vence em 3 dias</span>
          </div>
        </div>

        <div className="bg-lexia-card p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:border-lexia-success/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CreditCard size={64} className="text-lexia-success" />
          </div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Score de Motorista</h3>
          <div className="text-2xl font-bold text-white mb-2">4.9/5.0</div>
          <div className="text-sm text-gray-500">Excelente conduta</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Actions & Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="bg-lexia-card rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="p-4 bg-lexia-dark rounded-lg border border-gray-700 hover:border-lexia-secondary transition-colors flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-lexia-secondary/10 rounded-full group-hover:bg-lexia-secondary/20 transition-colors">
                  <CreditCard className="text-lexia-secondary" />
                </div>
                <span className="text-sm text-gray-300">Pagar Pix</span>
              </button>
              <button className="p-4 bg-lexia-dark rounded-lg border border-gray-700 hover:border-lexia-warning transition-colors flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-lexia-warning/10 rounded-full group-hover:bg-lexia-warning/20 transition-colors">
                  <AlertCircle className="text-lexia-warning" />
                </div>
                <span className="text-sm text-gray-300">Reportar Problema</span>
              </button>
              <button className="p-4 bg-lexia-dark rounded-lg border border-gray-700 hover:border-blue-400 transition-colors flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-blue-400/10 rounded-full group-hover:bg-blue-400/20 transition-colors">
                  <Calendar className="text-blue-400" />
                </div>
                <span className="text-sm text-gray-300">Agendar Revisão</span>
              </button>
              <button className="p-4 bg-lexia-dark rounded-lg border border-gray-700 hover:border-emerald-400 transition-colors flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors">
                  <FileText className="text-emerald-400" />
                </div>
                <span className="text-sm text-gray-300">Meus Contratos</span>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-lexia-card rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Histórico Recente</h3>
            <div className="space-y-4">
              {[
                { title: 'Pagamento Confirmado', date: 'Hoje, 10:30', amount: '-R$ 450,00', status: 'success' },
                { title: 'Manutenção Preventiva', date: '02 Fev, 14:00', amount: 'Agendado', status: 'warning' },
                { title: 'Pagamento Semanal', date: '28 Jan, 09:15', amount: '-R$ 450,00', status: 'success' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-lexia-dark/50 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-lexia-success' : 'bg-lexia-warning'}`}></div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-300">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Vehicle Status */}
        <div className="bg-lexia-card rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Saúde do Veículo</h3>
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-full border-4 border-lexia-secondary/20 flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-500">Score Geral</div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="78"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-lexia-secondary"
                  strokeDasharray="490"
                  strokeDashoffset="10"
                />
              </svg>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Óleo do Motor</span>
              <span className="text-lexia-success flex items-center gap-1"><CheckCircle size={14}/> OK</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-lexia-success h-full w-[80%]"></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Pneus</span>
              <span className="text-lexia-warning flex items-center gap-1"><AlertCircle size={14}/> Atenção</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-lexia-warning h-full w-[40%]"></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Freios</span>
              <span className="text-lexia-success flex items-center gap-1"><CheckCircle size={14}/> OK</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-lexia-success h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
