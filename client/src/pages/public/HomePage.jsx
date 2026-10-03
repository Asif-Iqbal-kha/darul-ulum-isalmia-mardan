import { useState, useEffect } from 'react';
import SEOHead from '../../components/common/SEOHead';
import { Link } from 'react-router-dom';
import { getNews, getStats, getClasses } from '../../services/api';
import {
  FiUsers,
  FiBookOpen,
  FiUser,
  FiCheckSquare,
  FiArrowLeft,
  FiShield,
  FiAward,
} from 'react-icons/fi';
import './PublicPages.css';

const DEFAULT_STATS = {
  totalStudents: 4,
  totalTeachers: 1,
  totalClasses: 1,
  attendancePercentage: 50,
};

const DEFAULT_CLASSES = [
  {
    _id: '6aa52ff9a497b16f15435bd0',
    name: 'حفظ القرآن (Hafiz)',
    year: '1447',
    studentsCount: 4,
  },
];

const DEFAULT_NEWS = [
  {
    _id: '6a917e726f135480c1e544da',
    title: 'سالانہ امتحانات کا شیڈول جاری',
    publishDate: '2026-03-01',
    content: 'جامعہ دارالعلوم اسلامیہ مردان میں سالانہ امتحانات کے شیڈول کا باقاعدہ اعلان کر دیا گیا ہے۔ تمام طلباء بروقت تیاری مکمل کریں۔',
  },
  {
    _id: '6a917e726f135480c1e544db',
    title: 'نئے تعلیمی سال کے داخلے شروع',
    publishDate: '2026-02-15',
    content: 'شعبہ حفظ القرآن، ناظرہ اور دینی درجات میں نئے داخلوں کا آغاز ہو چکا ہے۔ خواہش مند حضرات آن لائن یا دفتر مدرسہ سے رابطہ کریں۔',
  },
  {
    _id: '6a917e726f135480c1e544dc',
    title: 'حفظ القرآن تقریب تقسیم اسناد',
    publishDate: '2026-01-20',
    content: 'قرآن مجید مکمل کرنے والے خوش نصیب حفاظ کرام کے لیے خصوصی تقریبِ دستار بندی و تقسیم اسناد کا انعقاد کیا گیا۔',
  },
];

