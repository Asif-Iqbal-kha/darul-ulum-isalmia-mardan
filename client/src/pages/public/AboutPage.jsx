import { FiBookOpen, FiShield, FiUsers, FiAward, FiGlobe, FiTv, FiSearch, FiCheckCircle } from 'react-icons/fi';
import SEOHead from '../../components/common/SEOHead';
import './PublicPages.css';

const objectivesList = [
  {
    num: '۱',
    icon: <FiBookOpen size={22} />,
    title: 'قرآن و حدیث کی تعلیمات کی ترویج',
    desc: 'قرآن وحدیث کی تعلیمات کو مسلمانوں کی عملی زندگی میں لانے اور ان کی مزید ترویج و اشاعت کے لیے ہمہ وقت جدوجہد کرنا۔'
  },
  {
    num: '۲',
    icon: <FiAward size={22} />,
    title: 'عصری تقاضوں سے ہم آہنگ محققانہ تعلیم',
    desc: 'جدید دور کے علمی تقاضوں کو مدنظر رکھتے ہوئے طلباء کو قرآن، حدیث، فقہ اور عقائد کی ایسی جامع، مکمل اور محققانہ تعلیم دینا جس کے نتیجے میں عصری تقاضوں کو سمجھ کر مسلمانوں کی دینی رہنمائی کرنے والے صاحبِ بصیرت علماء پیدا ہوں۔'
  },
  {
    num: '۳',
    icon: <FiUsers size={22} />,
    title: 'تخصصات اور شعبہ ہائے زندگی میں خدمات',
    desc: 'مروجہ علوم دینیہ کی تکمیل کے بعد ہر سال فضلاء کی ایک جماعت منتخب کر کے انہیں تفسیر، حدیث، فقہ، قضاء، دعوت و ارشاد اور دیگر علوم میں تخصص کروانا۔ نیز سیاسیات، اقتصادیات اور صحافت کے شعبوں میں کام کرنے والے فضلاء کو خصوصی تربیت دینا، تاکہ ان شعبوں کے ساتھ مختلف شعبہ ہائے زندگی میں فضلاء دارالعلوم دینی و ملی خدمات انجام دے سکیں۔'
  },
  {
    num: '۴',
    icon: <FiGlobe size={22} />,
    title: 'عربی اور انگریزی زبانوں پر خصوصی توجہ',
    desc: 'بیرونی دنیا کے ساتھ رابطہ کی دونوں بڑی زبانوں عربی اور انگریزی کی تعلیم پر خصوصی توجہ دینا۔'
  },
  {
    num: '۵',
    icon: <FiCheckCircle size={22} />,
    title: 'جدید طرقِ تدریس سے روشناسی',
    desc: 'فضلاء کو جدید طرقِ تدریس اور مسائلِ تعلیم سے روشناس کرنا۔'
  },
  {
    num: '۶',
    icon: <FiTv size={22} />,
    title: 'میڈیا پر اسلام کی صحیح ترجمانی',
    desc: 'پرنٹ و الیکٹرانک میڈیا پر اسلام کی صحیح ترجمانی کے لیے طلباء کی تحریری و تقریری صلاحیتوں کی آبیاری کرنا۔'
  },
  {
    num: '۷',
    icon: <FiShield size={22} />,
    title: 'نوجوان طبقے کی فکری و اخلاقی حفاظت',
    desc: 'نوجوان طبقے کو دورِ جدید کے فتنوں سے بچا کر ان کے ذہن میں صحیح اسلامی عقائد راسخ کرنے اور اسلامی اخلاق اور طرزِ معاشرت عام کرنے کی سعی و کوشش کرنا۔'
  },
  {
    num: '۸',
    icon: <FiBookOpen size={22} />,
    title: 'خواتین کے لیے دینی تعلیم و تربیت',
    desc: 'خواتین میں قرآن و حدیث کی تعلیمات کو عام کرنے اور ہر گھر کی دینی و علمی ضروریات پوری کرنے کے لیے صحیح الفکر عالمات و فاضلات تیار کرنا۔'
  },
  {
    num: '۹',
    icon: <FiAward size={22} />,
    title: 'اسلامی تہذیب و ثقافت کی بقا و ترویج',
    desc: 'اسلامی تہذیب و ثقافت کی بقاء اور ترویج کے لیے کوشش کرنا۔'
  },
  {
    num: '۱۰',
    icon: <FiSearch size={22} />,
    title: 'علمی تحقیق اور الحاد کا سدباب',
    desc: 'جدید فتنوں کے علمی تعاقب اور الحاد و بے دینی کی فکری یلغار کو روکنے کے لیے تحقیق و ریسرچ کے اداروں کے قیام کے ساتھ ساتھ بہترین رجالِ کار کی فراہمی۔'
  }
];

