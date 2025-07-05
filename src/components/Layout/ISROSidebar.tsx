import React from 'react';
import { 
  Home, 
  Satellite, 
  BarChart3, 
  Map, 
  Database, 
  Settings,
  FileText,
  Users,
  AlertTriangle,
  Radar,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface ISROSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ISROSidebar: React.FC<ISROSidebarProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const menuItems = [
    { id: 'mission-control', label: t('navigation.missionControl'), icon: Home, category: 'Operations' },
    { id: 'satellites', label: t('navigation.satelliteFleet'), icon: Satellite, category: 'Operations' },
    { id: 'earth-observation', label: t('navigation.earthObservation'), icon: Globe, category: 'Operations' },
    { id: 'analysis', label: t('navigation.dataAnalysis'), icon: BarChart3, category: 'Analysis' },
    { id: 'remote-sensing', label: t('navigation.remoteSensing'), icon: Radar, category: 'Analysis' },
    { id: 'mapping', label: t('navigation.gisMapping'), icon: Map, category: 'Analysis' },
    { id: 'alerts', label: t('navigation.missionAlerts'), icon: AlertTriangle, category: 'Monitoring' },
    { id: 'tracking', label: t('navigation.orbitTracking'), icon: Zap, category: 'Monitoring' },
    { id: 'projects', label: t('navigation.spaceProjects'), icon: Database, category: 'Management' },
    { id: 'reports', label: t('navigation.missionReports'), icon: FileText, category: 'Management' },
    { id: 'personnel', label: t('navigation.personnel'), icon: Users, category: 'Administration' },
    { id: 'security', label: t('navigation.securityCenter'), icon: Shield, category: 'Administration' },
    { id: 'settings', label: t('navigation.systemConfig'), icon: Settings, category: 'Administration' },
  ];

  const categories = ['Operations', 'Analysis', 'Monitoring', 'Management', 'Administration'];

  return (
    <aside className="w-72 bg-gray-900 text-white h-full overflow-y-auto">
      <div className="p-4">
        <div className="bg-gradient-to-r from-orange-600 to-blue-600 p-4 rounded-lg mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">ISRO</div>
            <div className="text-orange-200 text-sm">Space Applications Centre</div>
            <div className="text-blue-200 text-xs mt-1">Ahmedabad, Gujarat</div>
          </div>
        </div>
      </div>

      <nav className="px-2">
        {categories.map((category) => (
          <div key={category} className="mb-6">
            <div className="px-4 mb-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {category}
              </h3>
            </div>
            <ul className="space-y-1">
              {menuItems
                .filter(item => item.category === category)
                .map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => onTabChange(item.id)}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                          activeTab === item.id
                            ? 'bg-gradient-to-r from-orange-600 to-blue-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                        {item.id === 'alerts' && (
                          <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        )}
                        {item.id === 'tracking' && (
                          <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="text-center">
            <div className="text-green-400 text-sm font-medium mb-1">{t('header.systemStatus')}</div>
            <div className="text-xs text-gray-400">{t('header.systemStatus')}</div>
            <div className="flex justify-center mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};