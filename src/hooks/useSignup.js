// src/hooks/useSignup.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../actions/signupActions';
import { signup } from '../services/authService';// Import the signup service

const useSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        contactNo: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        name: '',
        contactNo: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const dispatch = useDispatch();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const contactNoPattern = /^[7-9][0-9]{9}$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        validateField(name, value);
    };

    const validateField = (fieldName, value) => {
        let error = '';

        if (fieldName === 'email') {
            if (!value) error = 'Email is required';
            else if (!emailPattern.test(value)) error = 'Enter a valid email';
        }

        if (fieldName === 'name') {
            if (!value) error = 'Name is required';
            else if (value.length > 25) error = 'Name must be 25 characters or less';
        }

        if (fieldName === 'contactNo') {
            if (!value) error = 'Phone number is required';
            else if (!contactNoPattern.test(value)) error = 'Enter a valid phone number';
        }

        if (fieldName === 'password') {
            if (!value) error = 'Password is required';
            else if (value.length < 6) error = 'Password must be at least 6 characters';
        }

        if (fieldName === 'confirmPassword') {
            if (!value) error = 'Confirm your password';
            else if (value !== formData.password) error = 'Passwords do not match';
        }

        setFormErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: error,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        Object.keys(formData).forEach(field => {
            validateField(field, formData[field]);
            if (formErrors[field]) isValid = false;
        });
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await signup(formData); // Use the signup service

            console.log("Response Data:", response.data);
            dispatch(setSignupData(response.data));
            setSuccess(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        formData,
        formErrors,
        handleInputChange,
        handleSubmit,
        loading,
        success,
    };
};

export default useSignup;