export default function AboutPage() {
  return (
    <div>
      <SEOHead
        titleEn="About Us & Objectives"
        titleUr="تعارف و مقاصد"
        descEn="Introduction, aims and curriculum of Jamia Darul Uloom Islamia Mardan. Affiliated with Wifaq ul Madaris Al-Arabia Pakistan."
        descUr="جامعہ دارالعلوم اسلامیہ مردان کا تعارف، نصاب، اور اغراض و مقاصد۔ وفاق المدارس العربیہ پاکستان سے الحاق شدہ ادارہ۔"
        path="/about"
      />
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>تعارف و مقاصد</h1>
          <p>جامعہ دارالعلوم اسلامیہ مردان — تعارف، منہاج اور فکری مقاصد</p>
        </div>
      </div>

      <div className="content-page">
        <div className="container">
          {/* Section 1: Madrassa Introduction */}
          <div className="content-block">
            <h2>جامعہ دارالعلوم اسلامیہ مردان کا تعارف</h2>
            <p>
              جامعہ دارالعلوم اسلامیہ مردان مردان، خیبرپختونخوا، پاکستان میں واقع ایک عظیم الشان و معتبر دینی تعلیمی ادارہ ہے۔ یہ ادارہ وحیِ الٰہی یعنی قرآن و سنت کے علوم کے تحفظ و بقا، اشاعت اور نئی نسل کی اخلاقی، علمی اور روحانی تربیت کا فریضہ کمال اخلاص و محنت سے سرانجام دے رہا ہے۔ مدرسہ میں ناظرہ و حفظ القرآن الکریم کے ساتھ ساتھ درسِ نظامی کے مرحلہ وار درجات کی جامع اور معیاری تعلیم دی جاتی ہے۔
            </p>
            <p style={{ marginTop: '12px', fontWeight: 700, color: 'var(--color-primary)' }}>
              رجسٹرڈ حکومتِ پاکستان: 59942/18649 (تاریخ: 19/05/2025) | ملحق وفاق المدارس العربیہ پاکستان: 32373 (تاریخ: 07/07/2026)
            </p>
          </div>

          {/* Section 2: Core Purpose & Key Objectives (Aims & Objectives) */}
          <div className="content-block">
            <div style={{ textAlign: 'center', marginBottom: '14px', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
              ﷽
            </div>
            <h2>اغراض و مقاصد (دارالعلوم اسلامیہ مردان)</h2>
            <div className="objectives-lead-card">
              جامعہ دارالعلوم اسلامیہ مردان کا بنیادی نصب العین قرآن و سنت کی اشاعت، دورِ حاضر کے فکری و علمی تقاضوں سے ہم آہنگ باصلاحیت علماء و فضلاء کی تیاری، اور اسلامی اقدار و تہذیب کا تحفظ ہے۔
            </div>

            <div className="objectives-grid">
              {objectivesList.map((item) => (
                <div key={item.num} className="objective-item-card">
                  <div className="objective-card-header">
                    <div className="objective-card-icon">
                      {item.icon}
                    </div>
                    <div className="objective-card-meta">
                      <span className="objective-num-tag">
                        ہدف نمبر {item.num}
                      </span>
                      <h3 className="objective-card-title">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="objective-card-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Educational Programs */}
          <div className="content-block">
            <h2>تعلیمی شعبہ جات و پروگرامز</h2>
            <p>
              جامعہ دارالعلوم اسلامیہ مردان میں طلباء کی علمی صلاحیتوں کو نکھارنے کے لیے درج ذیل شعبہ جات فعال ہیں:
            </p>
            <ul style={{ listStyle: 'disc', paddingRight: '24px', marginTop: '12px' }}>
              <li style={{ marginBottom: '10px', color: 'var(--color-text-secondary)', lineHeight: '1.9' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>شعبہ ناظرہ قرآن مجید:</strong> تجوید اور مخارج کی مکمل صحت کے ساتھ کلام اللہ کی بنیادی تلاوت کی تعلیم۔
              </li>
              <li style={{ marginBottom: '10px', color: 'var(--color-text-secondary)', lineHeight: '1.9' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>شعبہ حفظ القرآن الکریم:</strong> قرآن مجید کو مکمل حفظ کرانے کا منظم و معیاری پروگرام، جس میں روزانہ سبق، سبقی اور منزل کا کڑا اہتمام ہوتا ہے۔
              </li>
              <li style={{ marginBottom: '10px', color: 'var(--color-text-secondary)', lineHeight: '1.9' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>درس نظامی (درجہ اول تا ہشتم):</strong> علوم کتاب و سنت، فقہ، تفسیر، حدیث، عربی گرائمر و ادب، اور دیگر متداولہ علوم کی مرحلہ وار و جامع تدریس۔
              </li>
            </ul>
          </div>

          {/* Section 4: Jamia Foundation, Quranic Vision & Dual Education */}
          <div className="content-block">
            <h2>بنیاد، فکری پس منظر اور حفظِ قرآن و عصری تعلیم کا امتزاج</h2>
            <div className="manifesto-container">
              <div style={{ textAlign: 'center', marginBottom: '22px', fontSize: '1.45rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>

              <p className="manifesto-paragraph">
                جب دنیا جہالت کی تاریکیوں میں ڈوبی ہوئی تھی، شرک کی آندھیاں توحید کا چراغ گل کر چکی تھیں اور انسانیت کا ضمیر اس روشنی سے محروم ہو چکا تھا جو اسے حق و باطل اور اچھائی و برائی میں تمیز کرنا سکھاتی ہے؛ تب تاریکِ شرک و جہالت میں علمِ توحید کی پہلی کرن نمودار ہوئی اور آسمان نے اپنی عظیم نعمت قرآن مجید سے اپنے عظیم بندے اور آخری رسول حضرت محمد ﷺ کو نوازا اور قرآن کریم کو ساری دنیا کی ہدایت کے لیے سرچشمہ قرار دیا۔ اس سے تاریکی کے بادل چھٹے اور علم کی روشنی نے بھٹکے ہوئے لوگوں کے دل و دماغ کو نور سے منور کیا۔
              </p>

              <p className="manifesto-paragraph">
                تاریخ نے دیکھا کہ امتِ مسلمہ کے ننھے ننھے بچوں نے تمام علوم حفظ کر کے قرآن مجید اور احادیث کو اپنے سینوں میں محفوظ کیا، اپنی نسلوں کو قرآن کا حافظ بنایا اور والدین اس حفظِ قرآن کی دولت پر بجا فخر کرتے ہیں۔ حفظِ قرآن کی اہمیت سے کون واقف نہیں اور اس کی اہمیت سے کون انکار کر سکتا ہے؟ آپ ﷺ نے تعلیمِ قرآن کی ترغیب دیتے ہوئے ارشاد فرمایا:
              </p>

              <div style={{ background: '#f8fafc', borderRight: '4px solid var(--color-primary)', padding: '16px 20px', borderRadius: '8px', margin: '18px 0', border: '1px solid #e2e8f0', borderRightWidth: '4px' }}>
                <p style={{ margin: '0 0 6px 0', fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '1.15rem' }}>
                  «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
                </p>
                <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.02rem', lineHeight: '1.9' }}>
                  ”تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔“
                </p>
              </div>

              <p className="manifesto-paragraph">
                ایک اور حدیثِ پاک کے مطابق حافظِ قرآن کے والدین کو قیامت کے روز ایسا پرنور تاج پہنایا جائے گا جس کی روشنی سورج کی روشنی سے بھی زیادہ ہوگی۔ اس وجہ سے مسلمانوں میں ہمیشہ اپنے بچوں کو قرآن مجید حفظ کرانے کا بہت زیادہ اہتمام کیا گیا۔
              </p>

              {/* Foundation Location Callout */}
              <div className="institutional-memo-block">
                <h4 className="institutional-memo-title">
                  <FiAward size={18} />
                  <span>دارالعلوم اسلامیہ مردان کی اساس و سنگِ بنیاد</span>
                </h4>
                <p className="institutional-memo-text">
                  مسلمانوں کے بچوں کو قرآنِ پاک کے انوار سے منور کرنے کے لیے مردان کی سرزمین پر <strong>کاٹلنگ روڈ کے قریب، رنگ روڈ کے نزدیک، چار بانڈہ</strong> کے علاقے میں <strong>دارالعلوم اسلامیہ مردان</strong> کی بنیاد رکھی گئی۔ الحمد للہ!
                </p>
              </div>

              <p className="manifesto-paragraph">
                حفظِ قرآن کی دولت ایک عظیم نعمت ہے، لیکن موجودہ دور میں عصری تعلیم کی افادیت سے بھی انکار نہیں کیا جا سکتا۔ حفاظِ کرام کے پاس عصری تعلیم نہ ہونے کے باعث مزید پڑھائی میں انہیں کئی مشکلات اور رکاوٹوں کا سامنا رہتا ہے۔
              </p>

              <p className="manifesto-paragraph">
                اس بنا پر اس بات کی ضرورت محسوس ہوئی کہ دونوں علوم ساتھ ساتھ جاری رکھے جائیں، تاکہ دینی علوم کے شائقین حضرات کی تشنگی بھی پوری ہو اور عصرِ حاضر کے تقاضوں کو بھی احسن انداز میں پورا کیا جائے۔ چنانچہ اسی ضرورت کے تحت <strong>دارالعلوم اسلامیہ مردان</strong> کے پاکیزہ اور صاف ستھرے ماحول میں اس مبارک کام کا آغاز کیا گیا ہے۔ دونوں علوم کو کامیابی کے ساتھ ساتھ حاصل کیا جا سکتا ہے اور اس کے نتائج بھی ان شاء اللہ انتہائی حوصلہ افزا ہوں گے۔
              </p>
            </div>
          </div>

          {/* Section 5: Administration */}
          <div className="content-block">
            <h2>انتظامیہ و اساتذہ کرام</h2>
            <p>
              جامعہ دارالعلوم اسلامیہ مردان کی انتظامیہ باصلاحیت اور متقی علماء کرام پر مشتمل ہے جو طلباء کی تعلیمی و تربیتی ضروریات کی نگہبانی فرماتے ہیں۔ ادارہ میں شب و روز محنت کرنے والے اساتذہ کرام کا مشن طلبہ کو علم نافع اور عمل صالح کا پیکر بنانا ہے۔
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
