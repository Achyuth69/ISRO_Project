import { useState, useEffect } from 'react';
import { ISROSatelliteData } from '../types';

const mockISROSatelliteData: ISROSatelliteData[] = [
  {
    id: 'CARTOSAT-3',
    missionName: 'Cartosat-3 Mission',
    satelliteName: 'Cartosat-3',
    launchVehicle: 'PSLV',
    launchDate: '2019-11-27T09:28:00Z',
    missionType: 'earth-observation',
    orbit: {
      type: 'SSO',
      altitude: 509,
      inclination: 97.5,
      period: 94.6
    },
    payload: {
      instruments: ['Panchromatic Camera', 'Multispectral Camera'],
      resolution: 0.25,
      swathWidth: 16,
      spectralBands: 4
    },
    operationalStatus: 'active',
    dataProducts: [
      {
        id: 'CART3_L1_001',
        productType: 'L1',
        processingLevel: 'Radiometrically Corrected',
        acquisitionDate: '2024-01-15T05:30:00Z',
        cloudCover: 5,
        qualityFlag: 'excellent',
        applications: ['Urban Planning', 'Infrastructure Monitoring', 'Cadastral Mapping'],
        metadata: {
          scene_id: 'CART3_20240115_053000',
          path_row: '097_045',
          sun_elevation: 45.2,
          sun_azimuth: 135.8
        }
      }
    ],
    coverage: {
      region: 'Indian Subcontinent',
      coordinates: [[8.0, 68.0], [37.0, 97.0]]
    },
    imageUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=300',
    technicalSpecs: {
      mass: 1625,
      power: 1800,
      designLife: 5,
      dataRate: 560
    }
  },
  {
    id: 'RESOURCESAT-3',
    missionName: 'ResourceSat-3 Mission',
    satelliteName: 'ResourceSat-3',
    launchVehicle: 'PSLV',
    launchDate: '2021-02-28T10:24:00Z',
    missionType: 'earth-observation',
    orbit: {
      type: 'SSO',
      altitude: 817,
      inclination: 98.7,
      period: 101.3
    },
    payload: {
      instruments: ['LISS-3', 'LISS-4', 'AWiFS'],
      resolution: 5.8,
      swathWidth: 70,
      spectralBands: 11
    },
    operationalStatus: 'active',
    dataProducts: [
      {
        id: 'RS3_L2_001',
        productType: 'L2',
        processingLevel: 'Geometrically Corrected',
        acquisitionDate: '2024-01-14T06:15:00Z',
        cloudCover: 15,
        qualityFlag: 'good',
        applications: ['Agriculture Monitoring', 'Forest Assessment', 'Land Use Classification'],
        metadata: {
          scene_id: 'RS3_20240114_061500',
          path_row: '098_055',
          sun_elevation: 52.1,
          sun_azimuth: 142.3
        }
      }
    ],
    coverage: {
      region: 'Agricultural Regions of India',
      coordinates: [[15.0, 72.0], [28.0, 88.0]]
    },
    imageUrl: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=300',
    technicalSpecs: {
      mass: 1400,
      power: 1650,
      designLife: 5,
      dataRate: 105
    }
  },
  {
    id: 'RISAT-2B',
    missionName: 'RISAT-2B Mission',
    satelliteName: 'RISAT-2B',
    launchVehicle: 'PSLV',
    launchDate: '2019-05-22T05:30:00Z',
    missionType: 'earth-observation',
    orbit: {
      type: 'SSO',
      altitude: 557,
      inclination: 97.5,
      period: 95.9
    },
    payload: {
      instruments: ['X-band SAR'],
      resolution: 1.0,
      swathWidth: 10,
      spectralBands: 1
    },
    operationalStatus: 'active',
    dataProducts: [
      {
        id: 'RISAT2B_L1_001',
        productType: 'L1',
        processingLevel: 'Single Look Complex',
        acquisitionDate: '2024-01-13T11:45:00Z',
        cloudCover: 0,
        qualityFlag: 'excellent',
        applications: ['Border Monitoring', 'Disaster Management', 'Security Applications'],
        metadata: {
          scene_id: 'RISAT2B_20240113_114500',
          path_row: '095_038',
          sun_elevation: 0,
          sun_azimuth: 0
        }
      }
    ],
    coverage: {
      region: 'Border Areas',
      coordinates: [[23.0, 68.0], [35.0, 97.0]]
    },
    imageUrl: 'https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=300',
    technicalSpecs: {
      mass: 615,
      power: 1200,
      designLife: 5,
      dataRate: 300
    }
  },
  {
    id: 'OCEANSAT-3',
    missionName: 'OceanSat-3 Mission',
    satelliteName: 'OceanSat-3',
    launchVehicle: 'PSLV',
    launchDate: '2021-11-26T18:02:00Z',
    missionType: 'earth-observation',
    orbit: {
      type: 'SSO',
      altitude: 817,
      inclination: 98.6,
      period: 101.3
    },
    payload: {
      instruments: ['Ocean Color Monitor', 'Ku-band Scatterometer'],
      resolution: 360,
      swathWidth: 1420,
      spectralBands: 13
    },
    operationalStatus: 'active',
    dataProducts: [
      {
        id: 'OS3_L2_001',
        productType: 'L2',
        processingLevel: 'Ocean Color Products',
        acquisitionDate: '2024-01-12T07:30:00Z',
        cloudCover: 20,
        qualityFlag: 'good',
        applications: ['Ocean Monitoring', 'Fisheries', 'Coastal Zone Management'],
        metadata: {
          scene_id: 'OS3_20240112_073000',
          path_row: '099_025',
          sun_elevation: 38.5,
          sun_azimuth: 128.7
        }
      }
    ],
    coverage: {
      region: 'Indian Ocean',
      coordinates: [[0.0, 60.0], [25.0, 100.0]]
    },
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumbnailUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300',
    technicalSpecs: {
      mass: 1000,
      power: 1400,
      designLife: 5,
      dataRate: 200
    }
  }
];

export const useISROSatelliteData = () => {
  const [data, setData] = useState<ISROSatelliteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate ISRO data center API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData(mockISROSatelliteData);
      } catch (err) {
        setError('Failed to fetch ISRO satellite data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshData = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setData([...mockISROSatelliteData]);
    setLoading(false);
  };

  return { data, loading, error, refreshData };
};