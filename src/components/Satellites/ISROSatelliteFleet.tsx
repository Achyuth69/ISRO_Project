import React, { useState } from 'react';
import { Search, Filter, Grid, List, RefreshCw, Satellite, Globe, Radar } from 'lucide-react';
import { ISROSatelliteCard } from './ISROSatelliteCard';
import { ISROSatelliteData } from '../../types';
import { useISROSatelliteData } from '../../hooks/useISROSatelliteData';

export const ISROSatelliteFleet: React.FC = () => {
  const { data, loading, refreshData } = useISROSatelliteData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSatellite, setSelectedSatellite] = useState<ISROSatelliteData | null>(null);

  const filteredData = data.filter(satellite => {
    const matchesSearch = satellite.satelliteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         satellite.missionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         satellite.coverage.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || satellite.missionType === filterType;
    const matchesStatus = filterStatus === 'all' || satellite.operationalStatus === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleViewDetails = (satellite: ISROSatelliteData) => {
    setSelectedSatellite(satellite);
  };

  const getFleetStats = () => {
    const active = data.filter(s => s.operationalStatus === 'active').length;
    const earthObs = data.filter(s => s.missionType === 'earth-observation').length;
    const navigation = data.filter(s => s.missionType === 'navigation').length;
    return { active, earthObs, navigation, total: data.length };
  };

  const stats = getFleetStats();

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-96 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ISRO Satellite Fleet</h1>
          <p className="text-gray-600 mt-2">
            Comprehensive overview of India's space-based assets and missions
          </p>
        </div>
        <button
          onClick={refreshData}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-lg hover:from-orange-700 hover:to-blue-700 transition-all"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh Fleet Data</span>
        </button>
      </div>

      {/* Fleet Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <Satellite className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-orange-100 text-sm">Total Satellites</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">{stats.active}</div>
              <div className="text-green-100 text-sm">Active Missions</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <Radar className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">{stats.earthObs}</div>
              <div className="text-blue-100 text-sm">Earth Observation</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8" />
            <div>
              <div className="text-2xl font-bold">{stats.navigation}</div>
              <div className="text-purple-100 text-sm">Navigation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search satellites, missions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Mission Types</option>
                <option value="earth-observation">Earth Observation</option>
                <option value="navigation">Navigation</option>
                <option value="communication">Communication</option>
                <option value="scientific">Scientific</option>
                <option value="military">Military</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="standby">Standby</option>
                <option value="testing">Testing</option>
                <option value="decommissioned">Decommissioned</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredData.length} of {data.length} satellites
        </p>
      </div>

      {/* Satellite Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredData.map((satellite) => (
          <ISROSatelliteCard
            key={satellite.id}
            satellite={satellite}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No satellites found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Satellite Detail Modal */}
      {selectedSatellite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedSatellite.satelliteName}</h2>
                  <p className="text-gray-600">{selectedSatellite.missionName}</p>
                </div>
                <button
                  onClick={() => setSelectedSatellite(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedSatellite.imageUrl}
                    alt={selectedSatellite.satelliteName}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <h3 className="font-semibold text-gray-900 mb-4">Mission Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div><span className="text-gray-600">Launch Vehicle:</span> {selectedSatellite.launchVehicle}</div>
                      <div><span className="text-gray-600">Launch Date:</span> {new Date(selectedSatellite.launchDate).toLocaleDateString('en-IN')}</div>
                      <div><span className="text-gray-600">Mission Type:</span> {selectedSatellite.missionType}</div>
                      <div><span className="text-gray-600">Status:</span> {selectedSatellite.operationalStatus}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Orbital Parameters</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><span className="text-gray-600">Type:</span> {selectedSatellite.orbit.type}</div>
                        <div><span className="text-gray-600">Altitude:</span> {selectedSatellite.orbit.altitude} km</div>
                        <div><span className="text-gray-600">Inclination:</span> {selectedSatellite.orbit.inclination}°</div>
                        <div><span className="text-gray-600">Period:</span> {selectedSatellite.orbit.period} min</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Payload Information</h4>
                      <div className="text-sm space-y-2">
                        <div><span className="text-gray-600">Resolution:</span> {selectedSatellite.payload.resolution}m</div>
                        <div><span className="text-gray-600">Swath Width:</span> {selectedSatellite.payload.swathWidth} km</div>
                        <div><span className="text-gray-600">Spectral Bands:</span> {selectedSatellite.payload.spectralBands}</div>
                        <div>
                          <span className="text-gray-600">Instruments:</span>
                          <div className="mt-1">
                            {selectedSatellite.payload.instruments.map((instrument, index) => (
                              <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                                {instrument}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">System Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><span className="text-gray-600">Mass:</span> {selectedSatellite.technicalSpecs.mass} kg</div>
                        <div><span className="text-gray-600">Power:</span> {selectedSatellite.technicalSpecs.power} W</div>
                        <div><span className="text-gray-600">Design Life:</span> {selectedSatellite.technicalSpecs.designLife} years</div>
                        <div><span className="text-gray-600">Data Rate:</span> {selectedSatellite.technicalSpecs.dataRate} Mbps</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedSatellite.dataProducts && selectedSatellite.dataProducts.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Available Data Products</h3>
                  <div className="space-y-3">
                    {selectedSatellite.dataProducts.map((product) => (
                      <div key={product.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">Product Level {product.productType}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            product.qualityFlag === 'excellent' ? 'bg-green-100 text-green-800' :
                            product.qualityFlag === 'good' ? 'bg-blue-100 text-blue-800' :
                            product.qualityFlag === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {product.qualityFlag}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{product.processingLevel}</p>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                          <div>Acquisition: {new Date(product.acquisitionDate).toLocaleDateString('en-IN')}</div>
                          <div>Cloud Cover: {product.cloudCover}%</div>
                        </div>
                        <div className="mt-2">
                          <span className="text-xs text-gray-600">Applications: </span>
                          {product.applications.map((app, index) => (
                            <span key={index} className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-1">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};