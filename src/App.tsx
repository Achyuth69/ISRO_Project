import React, { useState } from 'react';
import { useISROAuth } from './hooks/useISROAuth';
import { useVoiceCommands } from './hooks/useVoiceCommands';
import { LanguageContext, useLanguageProvider } from './hooks/useLanguage';
import { ISROLoginForm } from './components/Auth/ISROLoginForm';
import { ISROHeader } from './components/Layout/ISROHeader';
import { ISROSidebar } from './components/Layout/ISROSidebar';
import { ISROMissionControl } from './components/Dashboard/ISROMissionControl';
import { ISROSatelliteFleet } from './components/Satellites/ISROSatelliteFleet';

function AppContent() {
  const { user, loading, login, logout } = useISROAuth();
  const [activeTab, setActiveTab] = useState('mission-control');
  const languageContext = useLanguageProvider();
  const { t } = languageContext;

  const handleRefresh = () => {
    window.location.reload();
  };

  const { processVoiceCommand } = useVoiceCommands({
    onNavigate: setActiveTab,
    onRefresh: handleRefresh,
    onLogout: logout
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 via-blue-800 to-green-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">{t('common.loading')}</p>
          <p className="text-orange-200 text-sm mt-2">Connecting to Mission Control</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <ISROLoginForm onLogin={login} loading={loading} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'mission-control':
        return <ISROMissionControl />;
      case 'satellites':
        return <ISROSatelliteFleet />;
      case 'earth-observation':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.earthObservation')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Advanced earth observation and remote sensing capabilities</p>
              <p className="text-sm text-gray-500 mt-2">Real-time monitoring of environmental changes and natural disasters</p>
            </div>
          </div>
        );
      case 'analysis':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.dataAnalysis')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">AI-powered analysis of satellite imagery and sensor data</p>
              <p className="text-sm text-gray-500 mt-2">Machine learning algorithms for pattern recognition and prediction</p>
            </div>
          </div>
        );
      case 'remote-sensing':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.remoteSensing')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Multi-spectral and hyperspectral remote sensing capabilities</p>
              <p className="text-sm text-gray-500 mt-2">Agriculture, forestry, urban planning, and mineral exploration</p>
            </div>
          </div>
        );
      case 'mapping':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.gisMapping')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">High-resolution mapping and cartographic services</p>
              <p className="text-sm text-gray-500 mt-2">Digital elevation models, land use maps, and cadastral surveys</p>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.missionAlerts')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Real-time alerts for natural disasters and security threats</p>
              <p className="text-sm text-gray-500 mt-2">Automated monitoring and early warning systems</p>
            </div>
          </div>
        );
      case 'tracking':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.orbitTracking')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Real-time tracking of satellite positions and orbital parameters</p>
              <p className="text-sm text-gray-500 mt-2">Collision avoidance and mission planning support</p>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.spaceProjects')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Comprehensive project management for space missions</p>
              <p className="text-sm text-gray-500 mt-2">Timeline tracking, resource allocation, and milestone monitoring</p>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.missionReports')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Automated report generation and mission documentation</p>
              <p className="text-sm text-gray-500 mt-2">Technical reports, mission summaries, and data analysis</p>
            </div>
          </div>
        );
      case 'personnel':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.personnel')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">ISRO personnel and team management system</p>
              <p className="text-sm text-gray-500 mt-2">Role assignments, clearance levels, and access control</p>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.securityCenter')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">Classified information security and access control</p>
              <p className="text-sm text-gray-500 mt-2">Multi-level security protocols and threat monitoring</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('navigation.systemConfig')}</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-600">System settings and configuration management</p>
              <p className="text-sm text-gray-500 mt-2">Network settings, user preferences, and system parameters</p>
            </div>
          </div>
        );
      default:
        return <ISROMissionControl />;
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      <ISROSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ISROHeader user={user} onLogout={logout} onVoiceCommand={processVoiceCommand} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  const languageContext = useLanguageProvider();

  return (
    <LanguageContext.Provider value={languageContext}>
      <AppContent />
    </LanguageContext.Provider>
  );
}

export default App;