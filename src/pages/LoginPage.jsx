import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, LogIn, AlertCircle } from 'lucide-react';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Basic comparison as requested
    if (username.trim() === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'admin');
      navigate('/admin');
    } else {
      setError('غلط یوزر نیم یا پاس ورڈ درج کیا گیا ہے۔ (Invalid Username or Password)');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="login-card">
          
          {/* Logo & Header */}
          <div className="login-logo-box">
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="login-logo" 
            />
          </div>

          <span className="login-slogan">العلم نور</span>
          <h1 className="login-title">دارالعلوم اسلامیہ مردان</h1>
          <p className="login-subtitle">ایڈمن لاگ ان پورٹل (Admin Portal)</p>

          {/* Error Message */}
          {error && (
            <div className="login-error-box">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>یوزر نیم (Username)</label>
              <div className="input-field-wrapper">
                <User size={18} className="input-icon" />
                <input 
                  type="text"
                  required
                  dir="ltr"
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="login-input"
                />
              </div>
            </div>

            <div className="input-group">
              <label>پاس ورڈ (Password)</label>
              <div className="input-field-wrapper">
                <Lock size={18} className="input-icon" />
                <input 
                  type="password"
                  required
                  dir="ltr"
                  placeholder="admin123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-login">
              <LogIn size={18} />
              <span>لاگ ان کریں (Login)</span>
            </button>
          </form>

          {/* Hint for easy testing */}
          <div className="login-hint-box">
            <span>آزمائشی معلومات: Username: <code>admin</code> | Password: <code>admin123</code></span>
          </div>

          <div className="login-back-link">
            <Link to="/">صفحہ اول پر واپس جائیں</Link>
          </div>

        </div>
      </div>
    </div>
  );
}
