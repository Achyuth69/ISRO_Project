import React, { useState } from 'react';
import { Search, Filter, Grid, List, RefreshCw } from 'lucide-react';
import { SatelliteCard } from './SatelliteCard';
import { SatelliteData } from '../../types';
import { useSatelliteData } from '../../hooks/useSatelliteData';

export const SatelliteList: React.FC = () => {
  const { data, loading, refreshData } = useSatelliteData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSatellite, setSelectedSatellite] = useState<SatelliteData | null>(null);

  const filteredData = data.filter(satellite => {
    const matchesSearch = satellite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         satellite.location.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || satellite.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleViewDetails = (satellite: SatelliteData) => {
    setSelectedSatellite(satellite);
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-80 rounded-xl"></div>
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
          <h1 className="text-3xl font-bold text-gray-900">Satellite Data</h1>
          <p className="text-gray-600 mt-2">
            Browse and analyze satellite imagery from around the world
          </p>
        </div>
        <button
          onClick={refreshData}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search satellites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="optical">Optical</option>
                <option value="radar">Radar</option>
                <option value="thermal">Thermal</option>
                <option value="multispectral">Multispectral</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
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
          <SatelliteCard
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
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedSatellite.name}</h2>
                <button
                  onClick={() => setSelectedSatellite(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedSatellite.imageUrl}
                alt={selectedSatellite.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Type:</span> {selectedSatellite.type}</div>
                    <div><span className="text-gray-600">Resolution:</span> {selectedSatellite.resolution}m</div>
                    <div><span className="text-gray-600">Capture Date:</span> {new Date(selectedSatellite.captureDate).toLocaleString()}</div>
                    <div><span className="text-gray-600">Location:</span> {selectedSatellite.location.name}</div>
                    <div><span className="text-gray-600">Cloud Cover:</span> {selectedSatellite.cloudCover}%</div>
                    <div><span className="text-gray-600">Status:</span> {selectedSatellite.analysisStatus}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">AI Insights</h3>
                  {selectedSatellite.aiInsights && selectedSatellite.aiInsights.length > 0 ? (
                    <div className="space-y-3">
                      {selectedSatellite.aiInsights.map((insight) => (
                        <div key={insight.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{insight.type}</span>
                            <span className="text-sm text-gray-600">{Math.round(insight.confidence * 100)}% confidence</span>
                          </div>
                          <p className="text-sm text-gray-600">{insight.description}</p>
                          {insight.severity && (
                            <span className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                              insight.severity === 'critical' ? 'bg-red-100 text-red-800' :
                              insight.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                              insight.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {insight.severity}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm">No AI insights available yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};