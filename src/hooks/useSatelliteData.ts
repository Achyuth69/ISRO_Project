import { useState, useEffect } from 'react';
import { SatelliteData, AIInsight } from '../types';

const mockSatelliteData: SatelliteData[] = [
  {
    id: '1',
    name: 'Amazon Basin - Deforestation Monitor',
    type: 'optical',
    resolution: 10,
    captureDate: '2024-01-15T10:30:00Z',
    location: { lat: -3.4653, lng: -62.2159, name: 'Amazon Rainforest, Brazil' },
    cloudCover: 15,
    analysisStatus: 'completed',
    imageUrl: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=300',
    aiInsights: [
      {
        id: '1',
        type: 'deforestation',
        confidence: 0.92,
        description: 'Significant deforestation detected in protected area',
        coordinates: [[-3.4653, -62.2159], [-3.4753, -62.2259]],
        severity: 'critical',
        trend: 'declining'
      }
    ]
  },
  {
    id: '2',
    name: 'Arctic Ice Sheet Analysis',
    type: 'radar',
    resolution: 25,
    captureDate: '2024-01-14T14:20:00Z',
    location: { lat: 80.0, lng: -85.0, name: 'Arctic Ocean' },
    cloudCover: 0,
    analysisStatus: 'completed',
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300',
    aiInsights: [
      {
        id: '2',
        type: 'water',
        confidence: 0.88,
        description: 'Ice sheet thickness reduction observed',
        coordinates: [[80.0, -85.0], [80.1, -84.9]],
        severity: 'high',
        trend: 'declining'
      }
    ]
  },
  {
    id: '3',
    name: 'California Wildfire Assessment',
    type: 'thermal',
    resolution: 30,
    captureDate: '2024-01-13T16:45:00Z',
    location: { lat: 34.0522, lng: -118.2437, name: 'Los Angeles County, CA' },
    cloudCover: 5,
    analysisStatus: 'processing',
    imageUrl: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Urban Growth - Mumbai',
    type: 'multispectral',
    resolution: 15,
    captureDate: '2024-01-12T08:15:00Z',
    location: { lat: 19.0760, lng: 72.8777, name: 'Mumbai, India' },
    cloudCover: 25,
    analysisStatus: 'completed',
    imageUrl: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=300',
    aiInsights: [
      {
        id: '3',
        type: 'urban',
        confidence: 0.95,
        description: 'Rapid urban expansion detected in coastal areas',
        coordinates: [[19.0760, 72.8777], [19.0860, 72.8877]],
        severity: 'medium',
        trend: 'stable'
      }
    ]
  }
];

export const useSatelliteData = () => {
  const [data, setData] = useState<SatelliteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData(mockSatelliteData);
      } catch (err) {
        setError('Failed to fetch satellite data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshData = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setData([...mockSatelliteData]);
    setLoading(false);
  };

  return { data, loading, error, refreshData };
};