
import axios from 'axios';

const API_URL = 'http://192.168.196.192:8082/api/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};
