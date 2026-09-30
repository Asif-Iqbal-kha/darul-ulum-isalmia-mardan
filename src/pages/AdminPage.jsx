import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, ShieldCheck, Cog, Settings, Home } from 'lucide-react';
import './AdminPage.css';

export default function AdminPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="admin-standalone-wrapper">
      {/* Dedicated Admin Header */}
      <header className="admin-header">
        <div className="admin-header-accent"></div>
        <div className="container admin-header-inner">
          <div className="admin-brand-area" onClick={handleGoHome} style={{ cursor: 'pointer' }}>
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="admin-header-logo" 
            />
            <div>
              <span className="admin-header-slogan">العلم نور</span>
              <h1 className="admin-header-title">دارالعلوم اسلامیہ مردان</h1>
            </div>
          </div>

          <div className="admin-header-actions">
            <div className="admin-status-pill">
              <ShieldCheck size={16} />
              <span>ایڈمن پینل (Admin)</span>
            </div>

            <button onClick={handleGoHome} className="btn-admin-nav" title="صفحہ اول">
              <Home size={16} />
              <span>صفحہ اول</span>
            </button>

            <button onClick={handleLogout} className="btn-admin-logout" title="لاگ آؤٹ">
              <LogOut size={16} />
              <span>لاگ آؤٹ</span>
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content - Fluid Under Construction without container boxes */}
      <main className="admin-main-fluid">
        <div className="container admin-fluid-content">
          
          <div className="construction-logo-hero">
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="construction-logo-img" 
            />
          </div>

          <div className="construction-brand-header">
            <span className="construction-slogan-badge">« العلم نور »</span>
            <h2 className="construction-title-main">جامعہ دارالعلوم اسلامیہ مردان</h2>
          </div>

          {/* Animated Moving Gears */}
          <div className="construction-gears-stage">
            <div className="gear-element gear-large">
              <Cog size={68} strokeWidth={1.6} />
            </div>
            <div className="gear-element gear-medium">
              <Settings size={46} strokeWidth={1.6} />
            </div>
            <div className="gear-element gear-small">
              <Cog size={30} strokeWidth={1.6} />
            </div>
          </div>

          <div className="construction-status-area">
            <h3 className="construction-page-status">ایڈمن ڈیش بورڈ — زیرِ تعمیر ہے</h3>
            <span className="construction-status-tag">ADMIN DASHBOARD UNDER PROCESS</span>
            <p className="construction-lead-text">
              ایڈمن پینل اور انتظامی سہولیات پر کام جاری ہے۔ مکمل کنٹرول پینل جلد دستیاب ہو گا۔
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
