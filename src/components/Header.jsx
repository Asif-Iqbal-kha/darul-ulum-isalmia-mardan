import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, UserCheck } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navLinks = [
    { path: '/', label: 'صفحہ اول' },
    { path: '/about', label: 'تعارف' },
    { path: '/departments', label: 'شعبہ جات' },
    { path: '/admission', label: 'داخلہ' },
    { path: '/contact', label: 'رابطہ' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Logo & Title */}
        <Link to="/" className="brand-box" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="/logo.png" 
            alt="دارالعلوم اسلامیہ مردان" 
            className="brand-logo" 
          />
          <div className="brand-text">
            <span className="brand-slogan">العلم نور</span>
            <h1 className="brand-title">دارالعلوم اسلامیہ مردان</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Login Button */}
        <div className="header-actions">
          {isLoggedIn ? (
            <Link to="/admin" className="btn-login-small active">
              <UserCheck size={16} />
              <span>ایڈمن پینل</span>
            </Link>
          ) : (
            <Link to="/login" className="btn-login-small">
              <LogIn size={16} />
              <span>لاگ ان</span>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="مینو"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={isLoggedIn ? '/admin' : '/login'}
                  className="mobile-nav-link login-highlight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {isLoggedIn ? 'ایڈمن پینل' : 'لاگ ان (Login)'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
