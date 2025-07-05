import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ISROStatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color: 'orange' | 'blue' | 'green' | 'red' | 'purple';
  unit?: string;
  classification?: 'public' | 'restricted' | 'confidential';
}

const colorClasses = {
  orange: 'bg-orange-50 text-orange-600 border-orange-200',
  blue: 'bg-blue-50 text-blue-600 border-blue-200',
  green: 'bg-green-50 text-green-600 border-green-200',
  red: 'bg-red-50 text-red-600 border-red-200',
  purple: 'bg-purple-50 text-purple-600 border-purple-200',
};

const classificationColors = {
  public: 'bg-green-100 text-green-800',
  restricted: 'bg-yellow-100 text-yellow-800',
  confidential: 'bg-red-100 text-red-800',
};

export const ISROStatsCard: React.FC<ISROStatsCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  color,
  unit,
  classification = 'public'
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${classificationColors[classification]}`}>
          {classification.toUpperCase()}
        </span>
      </div>
      
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
        <div className="flex items-baseline space-x-2">
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {unit && <span className="text-sm text-gray-500">{unit}</span>}
        </div>
        {change && (
          <p className={`text-sm mt-2 ${
            changeType === 'positive' ? 'text-green-600' : 
            changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
          }`}>
            {change}
          </p>
        )}
      </div>
    </div>
  );
};