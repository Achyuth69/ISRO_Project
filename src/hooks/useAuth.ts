import { useState, useEffect } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    const timer = setTimeout(() => {
      setUser({
        id: '1',
        name: 'Dr. Sarah Chen',
        email: 'sarah.chen@earthobservation.org',
        role: 'researcher',
        organization: 'Earth Observation Institute',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({
      id: '1',
      name: 'Dr. Sarah Chen',
      email,
      role: 'researcher',
      organization: 'Earth Observation Institute'
    });
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};