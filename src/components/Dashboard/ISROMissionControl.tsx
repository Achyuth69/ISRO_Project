import React from 'react';
import { 
  Satellite, 
  TrendingUp, 
  AlertTriangle, 
  Database,
  Activity,
  Globe,
  Zap,
  Eye,
  Radar,
  Shield,
  Clock,
  MapPin
} from 'lucide-react';
import { ISROStatsCard } from './ISROStatsCard';
import { useISROSatelliteData } from '../../hooks/useISROSatelliteData';

export const ISROMissionControl: React.FC = () => {
  const { data, loading } = useISROSatelliteData();

  const stats = [
    {
      title: 'Active Satellites',
      value: '47',
      change: '+3 this quarter',
      changeType: 'positive' as const,
      icon: Satellite,
      color: 'orange' as const,
      classification: 'public' as const
    },
    {
      title: 'Mission Success Rate',
      value: '99.8',
      change: 'Industry Leading',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'green' as const,
      unit: '%',
      classification: 'public' as const
    },
    {
      title: 'Critical Alerts',
      value: '2',
      change: 'Under monitoring',
      changeType: 'neutral' as const,
      icon: AlertTriangle,
      color: 'red' as const,
      classification: 'restricted' as const
    },
    {
      title: 'Data Processed',
      value: '2.4',
      change: '+340 GB today',
      changeType: 'positive' as const,
      icon: Database,
      color: 'blue' as const,
      unit: 'TB',
      classification: 'confidential' as const
    }
  ];

  const activeMissions = [
    {
      id: 1,
      name: 'Chandrayaan-3',
      status: 'Lunar Surface Operations',
      location: 'Moon South Pole',
      priority: 'high',
      lastUpdate: '2 hours ago'
    },
    {
      id: 2,
      name: 'Aditya-L1',
      status: 'Solar Observation',
      location: 'L1 Lagrange Point',
      priority: 'medium',
      lastUpdate: '4 hours ago'
    },
    {
      id: 3,
      name: 'Gaganyaan Prep',
      status: 'Pre-flight Testing',
      location: 'SDSC SHAR',
      priority: 'critical',
      lastUpdate: '1 hour ago'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      title: 'Cyclone Monitoring - Bay of Bengal',
      description: 'Severe cyclonic storm detected, emergency response activated',
      severity: 'critical',
      time: '1 hour ago',
      location: 'Eastern Coast',
      satellite: 'INSAT-3DR'
    },
    {
      id: 2,
      title: 'Forest Fire Detection - Uttarakhand',
      description: 'Multiple fire hotspots identified in forest areas',
      severity: 'high',
      time: '3 hours ago',
      location: 'Uttarakhand',
      satellite: 'ResourceSat-3'
    },
    {
      id: 3,
      title: 'Crop Health Assessment Complete',
      description: 'Punjab agricultural region analysis completed',
      severity: 'low',
      time: '5 hours ago',
      location: 'Punjab',
      satellite: 'Cartosat-3'
    }
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-32 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mission Control Center</h1>
          <p className="text-gray-600 mt-2">
            Real-time monitoring of ISRO satellite operations and space missions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 text-sm font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <ISROStatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Missions */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Radar className="h-6 w-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-900">Active Missions</h2>
            </div>
            <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
              View All Missions
            </button>
          </div>
          <div className="space-y-4">
            {activeMissions.map((mission) => (
              <div key={mission.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-3 h-3 rounded-full ${
                  mission.priority === 'critical' ? 'bg-red-500' :
                  mission.priority === 'high' ? 'bg-orange-500' :
                  'bg-green-500'
                } animate-pulse`}></div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{mission.name}</h3>
                  <p className="text-sm text-gray-600">{mission.status}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{mission.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{mission.lastUpdate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    mission.priority === 'critical' ? 'bg-red-100 text-red-800' :
                    mission.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {mission.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-semibold text-gray-900">Mission Alerts</h2>
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 text-sm">{alert.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-blue-600">{alert.satellite}</span>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Mission Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Satellite className="h-6 w-6 text-orange-600" />
            <span className="font-medium text-orange-900">Launch Control</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Globe className="h-6 w-6 text-blue-600" />
            <span className="font-medium text-blue-900">Earth Observation</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Activity className="h-6 w-6 text-green-600" />
            <span className="font-medium text-green-900">Telemetry</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Zap className="h-6 w-6 text-purple-600" />
            <span className="font-medium text-purple-900">Data Processing</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <Shield className="h-6 w-6 text-red-600" />
            <span className="font-medium text-red-900">Security Center</span>
          </button>
        </div>
      </div>
    </div>
  );
};