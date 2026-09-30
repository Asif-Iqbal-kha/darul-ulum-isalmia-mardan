import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img 
            src="/logo.png" 
            alt="دارالعلوم اسلامیہ مردان" 
            className="footer-logo" 
          />
          <div className="footer-brand-details">
            <span className="footer-slogan">العلم نور</span>
            <span className="footer-name">دارالعلوم اسلامیہ مردان</span>
          </div>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} دارالعلوم اسلامیہ مردان — جملہ حقوق محفوظ ہیں۔</p>
        </div>
      </div>
    </footer>
  );
}
