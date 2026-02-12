import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Car, TrendingUp, Settings, LogOut, User } from 'lucide-react';
import LiaChat from './LiaChat';

const Layout: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <div className="min-h-screen bg-lexia-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-lexia-card border-r border-gray-800 hidden md:flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lexia-secondary rounded-lg flex items-center justify-center text-lexia-dark font-bold">
              L
            </div>
            <span className="text-xl font-bold tracking-wider text-white">LEXIA</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Menu Principal</div>
          
          <Link to="/dashboard/driver" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('driver') ? 'bg-lexia-secondary/10 text-lexia-secondary' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
            <Car size={20} />
            <span className="font-medium">Motorista</span>
          </Link>

          <Link to="/dashboard/owner" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('owner') ? 'bg-lexia-secondary/10 text-lexia-secondary' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
            <LayoutDashboard size={20} />
            <span className="font-medium">Locador</span>
          </Link>

          <Link to="/dashboard/investor" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive('investor') ? 'bg-lexia-secondary/10 text-lexia-secondary' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
            <TrendingUp size={20} />
            <span className="font-medium">Investidor</span>
          </Link>

          <div className="my-4 border-t border-gray-800"></div>

          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings size={20} />
            <span className="font-medium">Configurações</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Usuário Demo</p>
              <p className="text-xs text-gray-500 truncate">demo@lexia.com</p>
            </div>
            <button className="text-gray-500 hover:text-white">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen">
        <Outlet />
      </main>

      {/* Chat Widget */}
      <LiaChat />
    </div>
  );
};

export default Layout;
