import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../actions/loginActions';
import { login } from '../services/authService';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    const handleLogin = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await login(email, password);
            console.log('Login Response:', response);  // Log the full response

            if (response && response.data) {
                const { token, id, email: userEmail } = response.data;
                if (token && id && userEmail) {
                    dispatch(setAuthToken({ token, id, email: userEmail }));
                    setSuccess(true);
                } else {
                    setError('Login failed: Missing required data');
                }
            } else {
                setError('Login failed: Invalid response structure');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed: ' + (error.response?.data?.message || error.message || 'Unknown error'));
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        password,
        handleInputChange,
        handleLogin,
        loading,
        error,
        success,
    };
};

export default useLogin;
