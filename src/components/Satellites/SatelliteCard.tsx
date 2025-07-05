import React from 'react';
import { Calendar, MapPin, Cloud, Zap, Eye, Download } from 'lucide-react';
import { SatelliteData } from '../../types';

interface SatelliteCardProps {
  satellite: SatelliteData;
  onViewDetails: (satellite: SatelliteData) => void;
}

export const SatelliteCard: React.FC<SatelliteCardProps> = ({ satellite, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'optical': return 'bg-blue-100 text-blue-800';
      case 'radar': return 'bg-purple-100 text-purple-800';
      case 'thermal': return 'bg-red-100 text-red-800';
      case 'multispectral': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={satellite.imageUrl}
          alt={satellite.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(satellite.type)}`}>
            {satellite.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(satellite.analysisStatus)}`}>
            {satellite.analysisStatus}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{satellite.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {satellite.location.name}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(satellite.captureDate).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Cloud className="h-4 w-4 mr-2" />
            {satellite.cloudCover}% cloud cover
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            <span className="text-gray-600">Resolution: </span>
            <span className="font-medium text-gray-900">{satellite.resolution}m</span>
          </div>
          {satellite.aiInsights && satellite.aiInsights.length > 0 && (
            <div className="flex items-center text-sm text-blue-600">
              <Zap className="h-4 w-4 mr-1" />
              {satellite.aiInsights.length} AI insights
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(satellite)}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};