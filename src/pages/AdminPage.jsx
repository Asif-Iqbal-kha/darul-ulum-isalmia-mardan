import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, ShieldCheck, Cog, Settings } from 'lucide-react';
import './AdminPage.css';

export default function AdminPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="admin-page-wrapper">
      <div className="container">
        
        {/* Admin Top Action Bar */}
        <div className="admin-top-bar">
          <div className="admin-badge">
            <ShieldCheck size={18} />
            <span>ایڈمن پینل (Admin Panel)</span>
          </div>
          <button onClick={handleLogout} className="btn btn-outline btn-logout">
            <LogOut size={16} />
            <span>لاگ آؤٹ (Logout)</span>
          </button>
        </div>

        {/* Under Construction Card with Moving Gears */}
        <div className="clean-construction-card admin-construction-card">
          
          <div className="construction-logo-wrapper">
            <img 
              src="/logo.png" 
              alt="دارالعلوم اسلامیہ مردان" 
              className="construction-logo-img" 
            />
          </div>

          <span className="construction-slogan">العلم نور</span>
          <h1 className="construction-madrassa-name">دارالعلوم اسلامیہ مردان</h1>

          {/* Animated Moving Gears */}
          <div className="gears-container">
            <div className="gear gear-main">
              <Cog size={54} strokeWidth={1.75} />
            </div>
            <div className="gear gear-secondary">
              <Settings size={38} strokeWidth={1.75} />
            </div>
            <div className="gear gear-tertiary">
              <Cog size={26} strokeWidth={1.75} />
            </div>
          </div>

          <div className="construction-message-box">
            <h2 className="construction-status-title">ایڈمن ڈیش بورڈ — زیرِ تعمیر ہے</h2>
            <p className="construction-status-en">Admin Dashboard Under Process</p>
            <p className="construction-status-desc">
              ایڈمن پینل اور انتظامی سہولیات پر کام جاری ہے۔ مکمل کنٹرول پینل جلد دستیاب ہو گا۔
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
