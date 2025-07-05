export interface ISROSatelliteData {
  id: string;
  missionName: string;
  satelliteName: string;
  launchVehicle: 'PSLV' | 'GSLV' | 'GSLV-MkIII' | 'SSLV';
  launchDate: string;
  missionType: 'earth-observation' | 'navigation' | 'communication' | 'scientific' | 'military';
  orbit: {
    type: 'LEO' | 'GEO' | 'SSO' | 'GTO' | 'Polar';
    altitude: number; // in km
    inclination: number; // in degrees
    period: number; // in minutes
  };
  payload: {
    instruments: string[];
    resolution: number; // in meters
    swathWidth: number; // in km
    spectralBands: number;
  };
  operationalStatus: 'active' | 'standby' | 'decommissioned' | 'testing';
  dataProducts: ISRODataProduct[];
  coverage: {
    region: string;
    coordinates: [number, number][];
  };
  imageUrl: string;
  thumbnailUrl: string;
  technicalSpecs: {
    mass: number; // in kg
    power: number; // in watts
    designLife: number; // in years
    dataRate: number; // in Mbps
  };
}

export interface ISRODataProduct {
  id: string;
  productType: 'L1' | 'L2' | 'L3' | 'L4';
  processingLevel: string;
  acquisitionDate: string;
  cloudCover: number;
  qualityFlag: 'excellent' | 'good' | 'fair' | 'poor';
  applications: string[];
  downloadUrl?: string;
  metadata: {
    scene_id: string;
    path_row: string;
    sun_elevation: number;
    sun_azimuth: number;
  };
}

export interface ISROAnalysis {
  id: string;
  analysisType: 'agriculture' | 'forestry' | 'urban-planning' | 'disaster-management' | 'water-resources' | 'mineral-exploration';
  algorithm: string;
  confidence: number;
  description: string;
  coordinates: [number, number][];
  severity?: 'low' | 'medium' | 'high' | 'critical';
  trend?: 'improving' | 'stable' | 'declining';
  recommendations: string[];
  validationStatus: 'pending' | 'validated' | 'rejected';
}

export interface ISROMission {
  id: string;
  missionName: string;
  description: string;
  launchDate: string;
  missionDuration: string;
  status: 'planned' | 'active' | 'completed' | 'extended';
  satellites: ISROSatelliteData[];
  objectives: string[];
  achievements: string[];
  budget: number; // in crores INR
  internationalCollaboration?: string[];
}

export interface ISROUser {
  id: string;
  name: string;
  email: string;
  role: 'scientist' | 'engineer' | 'analyst' | 'administrator' | 'mission-director';
  department: 'SAC' | 'VSSC' | 'LPSC' | 'SDSC' | 'NRSC' | 'ISTRAC' | 'IISU';
  clearanceLevel: 'public' | 'restricted' | 'confidential' | 'secret';
  employeeId: string;
  avatar?: string;
}

export interface ISROAlert {
  id: string;
  type: 'natural-disaster' | 'security-threat' | 'system-anomaly' | 'mission-critical';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedRegions: string[];
  timestamp: string;
  status: 'active' | 'acknowledged' | 'resolved';
  actionRequired: boolean;
  assignedTo?: string[];
}

export type SupportedLanguage = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml' | 'gu' | 'bn' | 'mr' | 'pa';

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  voiceCode: string;
  rtl: boolean;
}

export interface VoiceCommand {
  command: string;
  action: string;
  parameters?: Record<string, any>;
}

export interface Translation {
  [key: string]: string | Translation;
}