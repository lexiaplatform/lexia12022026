import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to driver dashboard by default for demo
    navigate('/dashboard/driver');
  };

  return (
    <div className="min-h-screen bg-lexia-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-lexia-card border border-gray-800 rounded-xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-lexia-secondary text-lexia-dark font-bold text-2xl mb-4">
            L
          </div>
          <h2 className="text-2xl font-bold text-white">Acesse sua conta</h2>
          <p className="text-gray-400 mt-2">Bem-vindo de volta à Lexia Platform</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email ou CPF</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 bg-lexia-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lexia-secondary transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-lexia-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lexia-secondary transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="mr-2 rounded bg-gray-700 border-gray-600 text-lexia-secondary focus:ring-0" />
              Lembrar-me
            </label>
            <a href="#" className="text-lexia-secondary hover:text-lexia-accent">Esqueceu a senha?</a>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-lexia-secondary hover:bg-lexia-accent text-lexia-dark font-bold rounded-lg transition-colors"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          Não tem uma conta? <Link to="/" className="text-lexia-secondary hover:text-lexia-accent font-medium">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
