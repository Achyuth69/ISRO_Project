import { useState, useEffect } from 'react';
import { ISROUser } from '../types';

export const useISROAuth = () => {
  const [user, setUser] = useState<ISROUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate ISRO authentication system
    const timer = setTimeout(() => {
      setUser({
        id: 'ISRO001',
        name: 'Dr. Rajesh Kumar',
        email: 'rajesh.kumar@isro.gov.in',
        role: 'scientist',
        department: 'SAC',
        clearanceLevel: 'confidential',
        employeeId: 'SAC/EOS/2024/001',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const login = async (employeeId: string, password: string) => {
    setLoading(true);
    // Simulate ISRO login with employee ID
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUser({
      id: 'ISRO001',
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@isro.gov.in',
      role: 'scientist',
      department: 'SAC',
      clearanceLevel: 'confidential',
      employeeId: employeeId
    });
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, logout };
};