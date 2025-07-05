import React, { useState } from 'react';
import { Satellite, User, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { LanguageSelector } from '../Common/LanguageSelector';
import { VoiceControl } from '../Common/VoiceControl';
import { useLanguage } from '../../hooks/useLanguage';

interface ISROLoginFormProps {
  onLogin: (employeeId: string, password: string) => Promise<void>;
  loading: boolean;
}

export const ISROLoginForm: React.FC<ISROLoginFormProps> = ({ onLogin, loading }) => {
  const { t } = useLanguage();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!employeeId || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await onLogin(employeeId, password);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleVoiceCommand = (command: string) => {
    const normalizedCommand = command.toLowerCase().trim();
    
    // Voice commands for login form
    if (normalizedCommand.includes('login') || normalizedCommand.includes('sign in')) {
      if (employeeId && password) {
        handleSubmit(new Event('submit') as any);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-blue-800 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Language and Voice Controls */}
        <div className="flex justify-end mb-4 space-x-2">
          <VoiceControl onCommand={handleVoiceCommand} />
          <LanguageSelector />
        </div>

        {/* ISRO Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative">
              <Satellite className="h-16 w-16 text-orange-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-white">{t('header.title')}</h1>
              <p className="text-orange-200 text-sm">{t('header.subtitle')}</p>
            </div>
          </div>
          <p className="text-blue-200">Satellite Navigation & Earth Observation System</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-green-200 text-sm">{t('header.secureConnection')}</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Authorized Access</h2>
            <p className="text-gray-600">Enter your ISRO credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                Employee ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="SAC/EOS/2024/001"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Format: DEPT/DIV/YEAR/ID</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                t('common.login')
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Demo: Use any Employee ID and password
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800 font-medium">Security Notice</p>
              <p className="text-xs text-blue-700">This is a classified government system. Unauthorized access is prohibited.</p>
            </div>
          </div>
        </div>

        {/* Mission Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold text-orange-300">104</div>
            <div className="text-sm text-orange-200">Satellites Launched</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold text-blue-300">50+</div>
            <div className="text-sm text-blue-200">Active Missions</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold text-green-300">99.8%</div>
            <div className="text-sm text-green-200">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};