import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft, 
  Compass, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle,
  FileCheck,
  Building,
  HeartHandshake,
  Bell
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const stats = [
    { number: '1000+', label: 'فارغین و حفاظ کرام', icon: <GraduationCap size={28} /> },
    { number: '35+', label: 'جید و تجربہ کار اساتذہ', icon: <Users size={28} /> },
    { number: '12+', label: 'تعلیمی و تربیتی شعبہ جات', icon: <Building size={28} /> },
    { number: '100%', label: 'مفت دینی تعلیم و سہولیات', icon: <ShieldCheck size={28} /> },
  ];

  const pillars = [
    {
      title: 'حفظ و ناظرہ قرآن کریم',
      subtitle: 'تجوید و ترتیل کے ساتھ',
      desc: 'ماہر قراء اور حفاظ کرام کی زیرِ نگرانی قرآن پاک کی تجوید کے قواعد کے ساتھ مکمل ناظرہ و حفظ کا جامع نظام۔',
      icon: <BookOpen size={30} />,
      link: '/departments'
    },
    {
      title: 'درس نظامی مکمل نصاب',
      subtitle: 'وفاق المدارس سے ملحق',
      desc: 'ابتدائی درجات (شعبہ کتب) سے لے کر عالمیہ و دورۂ حدیث شریف تک مستند اسلامی علوم کی باقاعدہ تدریس۔',
      icon: <GraduationCap size={30} />,
      link: '/departments'
    },
    {
      title: 'اخلاقی تربیت و تزکیہ',
      subtitle: 'سنت نبوی ﷺ کے مطابق',
      desc: 'طلبہ کی شبانہ روز اخلاقی، روحانی اور عملی تربیت کے لیے سنت نبوی کے مطابق منظم تربیتی ماحول۔',
      icon: <HeartHandshake size={30} />,
      link: '/departments'
    },
    {
      title: 'عصری علوم و کمپیوٹر لیب',
      subtitle: 'دینی و دنیاوی ہم آہنگی',
      desc: 'دینی تعلیم کے ساتھ ساتھ بنیادی عصری علوم، انگریزی، ریاضی اور جدید کمپیوٹر کورسز کی مفت سہولت۔',
      icon: <Compass size={30} />,
      link: '/departments'
    }
  ];

  const departments = [
    {
      title: 'شعبہ حفظ و تجوید القرآن',
      level: 'پرائمری تا ثانوی',
      duration: '3 سالہ کورس',
      features: ['روزانہ 3 اوقات مشق', 'مخارج و صفات کی درستگی', 'سالانہ حسنِ قراءت مقابلے']
    },
    {
      title: 'شعبہ درسِ نظامی (عالم کورس)',
      level: 'عامہ، خاصہ، عالیہ تا دورہ حدیث',
      duration: '8 سالہ مستند کورس',
      features: ['تفسیر، حدیث، فقہ و اصول', 'عربی زبان و ادب', 'منطق و فلسفہ اسلامی']
    },
    {
      title: 'شعبہ دار الافتاء و تحقیق',
      level: 'تخصص فی الفقہ الاسلامی',
      duration: '2 سالہ ریسرچ',
      features: ['جدید مسائل کا شرعی حل', 'مستند فتاویٰ کا اجراء', 'فقہی سیمینارز و ورکشاپس']
    },
    {
      title: 'شعبہ ناظرہ و بنیادی دینیات',
      level: 'نئے داخل ہونے والے بچوں کے لیے',
      duration: '1 سالہ کورس',
      features: ['نورانی قاعدہ و ناظرہ', 'مسنون دعائیں و نماز کی مشق', 'بنیادی اسلامی عقائد']
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pattern-overlay"></div>
        <div className="container hero-container">
          {/* Top Pill / Badge */}
          <div className="hero-top-badge">
            <Sparkles size={16} className="hero-sparkle" />
            <span className="badge-text">العلم نور — جامعہ دارالعلوم اسلامیہ مردان</span>
          </div>

          {/* Logo Showcase */}
          <div className="hero-logo-box-main">
            <div className="hero-logo-ring">
              <img 
                src="/logo.png" 
                alt="دارالعلوم اسلامیہ مردان" 
                className="hero-logo-img" 
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title">
            جامعہ دارالعلوم اسلامیہ مردان
          </h1>

          <p className="hero-arabic-motto">
            « الْعِلْمُ نُورٌ وَالْجَهْلُ ظُلْمَةٌ »
          </p>

          <p className="hero-description">
            قرآن و سنت کی روشنی میں دینی و عصری تعلیم کا عظیم الشان مرکز — جہاں اخلاص، تقویٰ، علومِ نبویہ اور طلبہ کی بہترین فکری و اخلاقی تربیت کی جاتی ہے۔
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons-group">
            <Link to="/admission" className="btn btn-sky btn-lg">
              <FileCheck size={20} />
              <span>آن لائن داخلہ کی معلومات</span>
            </Link>
            <Link to="/about" className="btn btn-outline-white btn-lg">
              <BookOpen size={20} />
              <span>جامعہ کا تعارف و مقاصد</span>
            </Link>
          </div>

          {/* Quick Pillars Row */}
          <div className="hero-quick-features">
            <div className="quick-feature-item">
              <CheckCircle size={16} />
              <span>حفظ القرآن الکریم</span>
            </div>
            <div className="quick-feature-item">
              <CheckCircle size={16} />
              <span>درس نظامی عالم کورس</span>
            </div>
            <div className="quick-feature-item">
              <CheckCircle size={16} />
              <span>تجوید و قراءت سبعہ</span>
            </div>
            <div className="quick-feature-item">
              <CheckCircle size={16} />
              <span>رہائش و طعام کی سہولت</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Announcement Ticker */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-tag">
            <Bell size={16} />
            <span>اہم اعلانات:</span>
          </div>
          <div className="announcement-marquee">
            <p>
              جامعہ دارالعلوم اسلامیہ مردان میں نئے تعلیمی سال کے داخلوں کے قواعد و طریقہ کار کے لیے داخلہ سیکشن وزٹ کریں • سالانہ امتحانات کے نتائج کا اعلان جلد کیا جائے گا • ویب سائٹ کے تمام صفحات پر کام جاری ہے۔
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((item, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-icon-wrapper">
                  {item.icon}
                </div>
                <div className="stat-details">
                  <h3 className="stat-number">{item.number}</h3>
                  <p className="stat-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Educational Pillars */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">بنیادی خصوصیات</span>
            <h2 className="section-title">دارالعلوم اسلامیہ مردان کے بنیادی شعبہ جات</h2>
            <p className="section-subtitle">
              جامعہ میں دینی علوم کے ساتھ ساتھ اخلاقی و عملی تربیت کا منظم اور معیاری انتظام کیا گیا ہے
            </p>
          </div>

          <div className="grid-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <span className="pillar-subtitle">{pillar.subtitle}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <Link to={pillar.link} className="pillar-link">
                  <span>تفصیلات ملاحظہ کریں</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nazim & Leadership Message Section */}
      <section className="section message-section">
        <div className="container">
          <div className="message-card">
            <div className="message-logo-side">
              <div className="message-logo-frame">
                <img 
                  src="/logo.png" 
                  alt="دارالعلوم اسلامیہ مردان" 
                  className="message-logo" 
                />
              </div>
              <span className="message-badge">العلم نور</span>
            </div>

            <div className="message-content-side">
              <span className="message-tag">پیغام مہتمم و ناظمِ اعلیٰ</span>
              <h2 className="message-title">دینی علوم کا فروغ اور نئی نسل کی ایمانی تعمیر</h2>
              <p className="message-text">
                الحمد لله، جامعہ دارالعلوم اسلامیہ مردان کا بنیادی مقصد قرآن و سنت کے علوم کو خالص اور مستند انداز میں نئی نسل تک پہنچانا ہے۔ ہمارے ادارے میں طلبہ کو محض کتابی علم نہیں بلکہ عملی زندگی میں تقویٰ، للہیت، حسنِ اخلاق اور معاشرے میں مثبت کردار ادا کرنے کی تربیت دی جاتی ہے۔
              </p>
              <div className="message-points">
                <div className="point-item">
                  <CheckCircle size={18} className="point-icon" />
                  <span>اساتذہ کرام کی انفرادی توجہ اور مشفقانہ تربیت</span>
                </div>
                <div className="point-item">
                  <CheckCircle size={18} className="point-icon" />
                  <span>مکمل پرامن اور علمی ماحول میں رہائش کا انتظام</span>
                </div>
                <div className="point-item">
                  <CheckCircle size={18} className="point-icon" />
                  <span>مستحق اور نادار طلبہ کے لیے مکمل مفت وظائف و کتب</span>
                </div>
              </div>

              <div className="message-author">
                <strong>انتظامیہ و اساتذہ کرام</strong>
                <span>جامعہ دارالعلوم اسلامیہ مردان، خیبر پختونخوا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs List */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">نصاب و درجات</span>
            <h2 className="section-title">تعلیمی مراحل و کورسز</h2>
            <p className="section-subtitle">
              جامعہ دارالعلوم اسلامیہ مردان میں فراہم کردہ ممتاز تعلیمی کورسز کا جائزہ
            </p>
          </div>

          <div className="grid-2">
            {departments.map((dept, idx) => (
              <div key={idx} className="program-card">
                <div className="program-header">
                  <div>
                    <h3 className="program-title">{dept.title}</h3>
                    <span className="program-level">{dept.level}</span>
                  </div>
                  <span className="program-duration-badge">{dept.duration}</span>
                </div>

                <ul className="program-features-list">
                  {dept.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle size={16} className="program-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="program-footer">
                  <Link to="/admission" className="btn btn-outline-sky btn-block">
                    <span>داخلہ کے لیے رجوع کریں</span>
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Callout Banner */}
      <section className="admission-callout-section">
        <div className="container">
          <div className="callout-box">
            <div className="callout-content">
              <span className="callout-tag">داخلہ فارم و معلومات</span>
              <h2 className="callout-title">کیا آپ دارالعلوم اسلامیہ مردان میں داخلہ لینا چاہتے ہیں؟</h2>
              <p className="callout-desc">
                حفظ قرآن، درس نظامی اور ناظرہ کے نئے داخلوں کی تفصیلات اور شرائط کے لیے داخلہ پیج دیکھیں یا جامعہ کے دفتر سے رابطہ فرمائیں۔
              </p>
            </div>
            <div className="callout-actions">
              <Link to="/admission" className="btn btn-sky btn-lg">
                <FileCheck size={20} />
                <span>داخلہ معلومات دیکھیں</span>
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <Phone size={20} />
                <span>رابطہ کریں</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