export default function HomePage() {
  const [news, setNews] = useState(DEFAULT_NEWS);
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [classes, setClasses] = useState(DEFAULT_CLASSES);

  useEffect(() => {
    // 1. Fetch Aggregated Statistics (students, teachers, classes, attendance)
    getStats()
      .then((data) => {
        if (data && typeof data === 'object' && data.totalStudents !== undefined) {
          setStats({
            totalStudents: data.totalStudents || 0,
            totalTeachers: data.totalTeachers || 0,
            totalClasses: data.totalClasses || 0,
            attendancePercentage: data.attendancePercentage || 0,
          });
        }
      })
      .catch((err) => console.warn('Home stats load error:', err));

    // 2. Fetch Active Classes
    getClasses()
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setClasses(data);
        }
      })
      .catch((err) => console.warn('Home classes load error:', err));

    // 3. Fetch Latest News & Announcements
    getNews(true)
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          setNews(data.slice(0, 3));
        }
      })
      .catch((err) => console.warn('Home news load error:', err));
  }, []);

  return (
    <div className="home-page">
      <SEOHead
        titleEn="Jamia Darul Uloom Islamia Mardan"
        titleUr="جامعہ دارالعلوم اسلامیہ مردان"
        descEn="Jamia Darul Uloom Islamia Mardan KPK Pakistan - Wifaq ul Madaris affiliated. Quran Hifz, Nazira, Dars-e-Nizami Islamic education."
        descUr="جامعہ دارالعلوم اسلامیہ مردان - وفاق المدارس العربیہ پاکستان سے الحاق شدہ۔ حفظ قرآن، ناظرہ، درس نظامی"
        path="/"
      />
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          {/* Official Letterhead Header Row */}
          <div className="hero-header-row">
            <div className="hero-header-side hero-header-right">
              رجسٹرڈ حکومتِ پاکستان: 59942/18649 (19/05/2025)
            </div>

            <div className="hero-logo-wrapper">
              <img src="/logo.png" alt="جامعہ دارالعلوم اسلامیہ مردان" className="hero-logo-img" />
            </div>

            <div className="hero-header-side hero-header-left">
              ملحق وفاق المدارس: 32373 (07/07/2026)
            </div>
          </div>

          <h1 className="hero-title">جامعہ دارالعلوم اسلامیہ مردان</h1>
          <p className="hero-subtitle-en">Jamia Darul Uloom Islamia Mardan</p>

          <p className="hero-desc">
            <a href="https://maps.app.goo.gl/VNxyjrHUKwRC9v2U7" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              مردان، خیبرپختونخوا، پاکستان (لوکیشن گوگل میپ)
            </a> — تعلیم القرآن و حفظ اور دینی علوم کا مرکز
          </p>
          <div className="hero-actions">
            <Link to="/admission" className="btn btn-accent btn-lg">داخلہ معلومات</Link>
            <Link to="/about" className="btn btn-outline btn-lg hero-btn-outline">مدرسہ کا تعارف و منہاج</Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="grid grid-4">
            <div className="stat-card">
              <FiUsers size={28} className="stat-icon" />
              <div className="stat-number">{stats.totalStudents}</div>
              <div className="stat-label">کل طلباء</div>
            </div>
            <div className="stat-card">
              <FiUser size={28} className="stat-icon" />
              <div className="stat-number">{stats.totalTeachers}</div>
              <div className="stat-label">اساتذہ کرام</div>
            </div>
            <div className="stat-card">
              <FiBookOpen size={28} className="stat-icon" />
              <div className="stat-number">{stats.totalClasses}</div>
              <div className="stat-label">درجات</div>
            </div>
            <div className="stat-card">
              <FiCheckSquare size={28} className="stat-icon" />
              <div className="stat-number">{stats.attendancePercentage}%</div>
              <div className="stat-label">حاضری شرح</div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Muhtamim Spotlight Section */}
      <section className="home-muhtamim-section">
        <div className="container">
          <div className="home-muhtamim-container">
            <div className="home-muhtamim-photo-box">
              <div className="home-muhtamim-photo-frame">
                <img
                  src="/molana-tahir.jpg"
                  alt="حضرت مولانا محمد حقانی راشد صاحب - مہتمم جامعہ دارالعلوم اسلامیہ مردان"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/logo.png';
                  }}
                />
              </div>
              <div style={{ color: '#bae6fd', fontSize: '1.05rem', fontWeight: 700, marginTop: '8px' }}>
                حضرت مولانا محمد حقانی راشد صاحب
              </div>
              <div style={{ color: 'var(--color-accent-light)', fontSize: '0.88rem' }}>
                مہتمم و سرپرستِ اعلیٰ
              </div>
            </div>

            <div className="home-muhtamim-content">
              <div className="home-muhtamim-badge">
                <FiAward size={15} />
                <span>پیغامِ مہتمم و سرپرستِ اعلیٰ</span>
              </div>
              <h2 className="home-muhtamim-title">
                تعلیم، تزکیہ اور اخلاق کا روشن سفر
              </h2>
              <h3 className="home-muhtamim-subtitle">
                جامعہ دارالعلوم اسلامیہ مردان — خادمِ علومِ نبوت حضرت مولانا محمد حقانی راشد صاحب (حفظہ اللہ ورعاہ)
              </h3>
              <p className="home-muhtamim-excerpt">
                ”جامعہ دارالعلوم اسلامیہ مردان کا مقصود صرف کتابی تعلیم دینا نہیں، بلکہ قرآن و سنت کی روشنی میں نئی نسل کے اخلاق، کردار اور باطن کو سنوارنا ہے۔ ہم اپنے طلبہ کو عصرِ حاضر کے تقاضوں سے ہم آہنگ رہتے ہوئے دینِ متین کی مخلصانہ خدمت اور امت کے لیے مشعلِ راہ بننے کی ترغیب دیتے ہیں۔“
              </p>
              <div className="home-muhtamim-actions">
                <Link to="/muhtamim-message" className="btn btn-accent btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>مکمل پیغامِ مہتمم پڑھیں</span>
                  <FiArrowLeft size={18} />
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg hero-btn-outline">
                  جامعہ کے مقاصد و نصاب
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
            ﷽
          </div>
          <h2 className="section-title">اغراض و مقاصد (دارالعلوم اسلامیہ مردان)</h2>
          <div className="objectives-lead-card" style={{ marginBottom: '28px' }}>
            قرآن و سنت کی ترویج، دورِ حاضر کے فکری و علمی تقاضوں سے ہم آہنگ باصلاحیت علماء و فضلاء کی تیاری، اور اسلامی اقدار و تہذیب کا تحفظ دارالعلوم اسلامیہ مردان کا بنیادی نصب العین ہے۔
          </div>

          <div className="objectives-grid">
            <div className="objective-item-card">
              <div className="objective-card-header">
                <div className="objective-card-icon">
                  <FiBookOpen size={22} />
                </div>
                <div className="objective-card-meta">
                  <span className="objective-num-tag">
                    ہدف ۱
                  </span>
                  <h3 className="objective-card-title">
                    قرآن و حدیث کی عملی زندگی میں ترویج
                  </h3>
                </div>
              </div>
              <p className="objective-card-desc">
                قرآن وحدیث کی تعلیمات کو مسلمانوں کی عملی زندگی میں لانے اور ان کی مزید ترویج و اشاعت کے لیے ہمہ وقت جدوجہد کرنا۔
              </p>
            </div>

            <div className="objective-item-card">
              <div className="objective-card-header">
                <div className="objective-card-icon">
                  <FiAward size={22} />
                </div>
                <div className="objective-card-meta">
                  <span className="objective-num-tag">
                    ہدف ۲
                  </span>
                  <h3 className="objective-card-title">
                    عصری تقاضوں سے ہم آہنگ تعلیم
                  </h3>
                </div>
              </div>
              <p className="objective-card-desc">
                جدید دور کے علمی تقاضوں کو مدنظر رکھتے ہوئے قرآن، حدیث، فقہ اور عقائد کی ایسی محققانہ تعلیم دینا جس سے عصری تقاضوں کو سمجھنے والے صاحبِ بصیرت علماء پیدا ہوں۔
              </p>
            </div>

            <div className="objective-item-card">
              <div className="objective-card-header">
                <div className="objective-card-icon">
                  <FiUsers size={22} />
                </div>
                <div className="objective-card-meta">
                  <span className="objective-num-tag">
                    ہدف ۳
                  </span>
                  <h3 className="objective-card-title">
                    تخصصات و شعبہ ہائے زندگی میں خدمات
                  </h3>
                </div>
              </div>
              <p className="objective-card-desc">
                تفسیر، حدیث، فقہ، قضاء، دعوت و ارشاد میں تخصص اور سیاسیات، اقتصادیات و صحافت کے شعبوں میں کام کرنے والے فضلاء کی تیاری۔
              </p>
            </div>

            <div className="objective-item-card">
              <div className="objective-card-header">
                <div className="objective-card-icon">
                  <FiShield size={22} />
                </div>
                <div className="objective-card-meta">
                  <span className="objective-num-tag">
                    ہدف ۷
                  </span>
                  <h3 className="objective-card-title">
                    نوجوان طبقے کی فکری و اخلاقی حفاظت
                  </h3>
                </div>
              </div>
              <p className="objective-card-desc">
                نوجوان طبقے کو دورِ جدید کے فتنوں سے بچا کر ان کے ذہن میں صحیح اسلامی عقائد راسخ کرنے اور اسلامی طرزِ معاشرت عام کرنے کی سعی کرنا۔
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/about" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>دارالعلوم اسلامیہ مردان کے تمام ۱۰ اغراض و مقاصد تفصیل سے پڑھیں</span>
              <FiArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">ہمارے درجات</h2>
          <div className="classes-grid">
            {classes.map((cls) => (
              <div key={cls._id} className="class-card">
                <h3>{cls.name}</h3>
                <p>
                  تعلیمی سال: <span style={{ fontFamily: 'var(--font-english)' }}>{cls.year}</span>
                </p>
                <div className="class-card-footer">
                  <span>
                    طلباء: <strong style={{ fontFamily: 'var(--font-english)' }}>{cls.studentsCount || 0}</strong>
                  </span>
                  <span className="badge badge-success">فعال</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>تازہ ترین اعلانات</h2>
            <Link to="/news" className="btn btn-outline btn-sm">
              تمام اعلانات <FiArrowLeft style={{ marginRight: '4px' }} />
            </Link>
          </div>
          <div className="grid grid-3">
            {news.map((item) => (
              <div key={item._id} className="news-card">
                <div className="news-card-date">{item.publishDate}</div>
                <h3>{item.title}</h3>
                <p>{item.content ? item.content.substring(0, 100) : ''}...</p>
                <Link to="/news" className="news-card-link">
                  مزید پڑھیں <FiArrowLeft />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
