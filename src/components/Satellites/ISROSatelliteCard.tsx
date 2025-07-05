import React from 'react';
import { Calendar, MapPin, Zap, Eye, Download, Satellite, Activity, Shield } from 'lucide-react';
import { ISROSatelliteData } from '../../types';

interface ISROSatelliteCardProps {
  satellite: ISROSatelliteData;
  onViewDetails: (satellite: ISROSatelliteData) => void;
}

export const ISROSatelliteCard: React.FC<ISROSatelliteCardProps> = ({ satellite, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'standby': return 'bg-yellow-100 text-yellow-800';
      case 'testing': return 'bg-blue-100 text-blue-800';
      case 'decommissioned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMissionTypeColor = (type: string) => {
    switch (type) {
      case 'earth-observation': return 'bg-blue-100 text-blue-800';
      case 'navigation': return 'bg-purple-100 text-purple-800';
      case 'communication': return 'bg-green-100 text-green-800';
      case 'scientific': return 'bg-orange-100 text-orange-800';
      case 'military': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLaunchVehicleIcon = (vehicle: string) => {
    switch (vehicle) {
      case 'PSLV': return '🚀';
      case 'GSLV': return '🛸';
      case 'GSLV-MkIII': return '🚁';
      case 'SSLV': return '✈️';
      default: return '🛰️';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={satellite.imageUrl}
          alt={satellite.satelliteName}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMissionTypeColor(satellite.missionType)}`}>
            {satellite.missionType.replace('-', ' ').toUpperCase()}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
            {getLaunchVehicleIcon(satellite.launchVehicle)} {satellite.launchVehicle}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(satellite.operationalStatus)}`}>
            {satellite.operationalStatus.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {satellite.orbit.type} • {satellite.orbit.altitude} km
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{satellite.satelliteName}</h3>
          <p className="text-sm text-gray-600">{satellite.missionName}</p>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            Launched: {new Date(satellite.launchDate).toLocaleDateString('en-IN')}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {satellite.coverage.region}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Activity className="h-4 w-4 mr-2" />
            {satellite.payload.instruments.length} instruments
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-600">Resolution: </span>
            <span className="font-medium text-gray-900">{satellite.payload.resolution}m</span>
          </div>
          <div>
            <span className="text-gray-600">Mass: </span>
            <span className="font-medium text-gray-900">{satellite.technicalSpecs.mass}kg</span>
          </div>
          <div>
            <span className="text-gray-600">Power: </span>
            <span className="font-medium text-gray-900">{satellite.technicalSpecs.power}W</span>
          </div>
          <div>
            <span className="text-gray-600">Life: </span>
            <span className="font-medium text-gray-900">{satellite.technicalSpecs.designLife}y</span>
          </div>
        </div>

        {satellite.dataProducts && satellite.dataProducts.length > 0 && (
          <div className="flex items-center text-sm text-blue-600 mb-4">
            <Zap className="h-4 w-4 mr-1" />
            {satellite.dataProducts.length} data products available
          </div>
        )}

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(satellite)}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all"
          >
            <Eye className="h-4 w-4 mr-2" />
            Mission Details
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4" />
          </button>
          <button className="px-4 py-2 border border-orange-300 text-orange-700 text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors">
            <Shield className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};