import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Navigation structure based on "Mapa de Telas e Arquitetura de Informação"
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Frota', path: '/dashboard/owner' }, // Mapping to dashboard for demo
    { name: 'Locação', path: '/dashboard/driver' }, // Mapping to dashboard for demo
    { name: 'Investidores', path: '/dashboard/investor' },
    { name: 'Crédito Pix', path: '/dashboard/driver' }, // Placeholder mapping
    { name: 'Suporte', path: '#' },
  ];

  return (
    <nav className="bg-lexia-dark/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-lexia-secondary to-lexia-accent rounded-xl flex items-center justify-center text-lexia-dark font-bold text-xl shadow-[0_0_15px_rgba(102,252,241,0.3)] group-hover:shadow-[0_0_25px_rgba(102,252,241,0.5)] transition-all duration-300">
                L
              </div>
              <span className="text-2xl font-bold tracking-widest text-white font-sans">LΣΧΙΛ</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-lexia-accent bg-lexia-card border border-lexia-secondary/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium px-4 py-2">
              Login
            </Link>
            <Link to="/login" className="bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-lg shadow-lexia-secondary/20 hover:shadow-lexia-accent/40">
              Cadastre-se
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-lexia-card border-b border-gray-800 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-4 flex flex-col gap-2 px-3">
              <Link to="/login" className="block w-full text-center py-2 text-base font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg">
                Login
              </Link>
              <Link to="/login" className="block w-full text-center py-2 text-base font-medium bg-lexia-secondary text-lexia-dark rounded-lg font-bold">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
