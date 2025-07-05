import React from 'react';
import { 
  Satellite, 
  TrendingUp, 
  AlertTriangle, 
  Database,
  Activity,
  Globe,
  Zap,
  Eye
} from 'lucide-react';
import { StatsCard } from './StatsCard';
import { useSatelliteData } from '../../hooks/useSatelliteData';

export const Dashboard: React.FC = () => {
  const { data, loading } = useSatelliteData();

  const stats = [
    {
      title: 'Active Satellites',
      value: '247',
      change: '+12 this month',
      changeType: 'positive' as const,
      icon: Satellite,
      color: 'blue' as const
    },
    {
      title: 'AI Analyses Completed',
      value: '1,429',
      change: '+23% from last month',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'green' as const
    },
    {
      title: 'Environmental Alerts',
      value: '18',
      change: '3 critical',
      changeType: 'negative' as const,
      icon: AlertTriangle,
      color: 'red' as const
    },
    {
      title: 'Data Processed (TB)',
      value: '847.2',
      change: '+156 TB this week',
      changeType: 'positive' as const,
      icon: Database,
      color: 'purple' as const
    }
  ];

  const recentInsights = [
    {
      id: 1,
      title: 'Amazon Deforestation Alert',
      description: 'Critical deforestation detected in protected area',
      severity: 'critical',
      time: '2 hours ago',
      location: 'Brazil'
    },
    {
      id: 2,
      title: 'Arctic Ice Analysis Complete',
      description: 'Ice sheet thickness measurements updated',
      severity: 'medium',
      time: '4 hours ago',
      location: 'Arctic Ocean'
    },
    {
      id: 3,
      title: 'Urban Growth Detected',
      description: 'Rapid expansion in Mumbai coastal areas',
      severity: 'low',
      time: '6 hours ago',
      location: 'India'
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Real-time insights from global satellite observations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Satellite Data */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Satellite Data</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {data.slice(0, 3).map((satellite) => (
              <div key={satellite.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={satellite.thumbnailUrl}
                  alt={satellite.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{satellite.name}</h3>
                  <p className="text-sm text-gray-600">{satellite.location.name}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      satellite.analysisStatus === 'completed' ? 'bg-green-100 text-green-800' :
                      satellite.analysisStatus === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {satellite.analysisStatus}
                    </span>
                    <span className="text-xs text-gray-500">
                      {satellite.resolution}m resolution
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {satellite.cloudCover}% clouds
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(satellite.captureDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">AI Insights</h2>
            <Eye className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentInsights.map((insight) => (
              <div key={insight.id} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 text-sm">{insight.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    insight.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    insight.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">{insight.location}</span>
                  <span className="text-xs text-gray-500">{insight.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Satellite className="h-6 w-6 text-blue-600" />
            <span className="font-medium text-blue-900">New Analysis</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Globe className="h-6 w-6 text-green-600" />
            <span className="font-medium text-green-900">View Map</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Activity className="h-6 w-6 text-purple-600" />
            <span className="font-medium text-purple-900">Live Monitoring</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
            <Zap className="h-6 w-6 text-yellow-600" />
            <span className="font-medium text-yellow-900">AI Training</span>
          </button>
        </div>
      </div>
    </div>
  );
};