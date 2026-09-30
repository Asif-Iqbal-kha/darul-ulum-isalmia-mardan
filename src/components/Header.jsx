import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  Home, 
  Info, 
  PhoneCall, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'صفحہ اول', icon: <Home size={18} /> },
    { path: '/about', label: 'تعارف و تاریخ', icon: <Info size={18} /> },
    { path: '/departments', label: 'شعبہ جات و کورسز', icon: <BookOpen size={18} /> },
    { path: '/admission', label: 'داخلہ کی معلومات', icon: <GraduationCap size={18} /> },
    { path: '/contact', label: 'رابطہ و مقام', icon: <PhoneCall size={18} /> },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-right">
            <span className="slogan-tag">
              <Sparkles size={14} className="sparkle-icon" />
              العلم نور — اسلامی و عصری تعلیم کا عظیم مرکز
            </span>
          </div>

          <div className="top-bar-left">
            <div className="top-info-item">
              <MapPin size={14} />
              <span>مردان، خیبر پختونخوا</span>
            </div>
            <div className="top-info-item">
              <Phone size={14} />
              <span dir="ltr">+92 300 1234567</span>
            </div>
            <div className="top-info-item">
              <Clock size={14} />
              <span>اوقات: صبح 8 تا شام 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav-wrapper">
        <div className="container main-nav-inner">
          {/* Logo & Brand Identity */}
          <Link to="/" className="brand-logo-container" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-img-box">
              <img 
                src="/logo.png" 
                alt="دارالعلوم اسلامیہ مردان لوگو" 
                className="site-logo-img" 
              />
            </div>
            <div className="brand-titles">
              <span className="brand-motto">العلم نور</span>
              <h1 className="brand-main-title">دارالعلوم اسلامیہ مردان</h1>
              <span className="brand-sub-title">DARUL ULOOM ISLAMIA MARDAN</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <span className="nav-link-icon">{item.icon}</span>
                    <span className="nav-link-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTA */}
          <div className="header-actions">
            <Link to="/admission" className="btn btn-sky btn-admission-cta">
              <GraduationCap size={18} />
              <span>آن لائن داخلہ</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="مینو کھولیں"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <ul className="mobile-nav-list">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mobile-icon">{item.icon}</span>
                    <span className="mobile-label">{item.label}</span>
                    {isActive(item.path) && <CheckCircle2 size={16} className="active-dot" />}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <Link
                to="/admission"
                className="btn btn-sky btn-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GraduationCap size={18} />
                <span>آن لائن داخلہ فارم</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
