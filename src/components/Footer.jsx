import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Heart, 
  ExternalLink,
  Sparkles,
  ArrowLeft,
  GraduationCap
} from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Quranic / Hadith Top Banner */}
      <div className="footer-quote-banner">
        <div className="container footer-quote-inner">
          <div className="quote-arabic">
            <Sparkles size={18} className="quote-icon" />
            <span>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَىٰ كُلِّ مُسْلِمٍ — "العلم نور"</span>
          </div>
          <p className="quote-trans">
            علم حاصل کرنا ہر مسلمان پر فرض ہے — جامعہ دارالعلوم اسلامیہ مردان
          </p>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Institution Info & Logo */}
            <div className="footer-col col-brand">
              <div className="footer-brand-header">
                <div className="footer-logo-box">
                  <img 
                    src="/logo.png" 
                    alt="دارالعلوم اسلامیہ مردان" 
                    className="footer-logo-img" 
                  />
                </div>
                <div>
                  <h3 className="footer-brand-title">دارالعلوم اسلامیہ مردان</h3>
                  <span className="footer-brand-motto">العلم نور</span>
                </div>
              </div>
              <p className="footer-about-text">
                جامعہ دارالعلوم اسلامیہ مردان قرآن و سنت کی روشنی میں دینی و عصری علوم کے فروغ، شعبہ حفظ القرآن اور درس نظامی کا ممتاز تعلیمی ادارہ ہے۔
              </p>
              <div className="footer-badges">
                <span className="badge badge-sky">حفظ القرآن الکریم</span>
                <span className="badge badge-sky">درس نظامی</span>
                <span className="badge badge-sky">تجوید و قراءت</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">اہم روابط</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/">
                    <ArrowLeft size={14} />
                    <span>صفحہ اول</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <ArrowLeft size={14} />
                    <span>تعارف و اغراض و مقاصد</span>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>تعلیمی و تربیتی شعبہ جات</span>
                  </Link>
                </li>
                <li>
                  <Link to="/admission">
                    <ArrowLeft size={14} />
                    <span>شرائط و طریقہ کار داخلہ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <ArrowLeft size={14} />
                    <span>رابطہ اور شکایات / تجاویز</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Academic Programs */}
            <div className="footer-col">
              <h4 className="footer-col-title">تعلیمی شعبہ جات</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>شعبہ حفظ و ناظرہ قرآن کریم</span>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>شعبہ کتب (درس نظامی مکمل)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>شعبہ تجوید و قراءت سبعہ و عشرہ</span>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>شعبہ افتاء و دینی رہنمائی</span>
                  </Link>
                </li>
                <li>
                  <Link to="/departments">
                    <ArrowLeft size={14} />
                    <span>شعبہ عصری تعلیم و کمپیوٹر لیب</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div className="footer-col">
              <h4 className="footer-col-title">رابطہ و معلومات</h4>
              <div className="footer-contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong>پتہ و مقام:</strong>
                    <p>مردان، خیبر پختونخوا، پاکستان</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong>فون / رابطہ نمبر:</strong>
                    <p dir="ltr">+92 300 1234567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong>ای میل:</strong>
                    <p dir="ltr">info@darululoomislamia.edu.pk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} دارالعلوم اسلامیہ مردان — جملہ حقوق محفوظ ہیں۔
          </p>
          <p className="motto-tag">
            <span>العلم نور — شعار ہمارا</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
