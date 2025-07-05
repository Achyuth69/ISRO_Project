import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Leaf, 
  Droplets, 
  Building,
  BarChart3,
  Download,
  Play,
  Pause
} from 'lucide-react';

export const AnalysisPanel: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState('vegetation');

  const analysisTypes = [
    { id: 'vegetation', name: 'Vegetation Health', icon: Leaf, color: 'green' },
    { id: 'water', name: 'Water Quality', icon: Droplets, color: 'blue' },
    { id: 'urban', name: 'Urban Growth', icon: Building, color: 'gray' },
    { id: 'deforestation', name: 'Deforestation', icon: AlertTriangle, color: 'red' },
  ];

  const analysisResults = {
    vegetation: {
      score: 78,
      trend: 'declining',
      insights: [
        'NDVI values show 12% decrease in vegetation health over the past 6 months',
        'Stress indicators detected in 23% of monitored forest areas',
        'Seasonal patterns suggest drought impact in northern regions'
      ]
    },
    water: {
      score: 85,
      trend: 'stable',
      insights: [
        'Water clarity remains within acceptable parameters',
        'Algae bloom detected in southeastern water bodies',
        'Temperature anomalies observed near industrial areas'
      ]
    },
    urban: {
      score: 92,
      trend: 'improving',
      insights: [
        'Urban expansion rate decreased by 8% compared to last year',
        'Green space integration improved in new developments',
        'Infrastructure development following sustainable patterns'
      ]
    },
    deforestation: {
      score: 34,
      trend: 'declining',
      insights: [
        'Critical deforestation rate increase of 45% in protected areas',
        'Illegal logging activities detected via change detection algorithms',
        'Immediate intervention required in 3 high-risk zones'
      ]
    }
  };

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const currentResults = analysisResults[selectedAnalysis as keyof typeof analysisResults];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Analysis</h1>
        <p className="text-gray-600 mt-2">
          Advanced machine learning analysis of satellite imagery
        </p>
      </div>

      {/* Analysis Type Selection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analysisTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedAnalysis(type.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAnalysis === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`h-8 w-8 mx-auto mb-2 ${
                  type.color === 'green' ? 'text-green-600' :
                  type.color === 'blue' ? 'text-blue-600' :
                  type.color === 'gray' ? 'text-gray-600' :
                  'text-red-600'
                }`} />
                <div className="text-sm font-medium text-gray-900">{type.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Analysis Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Analysis Controls</h2>
          <div className="flex space-x-3">
            <button
              onClick={handleStartAnalysis}
              disabled={isAnalyzing}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isAnalyzing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isAnalyzing ? 'Analyzing...' : 'Start Analysis'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {isAnalyzing && (
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <Brain className="h-5 w-5 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-gray-900">AI Processing in Progress</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">Analyzing satellite imagery using deep learning models...</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{currentResults.score}</div>
            <div className="text-sm text-gray-600">Health Score</div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              currentResults.trend === 'improving' ? 'text-green-600' :
              currentResults.trend === 'stable' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              <TrendingUp className="h-8 w-8 mx-auto" />
            </div>
            <div className="text-sm text-gray-600 capitalize">{currentResults.trend}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
        </div>
      </div>

      {/* Analysis Results */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
        </div>

        <div className="space-y-4">
          {currentResults.insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-xs font-medium text-blue-600">{index + 1}</span>
              </div>
              <p className="text-gray-700">{insight}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">AI Recommendation</h3>
              <p className="text-sm text-blue-800">
                Based on the analysis, we recommend implementing targeted monitoring in the identified risk areas 
                and establishing automated alert systems for early detection of environmental changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Trends */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Historical Trends</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Interactive trend visualization would be displayed here</p>
            <p className="text-sm text-gray-500 mt-2">Showing 12-month analysis history</p>
          </div>
        </div>
      </div>
    </div>
  );
};