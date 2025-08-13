import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../actions/signupActions';

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    formData,
    formErrors,
    handleInputChange,
    handleSubmit,
    loading,
    success,
  } = useSignup();

  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

  useEffect(() => {
    if (success) {
      setIsSignupSuccessful(true);
      dispatch(
        setSignupData({
          email: formData.email,
          contactNo: formData.contactNo,
        })
      );
    }
  }, [success, formData, dispatch]);

  return (
    <div>
      {isSignupSuccessful ? (
        <div>
          <h2>Signup Successful! You can now login.</h2>
          <Link to="/login">Login here</Link>
        </div>
      ) : (
        <>
          {formErrors.general && (
            <div className="error-message">{formErrors.general}</div>
          )}
          {loading && <div>Loading...</div>}

          <h2>Sign up</h2>
          {/* ✅ All inputs inside one form */}
          <form onSubmit={handleSubmit} autoComplete="on">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name || ''}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <div className="error-text">{formErrors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email || ''}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="error-text">{formErrors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="contactNo">Contact No</label>
              <input
                id="contactNo"
                type="tel"
                name="contactNo"
                autoComplete="username" // ✅ Treat as unique identifier
                value={formData.contactNo || ''}
                onChange={handleInputChange}
              />
              {formErrors.contactNo && (
                <div className="error-text">{formErrors.contactNo}</div>
              )}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="new-password"
                value={formData.password || ''}
                onChange={handleInputChange}
              />
              {formErrors.password && (
                <div className="error-text">{formErrors.password}</div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                value={formData.confirmPassword || ''}
                onChange={handleInputChange}
              />
              {formErrors.confirmPassword && (
                <div className="error-text">{formErrors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>

          <div>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
