import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Car, Smartphone, Users, BarChart3, CheckCircle2, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-lexia-dark font-sans selection:bg-lexia-accent selection:text-lexia-dark">
      {/* Hero Section - Dual Sided */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-lexia-secondary/10 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-lexia-accent/5 rounded-full blur-[100px]"></div>
           <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-lexia-accent rounded-full animate-ping"></div>
           <div className="absolute top-[60%] right-[20%] w-1 h-1 bg-lexia-secondary rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lexia-card border border-lexia-secondary/30 text-lexia-accent text-xs font-semibold tracking-wide uppercase mb-8 shadow-[0_0_20px_rgba(69,162,158,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lexia-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lexia-accent"></span>
              </span>
              Plataforma LIA 2.0 Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              O Ecossistema de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lexia-secondary via-lexia-accent to-white">Mobilidade & Capital</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
              Conectamos a eficiência da gestão de frotas com a liquidez do mercado financeiro. 
              Segurança institucional, rentabilidade real e tecnologia proprietária.
            </p>
          </div>

          {/* Dual CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Driver Card */}
            <div className="group relative bg-lexia-card border border-gray-800 hover:border-lexia-accent/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,252,241,0.1)]">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Car size={80} className="text-lexia-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Para Motoristas</h3>
              <p className="text-gray-400 mb-6 h-12">Alugue sem burocracia, pague via Pix e conte com suporte 24/7 da LIA.</p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-lexia-success"/> Aprovação via IA em minutos</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-lexia-success"/> Manutenção inclusa</li>
              </ul>
              <Link to="/dashboard/driver" className="inline-flex items-center gap-2 text-lexia-accent font-bold group-hover:translate-x-2 transition-transform">
                Começar a Rodar <ArrowRight size={18} />
              </Link>
            </div>

            {/* Investor Card */}
            <div className="group relative bg-lexia-card border border-gray-800 hover:border-lexia-secondary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(69,162,158,0.1)]">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <TrendingUp size={80} className="text-lexia-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Para Investidores</h3>
              <p className="text-gray-400 mb-6 h-12">Rentabilize seu capital em ativos reais com alta liquidez e gestão profissional.</p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-lexia-success"/> Meta de 2% a.m.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-lexia-success"/> Dashboard transparente</li>
              </ul>
              <Link to="/dashboard/investor" className="inline-flex items-center gap-2 text-lexia-secondary font-bold group-hover:translate-x-2 transition-transform">
                Simular Investimento <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-800 bg-lexia-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2.5k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Veículos Ativos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">R$ 45M</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Ativos sob Gestão</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Taxa de Ocupação</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Suporte LIA</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIA Section */}
      <section className="py-24 bg-lexia-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lexia-secondary to-lexia-accent opacity-10 blur-3xl rounded-full"></div>
                <div className="relative bg-lexia-card border border-gray-700 rounded-2xl p-8 shadow-2xl">
                  {/* Mock Chat Interface */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
                      <div className="w-12 h-12 rounded-full bg-lexia-secondary/20 flex items-center justify-center text-lexia-accent ring-2 ring-lexia-secondary/30">
                        <Shield size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">LIA Orchestrator</div>
                        <div className="text-xs text-lexia-success flex items-center gap-1">
                          <span className="w-2 h-2 bg-lexia-success rounded-full animate-pulse"></span>
                          Online • Módulo 06 (Técnico)
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-300 border border-gray-700">
                        <span className="text-lexia-secondary font-bold block mb-1">LIA:</span>
                        Detectei uma anomalia na telemetria do veículo ABC-1234. A pressão do óleo está oscilando. Recomendo parada preventiva imediata.
                      </div>
                      <div className="bg-lexia-secondary/10 p-4 rounded-2xl rounded-tr-none text-sm text-white ml-auto border border-lexia-secondary/30">
                        <span className="text-lexia-accent font-bold block mb-1">Gestor:</span>
                        Entendido. Agende a oficina mais próxima e notifique o motorista.
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-300 border border-gray-700">
                        <span className="text-lexia-secondary font-bold block mb-1">LIA:</span>
                        Feito. Oficina "AutoTech" (2km) agendada para 14:30. Motorista notificado via WhatsApp. Risco de sinistro mitigado.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lexia-secondary/10 text-lexia-secondary text-xs font-bold mb-6">
                <Zap size={14} />
                Inteligência Artificial Proprietária
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                LIA: Mais que um Chatbot, <br />
                <span className="text-lexia-accent">Uma Orquestradora.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A LIA gerencia 10 módulos críticos da operação, desde a triagem de risco (Score A-E) até a gestão de sinistros. Ela não apenas responde, ela age para proteger o ativo e garantir a rentabilidade.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Triagem de Risco & KYC',
                  'Gestão de Manutenção',
                  'Cobrança Automatizada',
                  'Compliance & Fraude'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 bg-lexia-card/50 p-3 rounded-lg border border-gray-800">
                    <div className="w-5 h-5 rounded-full bg-lexia-accent/20 flex items-center justify-center text-lexia-accent text-xs">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lexia-card border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-lexia-secondary rounded-lg flex items-center justify-center text-lexia-dark font-bold">L</div>
                <span className="text-xl font-bold text-white">LEXIA</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Plataforma líder em gestão de mobilidade e investimentos em frotas. Tecnologia Institutional Dark Finance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Plataforma</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/dashboard/driver" className="hover:text-lexia-accent transition-colors">Para Motoristas</Link></li>
                <li><Link to="/dashboard/owner" className="hover:text-lexia-accent transition-colors">Para Locadores</Link></li>
                <li><Link to="/dashboard/investor" className="hover:text-lexia-accent transition-colors">Para Investidores</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-lexia-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-lexia-accent transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-lexia-accent transition-colors">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>suporte@lexia.com.br</li>
                <li>+55 11 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
            © 2026 Lexia Platform. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
