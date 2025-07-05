import React from 'react';
import { Satellite, Bell, Settings, User, LogOut, Shield, Globe, Clock } from 'lucide-react';
import { ISROUser } from '../../types';
import { LanguageSelector } from '../Common/LanguageSelector';
import { VoiceControl } from '../Common/VoiceControl';
import { useLanguage } from '../../hooks/useLanguage';

interface ISROHeaderProps {
  user: ISROUser | null;
  onLogout: () => void;
  onVoiceCommand?: (command: string) => void;
}

export const ISROHeader: React.FC<ISROHeaderProps> = ({ user, onLogout, onVoiceCommand }) => {
  const { t } = useLanguage();
  
  const getCurrentTime = () => {
    return new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-gradient-to-r from-orange-600 via-blue-800 to-green-600 text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Satellite className="h-10 w-10 text-orange-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t('header.title')}</h1>
              <p className="text-xs text-orange-200">{t('header.subtitle')}</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <Globe className="h-4 w-4 text-blue-300" />
              <span>{t('header.missionControl')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-green-300" />
              <span>IST: {currentTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Voice Control */}
          <VoiceControl onCommand={onVoiceCommand} />
          
          {/* Language Selector */}
          <LanguageSelector />

          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
              <Shield className="h-4 w-4 text-green-300" />
              <span className="text-sm">{t('header.secureConnection')}</span>
            </div>
          </div>

          <button className="p-2 text-orange-200 hover:text-white transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 text-orange-200 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          
          {user && (
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-orange-200">{user.department} | {user.role}</div>
                <div className="text-xs text-blue-200">ID: {user.employeeId}</div>
              </div>
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-orange-300"
                />
              ) : (
                <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300">
                  <User className="h-5 w-5 text-orange-600" />
                </div>
              )}
              <button
                onClick={onLogout}
                className="p-2 text-orange-200 hover:text-red-300 transition-colors"
                title={t('common.logout')}
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};