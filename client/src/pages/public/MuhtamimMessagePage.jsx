import { Link } from 'react-router-dom';
import { 
  FiBookOpen, 
  FiShield, 
  FiAward, 
  FiHeart, 
  FiArrowLeft, 
  FiPhone, 
  FiMapPin, 
  FiCheckCircle, 
  FiFeather 
} from 'react-icons/fi';
import SEOHead from '../../components/common/SEOHead';
import './PublicPages.css';

export default function MuhtamimMessagePage() {
  return (
    <div className="muhtamim-page">
      <SEOHead
        titleEn="Message from the Muhtamim - Maulana Muhammad Haqqani Rashid Sahib"
        titleUr="پیغامِ مہتمم — مولانا محمد حقانی راشد صاحب"
        descEn="Official message from the Muhtamim (Principal) of Jamia Darul Uloom Islamia Mardan, Maulana Muhammad Haqqani Rashid Sahib. Vision, educational philosophy and guidance for students and parents."
        descUr="جامعہ دارالعلوم اسلامیہ مردان کے مہتمم و سرپرست حضرت مولانا محمد حقانی راشد صاحب کا خصوصی پیغام، تعلیمی وژن، طلبہ اور والدین کے نام ہدایات اور جامعہ کے مقاصد۔"
        path="/muhtamim-message"
      />

      {/* Page Header */}
      <div className="page-header muhtamim-hero-header">
        <div className="container">
          <div className="muhtamim-breadcrumbs">
            <Link to="/">صفحہ اول</Link>
            <span className="crumb-separator">/</span>
            <Link to="/about">تعارف</Link>
            <span className="crumb-separator">/</span>
            <span className="crumb-active">پیغامِ مہتمم</span>
          </div>
          <h1 className="muhtamim-header-title">پیغامِ مہتمم و سرپرستِ اعلیٰ</h1>
          <p className="muhtamim-header-subtitle">
            جامعہ دارالعلوم اسلامیہ مردان — خادمِ علومِ نبوت حضرت مولانا محمد حقانی راشد صاحب (حفظہ اللہ ورعاہ)
          </p>
        </div>
      </div>

      <div className="content-page muhtamim-page-body">
        <div className="container">

          {/* Top Profile & Official Leadership Showcase */}
          <div className="muhtamim-showcase-card">
            <div className="muhtamim-profile-row">
              {/* Photo Column */}
              <div className="muhtamim-photo-col">
                <div className="muhtamim-official-photo-wrap">
                  <div className="muhtamim-photo-border">
                    <img
                      src="/molana-tahir.jpg"
                      alt="حضرت مولانا محمد حقانی راشد صاحب - مہتمم جامعہ دارالعلوم اسلامیہ مردان"
                      className="muhtamim-photo-img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/logo.png';
                      }}
                    />
                  </div>
                  <div className="muhtamim-photo-caption">
                    <div className="caption-name">حضرت مولانا محمد حقانی راشد صاحب</div>
                    <div className="caption-title">مہتمم و سرپرستِ اعلیٰ</div>
                    <div className="caption-inst">جامعہ دارالعلوم اسلامیہ مردان</div>
                  </div>
                </div>
              </div>

              {/* Leader Meta & Statement Column */}
              <div className="muhtamim-info-col">
                <div className="muhtamim-official-tag">
                  <FiAward size={15} />
                  <span>پیغامِ قیادت و رہنمائی | Official Leadership Address</span>
                </div>
                <h2 className="muhtamim-leader-name">حضرت مولانا محمد حقانی راشد صاحب</h2>
                <h3 className="muhtamim-leader-designation">
                  مہتمم، بانی و سرپرستِ اعلیٰ — جامعہ دارالعلوم اسلامیہ مردان
                </h3>

                <div className="muhtamim-creds-strip">
                  <span className="cred-chip">
                    <FiCheckCircle size={14} /> ملحق وفاق المدارس: 32373 (07/07/2026)
                  </span>
                  <span className="cred-chip">
                    <FiCheckCircle size={14} /> رجسٹرڈ حکومتِ پاکستان: 59942/18649 (19/05/2025)
                  </span>
                  <span className="cred-chip">
                    <FiMapPin size={14} /> کاٹلنگ روڈ، چار بانڈہ، مردان
                  </span>
                </div>

                <div className="muhtamim-lead-quote">
                  <p>
                    تعلیم صرف کتابی معلومات کا حصول نہیں، بلکہ قلب و روح کا تزکیہ، اخلاق کی تعمیر اور نئی نسل کو قرآن و سنت کے لازوال اصولوں کی روشنی میں باوقار و باکردار مسلمان بنانا ہے۔ ہمارا نصب العین ایسے رجالِ کار تیار کرنا ہے جو معاشرے کے لیے مشعلِ راہ ثابت ہوں۔
                  </p>
                </div>

                <div className="muhtamim-header-actions">
                  <Link to="/admission" className="btn btn-primary">
                    آن لائن داخلہ فارم <FiArrowLeft style={{ marginRight: '6px' }} />
                  </Link>
                  <a href="tel:03153044992" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FiPhone size={16} /> <span>دفتری رابطہ: <span dir="ltr" className="ltr-text">0315 3044992</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars / Institutional Priorities */}
          <div className="muhtamim-pillars-section">
            <h3 className="pillars-section-title">جامعہ کی بنیادی ترجیحات و تعلیمی ستون</h3>
            <p className="pillars-section-subtitle">تعلیمی و تربیتی مشن کے وہ بنیادی اہداف جن پر دارالعلوم اسلامیہ مردان کی اساس رکھی گئی ہے:</p>
            <div className="muhtamim-pillars-grid">
              <div className="pillar-item-card">
                <div className="pillar-icon-box">
                  <FiBookOpen size={24} />
                </div>
                <h4>قرآنی علوم و تجوید</h4>
                <p>صحتِ تلفظ، حسنِ قراءت اور مکمل فہم کے ساتھ حفظِ قرآن کریم کی اعلیٰ و معیاری تعلیم۔</p>
              </div>

              <div className="pillar-item-card">
                <div className="pillar-icon-box">
                  <FiAward size={24} />
                </div>
                <h4>کردار سازی و تقویٰ</h4>
                <p>سنتِ نبوی ﷺ کے سانچے میں طلبہ کی اخلاقی، باطنی اور فکری تربیت کا خصوصی و شبانہ روز اہتمام۔</p>
              </div>

              <div className="pillar-item-card">
                <div className="pillar-icon-box">
                  <FiShield size={24} />
                </div>
                <h4>عصری فہم و شعور</h4>
                <p>عہدِ حاضر کے افکار اور پیچیدہ مسائل سے آگاہی کے ساتھ شریعتِ مطہرہ کی متوازن و مدلل رہنمائی۔</p>
              </div>

              <div className="pillar-item-card">
                <div className="pillar-icon-box">
                  <FiHeart size={24} />
                </div>
                <h4>خدمتِ خلق و باہمی ہمدردی</h4>
                <p>مخلوقِ خدا کی بے لوث خدمت، یتیم و نادار طلبہ کی کامل کفالت اور معاشرتی فلاح میں عملی کردار۔</p>
              </div>
            </div>
          </div>

          {/* Full Message Container */}
          <div className="muhtamim-message-article">
            {/* Arabic Khutba Opening */}
            <div className="arabic-khutba-box">
              <p className="arabic-khutba-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className="arabic-khutba-text">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ سَيِّدِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ، وَعَلَىٰ آلِهِ وَأَصْحَابِهِ أَجْمَعِينَ، أَمَّا بَعْدُ:
              </p>
            </div>

            {/* Section 1: Welcome & Context */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                استقبالیہ، نورِ توحید اور آغازِ کلام
              </h3>
              <p className="message-body-text">
                جب دنیا جہالت کی تاریکیوں میں ڈوبی ہوئی تھی، شرک کی آندھیاں توحید کا چراغ گل کر چکی تھیں اور انسانیت کا ضمیر اس روشنی سے محروم ہو چکا تھا جو اسے حق و باطل اور اچھائی و برائی میں تمیز کرنا سکھاتی ہے؛ تب تاریکِ شرک و جہالت میں علمِ توحید کی پہلی کرن نمودار ہوئی اور آسمان نے اپنی عظیم نعمت قرآن مجید سے اپنے برگزیدہ بندے حضرت محمد ﷺ کو نوازا اور قرآن کریم کو ساری دنیا کی ہدایت کے لیے سرچشمہ قرار دیا۔ اس سے تاریکی کے بادل چھٹے اور علم کی روشنی نے دل و دماغ کو نور سے منور کیا۔
              </p>
              <p className="message-body-text">
                تاریخ نے دیکھا کہ امتِ مسلمہ کے ننھے ننھے بچوں نے تمام علوم حفظ کر کے قرآن مجید اور احادیث کو اپنے سینوں میں محفوظ کیا، اپنی نسلوں کو قرآن کا حافظ بنایا اور والدین اس حفظِ قرآن کی دولت پر بجا فخر کرتے ہیں۔ حفظِ قرآن کی اہمیت سے کون واقف نہیں اور اس کی عظمت سے کون انکار کر سکتا ہے؟ آقائے دو جہاں ﷺ نے تعلیمِ قرآن کی ترغیب دیتے ہوئے فرمایا: <em>«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»</em> (تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے)۔ نیز حدیث پاک کی رو سے حافظِ قرآن کے والدین کو قیامت کے روز ایسا تاج پہنایا جائے گا جس کی روشنی سورج سے بھی زیادہ ہوگی۔
              </p>
              <p className="message-body-text">
                اسی مقدس مشن اور مسلمانوں کے بچوں کو کلامِ الٰہی سے منور کرنے کے لیے مردان کی سرزمین پر <strong>کاٹلنگ روڈ کے قریب، رنگ روڈ کے نزدیک، چار بانڈہ</strong> کے علاقے میں <strong>دارالعلوم اسلامیہ مردان</strong> کی بنیاد رکھی گئی۔ الحمد للہ!
              </p>
            </div>

            {/* Section 2: Vision & Philosophy (Inspired by institutional leadership model) */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                جامعہ کا تعلیمی فلسفہ، وژن اور نصب العین
              </h3>
              <p className="message-body-text">
                کسی بھی تعلیمی ادارے کی اصل شناخت اس کے شاندار محلات یا عمارتوں سے نہیں، بلکہ اس کے مقاصد کی رفعت، اساتذہ کے خلوص اور فارغ التحصیل طلبہ کے کردار سے ہوتی ہے۔ جامعہ دارالعلوم اسلامیہ مردان کا بنیادی نصب العین محض امتحانی اسناد کا اجراء نہیں، بلکہ طلبہ کے دلوں میں خشیتِ الٰہی، محبتِ رسول ﷺ اور امتِ مسلمہ کے لیے درد مندی کا جذبہ بیدار کرنا ہے۔
              </p>
              <p className="message-body-text">
                ہماری کوشش ہے کہ جامعہ میں داخل ہونے والا ہر طالب علم جب اپنی تعلیم مکمل کر کے عملی میدان میں قدم رکھے، تو وہ ایک بہترین قاری، جید عالم، باعمل مفتی ہونے کے ساتھ ساتھ ایک دیانت دار، سچا، باوقار اور بااخلاق انسان ہو۔ جو نہ صرف اپنے والدین کے لیے صدقہ جاریہ بنے بلکہ اپنے علاقے، ملک اور پوری ملتِ اسلامیہ کے لیے فخر کا باعث ہو۔
              </p>
            </div>

            {/* Section 3: Dual Education - Hifz and Contemporary Sciences */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                حفظِ قرآن کے ساتھ ساتھ عصری تعلیم کا امتزاج اور عصرِ حاضر کے تقاضے
              </h3>
              <p className="message-body-text">
                حفظِ قرآن کی دولت ایک عظیم نعمت اور سعادت ہے، لیکن موجودہ دور میں عصری تعلیم کی افادیت سے بھی انکار نہیں کیا جا سکتا۔ حفاظِ کرام کے پاس عصری تعلیم نہ ہونے کے باعث مزید اعلیٰ پڑھائی کے دوران انہیں متعدد مشکلات اور رکاوٹوں کا سامنا رہتا ہے۔
              </p>
              <p className="message-body-text">
                اس بنا پر ہم نے اس بات کی شدید ضرورت محسوس کی کہ دونوں علوم ساتھ ساتھ جاری رکھے جائیں، تاکہ دینی علوم کے شائقین حضرات کی تشنگی بھی پوری ہو اور عصرِ حاضر کے تقاضوں کو بھی پورا کیا جائے۔ چنانچہ اسی ضرورت کے تحت <strong>دارالعلوم اسلامیہ مردان</strong> کے پاکیزہ اور صاف ستھرے ماحول میں اس کا باقاعدہ آغاز کیا جا رہا ہے۔ دونوں علوم کو کامیابی کے ساتھ حاصل کیا جا سکتا ہے اور اس کے نتائج بھی ان شاء اللہ انتہائی حوصلہ افزا اور بارآور ہوں گے۔
              </p>
            </div>

            {/* Special Callout Box for Students */}
            <div className="muhtamim-callout-box">
              <div className="callout-icon-tag">طلبہ کے نام خاص نصیحت</div>
              <h4 className="callout-title">میرے عزیز طلبہ و نونہالانِ جامعہ!</h4>
              <p className="callout-text">
                آپ اس ادارے کا سب سے قیمتی سرمایہ اور ہمارا روشن مستقبل ہیں۔ علم کے راستے میں خلوص، محنت، اور اساتذہ کے ادب و احترام کو اپنا اوڑھنا بچھونا بنائیں۔ اپنے اوقات کو ضائع ہونے سے بچائیں اور ہر لمحہ اللہ کے دین کی سربلندی کی فکر میں صرف کریں۔ تقویٰ اور پرہیزگاری کو اپنی زندگی کا حصہ بنائیں؛ کیونکہ جو علم عمل سے خالی ہو وہ روح سے خالی جسم کی مانند ہے۔
              </p>
            </div>

            {/* Section 4: Role of Parents & Community */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                محترم والدین اور سرپرست حضرات سے گزارش
              </h3>
              <p className="message-body-text">
                اولاد اللہ تعالیٰ کی عطا کردہ عظیم امانت ہے۔ والدین کا سب سے بڑا فرض یہ ہے کہ وہ اپنی اولاد کو اسلامی ماحول اور صحیح تربیت فراہم کریں۔ ہم ان تمام والدین کا شکریہ ادا کرتے ہیں جنہوں نے اپنے جگر گوشوں کو کلام اللہ کے حفظ اور علومِ نبویہ کی تحصیل کے لیے ہمارے سپرد کیا۔
              </p>
              <p className="message-body-text">
                ہماری والدین سے گزارش ہے کہ وہ مدرسہ کی تعلیم و تربیت کے ساتھ ساتھ گھر پر بھی اپنے بچوں کی نگرانی فرمائیں، ان کی نمازوں کی پابندی، اچھی صحبت اور روزمرہ حرکات و سکنات پر محبت و شفقت کے ساتھ نظر رکھیں۔ جامعہ کی انتظامیہ ہر وقت آپ کی مفید آراء اور تجاویز کا خیر مقدم کرتی ہے۔
              </p>
            </div>

            {/* Section 5: Future Roadmap & Expansion */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                آئندہ کے ترقیاتی منصوبے اور اہداف
              </h3>
              <p className="message-body-text">
                جامعہ دارالعلوم اسلامیہ مردان مرحلہ وار اپنے تعلیمی اور رفاہی دائرہ کار کو وسیع کر رہا ہے۔ ہمارے آئندہ ترجیحی اہداف میں درج ذیل شامل ہیں:
              </p>
              <div className="roadmap-grid">
                <div className="roadmap-card">
                  <div className="roadmap-step-badge">۱</div>
                  <h5>جدید دارالاقامہ و کلاس رومز</h5>
                  <p>طلبہ کی بڑھتی ہوئی تعداد کے پیشِ نظر کشادہ، پرسکون اور معیاری ہاسٹل و تعلیمی کمروں کی تعمیر۔</p>
                </div>
                <div className="roadmap-card">
                  <div className="roadmap-step-badge">۲</div>
                  <h5>مرکزی کتب خانہ و لائبریری</h5>
                  <p>تفسیر، حدیث، فقہ اور عصری موضوعات پر نایاب کتب و مراجع کے لیے ایک وسیع ڈیجیٹل و مطبوعہ مکتبہ۔</p>
                </div>
                <div className="roadmap-card">
                  <div className="roadmap-step-badge">۳</div>
                  <h5>یتیم و مستحق طلبہ کا کفالت فنڈ</h5>
                  <p>نادار و مستحق باصلاحیت طلبہ کے لیے مفت قیام و طعام، کتب اور علاج معالجے کے وظائف میں مزید اضافہ۔</p>
                </div>
                <div className="roadmap-card">
                  <div className="roadmap-step-badge">۴</div>
                  <h5>تخصصات و شعبہ افتاء کا استحکام</h5>
                  <p>اعلیٰ درجات کے فضلاء کے لیے فقہی تحقیقات اور شرعی رہنمائی کے شعبہ کی توسیع۔</p>
                </div>
              </div>
            </div>

            {/* Section 6: Gratitude to Donors and Supporters */}
            <div className="message-section">
              <h3 className="message-section-heading">
                <FiFeather size={20} className="section-heading-icon" />
                معاونین اور اہل خیر کا شکریہ
              </h3>
              <p className="message-body-text">
                دینی مدارس خالصتاً اللہ تعالیٰ کی توفیق اور اہل خیر و مخلصین کے تعاون سے چلتے ہیں۔ ہم ان تمام مخلص دوستوں اور معاونین کے تہہ دل سے شکر گزار ہیں جو اپنے پاکیزہ اموال، زکوٰۃ و صدقات اور مخلصانہ دعاؤں سے اس ادارے کا ساتھ دے رہے ہیں۔ اللہ تعالیٰ آپ کی عطیات کو قبول فرمائے اور آخرت کے لیے ذخیرہ نجات بنائے۔
              </p>
            </div>

            {/* Closing & Official Signature Block */}
            <div className="muhtamim-signature-block">
              <p className="closing-dua">
                اللہ تعالیٰ سے دعا ہے کہ وہ جامعہ دارالعلوم اسلامیہ مردان کو اپنے شایانِ شان قبول فرمائے، طلبہ، اساتذہ اور معاونین کی حفاظت فرمائے، اور ہمارے وطنِ عزیز پاکستان کو امن، سلامتی اور اسلامی نظام کا گہوارہ بنائے۔ آمین یا رب العالمین۔
              </p>

              <div className="signature-layout">
                <div className="signature-right-meta">
                  <span className="sign-date-label">تاریخ اشاعت و توثیق:</span>
                  <span className="sign-date-val">{new Date().toLocaleDateString('ur-PK')} مطابق 1447ھ</span>
                  <span className="sign-location">مقام: دفتر مہتمم، جامعہ دارالعلوم اسلامیہ مردان</span>
                </div>

                <div className="signature-center-seal">
                  <img
                    src="/muhtamim-signature.png"
                    alt="دستخط مہتمم"
                    className="official-signature-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="signatory-name">مولانا محمد حقانی راشد صاحب</div>
                  <div className="signatory-role">مہتمم و سرپرستِ اعلیٰ</div>
                  <div className="signatory-inst">جامعہ دارالعلوم اسلامیہ مردان، خیبر پختونخوا</div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Action Navigation Grid at Bottom */}
          <div className="muhtamim-bottom-nav-box">
            <h4 className="bottom-nav-title">جامعہ کے دیگر اہم شعبہ جات ملاحظہ فرمائیں:</h4>
            <div className="bottom-nav-links">
              <Link to="/about" className="bottom-link-card">
                <FiBookOpen size={20} />
                <span>جامعہ کا تعارف و نصاب</span>
              </Link>
              <Link to="/admission" className="bottom-link-card">
                <FiAward size={20} />
                <span>آن لائن داخلہ فارم</span>
              </Link>
              <Link to="/donation" className="bottom-link-card">
                <FiHeart size={20} />
                <span>عطیات و مالی تعاون</span>
              </Link>
              <Link to="/contact" className="bottom-link-card">
                <FiPhone size={20} />
                <span>رابطہ و دفتری اوقات</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
