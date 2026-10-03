import React, { useRef } from 'react';
import { FiX, FiPrinter, FiShield, FiCheckCircle } from 'react-icons/fi';
import './RulesModal.css';

export default function RulesModal({ isOpen, onClose }) {
  const modalContentRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="rules-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="rules-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Control Bar (Screen only) */}
        <div className="rules-modal-top-bar no-print">
          <div className="rules-top-title-wrap">
            <FiShield className="rules-top-icon" size={20} />
            <span className="rules-top-title">آئین، قواعد و ضوابط (دستور العمل)</span>
          </div>
          <div className="rules-top-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm rules-print-btn"
              onClick={handlePrint}
              title="دستور العمل پرنٹ کریں"
            >
              <FiPrinter size={16} />
              <span>پرنٹ / PDF محفوظ کریں</span>
            </button>
            <button
              type="button"
              className="rules-close-btn"
              onClick={onClose}
              aria-label="بند کریں"
              title="بند کریں"
            >
              <FiX size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="rules-modal-scroll-area" ref={modalContentRef}>
          <div className="rules-document-sheet">

            {/* Subtle Institutional Watermark */}
            <div className="rules-watermark" aria-hidden="true">
              <img src="/logo.png" alt="" />
            </div>

            {/* Official Letterhead Header */}
            <header className="rules-doc-header">
              <div className="rules-doc-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
              
              <div className="rules-doc-meta-top">
                <div className="rules-meta-item">
                  <span className="rules-meta-lbl">رجسٹرڈ حکومتِ پاکستان:</span>
                  <span className="rules-meta-val">59942/18649 (19/05/2025)</span>
                </div>
                <div className="rules-header-logo-box">
                  <img src="/logo.png" alt="لوگو جامعہ دارالعلوم اسلامیہ مردان" className="rules-doc-logo" />
                </div>
                <div className="rules-meta-item">
                  <span className="rules-meta-lbl">ملحق وفاق المدارس العربیہ:</span>
                  <span className="rules-meta-val">32373 (07/07/2026)</span>
                </div>
              </div>

              <h1 className="rules-doc-main-name">دارالعلوم اسلامیہ مردان (للبنین وللبنات)</h1>
              <p className="rules-doc-location">
                گلشن حقانیہ، رنگ روڈ، نزد کاٹلنگ روڈ، چار بانڈہ، مردان، خیبر پختونخوا
              </p>

              <div className="rules-doc-title-badge">
                <span>آئین، قواعد و ضوابط (دستور العمل)</span>
              </div>
            </header>

            {/* Document Body */}
            <article className="rules-doc-content">

              {/* باب اول */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب اوّل: تعارف، نام اور قانونی حیثیت</h2>
                <div className="rules-clause">
                  <strong>دفعہ 1 (نام):</strong> اس دینی و تعلیمی ادارے کا نام <strong>”دارالعلوم اسلامیہ مردان“</strong> ہوگا، جسے اس آئین میں آئندہ <strong>”دارالعلوم“</strong> کہا جائے گا۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 2 (مقام):</strong> دارالعلوم کا مرکز اور تمام تعلیمی و انتظامی سرگرمیاں شہر مردان، ضلع مردان، صوبہ خیبر پختونخوا، پاکستان میں انجام پائیں گی۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 3 (قانونی حیثیت):</strong> دارالعلوم ایک غیر منافع بخش، فلاحی اور دینی تعلیمی ادارہ ہوگا، جو اسلامی شریعت اور ریاستِ پاکستان کے نافذ قوانین و ضوابط کے مطابق کام کرے گا۔
                </div>
              </section>

              {/* باب دوم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب دوم: وژن، مشن اور اغراض و مقاصد</h2>
                <div className="rules-clause">
                  <strong>دفعہ 4 (وژن):</strong> ایسی باکردار، باحیا اور باعلم مسلمان مرد و خواتین کی تیاری جو دین و دنیا میں مثبت کردار ادا کر سکیں۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 5 (مشن):</strong> قرآن و سنت کی روشنی میں طالبات اور طلبہ کو معیاری دینی تعلیم، اخلاقی تربیت اور عملی زندگی کے لیے رہنمائی فراہم کرنا۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 6 (اغراض و مقاصد):</strong>
                  <ul className="rules-sub-list">
                    <li>طلبہ و طالبات کو قرآنِ مجید ناظرہ، حفظ، تجوید، ترجمہ اور علومِ اسلامیہ کے ساتھ ساتھ عصری تعلیم دینا۔</li>
                    <li>اسلامی اخلاق، حیا، پردہ اور معاشرتی اقدار کو فروغ دینا۔</li>
                    <li>مرد و خواتین کے لیے محفوظ، باوقار اور منظم تعلیمی ماحول فراہم کرنا۔</li>
                    <li>دینی تعلیم کے ساتھ بنیادی عصری تعلیم کی سہولت مہیا کرنا، جہاں مناسب ہو۔</li>
                    <li>معاشرے میں دینی شعور اور اخلاقی اصلاح کے لیے کردار ادا کرنا۔</li>
                  </ul>
                </div>
              </section>

              {/* باب سوم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب سوم: انتظامی نظام</h2>
                <div className="rules-clause">
                  <strong>دفعہ 7 (مجلسِ منتظمہ):</strong> دارالعلوم کی اعلیٰ نگرانی اور پالیسی سازی کے لیے ایک مجلسِ منتظمہ (انتظامی کمیٹی) قائم ہوگی۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 8 (مجلسِ منتظمہ کی تشکیل):</strong> مجلسِ منتظمہ درج ذیل عہدے داران و اراکین پر مشتمل ہوگی:
                  <div className="rules-board-grid">
                    <div className="rules-board-item">
                      <span className="board-role">سرپرستِ اعلیٰ:</span>
                      <span className="board-name">مولانا محمد عاقل انصاری صاحب</span>
                    </div>
                    <div className="rules-board-item">
                      <span className="board-role">صدر:</span>
                      <span className="board-name">مولانا محمد ایاز حقانی صاحب</span>
                    </div>
                    <div className="rules-board-item">
                      <span className="board-role">نائب صدر:</span>
                      <span className="board-name">مولانا حضرت بلال حقانی صاحب</span>
                    </div>
                    <div className="rules-board-item">
                      <span className="board-role">جنرل سیکرٹری:</span>
                      <span className="board-name">مولانا عمر فاروق حقانی صاحب</span>
                    </div>
                    <div className="rules-board-item">
                      <span className="board-role">خزانچی / مالیات:</span>
                      <span className="board-name">مولانا تاثیر خان صاحب</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '10px', fontSize: '0.95rem', color: '#334155' }}>
                    <strong>اراکینِ مجلس:</strong> مفتی ڈاکٹر محمد جاوید صاحب، مولانا شفیع اللہ صاحب، مفتی فضل وہاب صاحب، قاری احتشام الحق صاحب
                  </div>
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 9 (مدتِ کار):</strong> مجلسِ منتظمہ کی مدت تین (3) سال ہوگی، جس کے بعد ازسرِنو انتخاب یا توسیع عمل میں لائی جا سکتی ہے۔
                </div>
              </section>

              {/* باب چہارم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب چہارم: اختیارات و فرائضِ مجلسِ منتظمہ</h2>
                <div className="rules-clause">
                  <strong>دفعہ 10:</strong> مجلسِ منتظمہ کے اختیارات و فرائض درج ذیل ہوں گے:
                  <ul className="rules-sub-list">
                    <li>دارالعلوم کی پالیسی، نظم و نسق اور ترقیاتی منصوبوں کی منظوری۔</li>
                    <li>مہتمم، اساتذہ اور عملے کی تقرری، نگرانی اور ضرورت پڑنے پر برطرفی۔</li>
                    <li>مالی امور، بجٹ، حسابات اور آڈٹ کی نگرانی۔</li>
                    <li>نظم و ضبط اور اسلامی ماحول کے تحفظ کو یقینی بنانا۔</li>
                    <li>سرکاری، غیر سرکاری اور فلاحی اداروں سے رابطہ اور نمائندگی۔</li>
                  </ul>
                </div>
              </section>

              {/* باب پنجم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب پنجم: ناظم (پرنسپل)</h2>
                <div className="rules-clause">
                  <strong>دفعہ 11:</strong>
                  <ul className="rules-sub-list">
                    <li>دارالعلوم میں ایک ناظم ہوگا جس کا تقرر مجلسِ منتظمہ کرے گی۔</li>
                    <li>ناظم مجلسِ منتظمہ کے ماتحت کام کرے گا۔</li>
                    <li><strong>ناظم کے فرائض:</strong> تعلیمی و تربیتی نظام کی نگرانی، اساتذہ اور طالبات/طلبہ کے امور کی دیکھ بھال، نظم و ضبط، حاضری اور نصاب کے نفاذ کو یقینی بنانا، اور مجلسِ منتظمہ کو باقاعدہ رپورٹس پیش کرنا۔</li>
                  </ul>
                </div>
              </section>

              {/* باب ششم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب ششم: اساتذہ اور عملہ</h2>
                <div className="rules-clause">
                  <strong>دفعہ 12:</strong>
                  <ul className="rules-sub-list">
                    <li>اساتذہ کا تقرر دینی اور تعلیمی اہلیت، تجربہ اور حسنِ اخلاق کی بنیاد پر کیا جائے گا۔</li>
                    <li>تمام اساتذہ اور عملہ اسلامی اصولوں، پردے اور ادارہ جاتی نظم کی پابندی کریں گے۔</li>
                    <li>غفلت، بدانتظامی یا ضابطہ خلافی کی صورت میں تادیبی کارروائی کی جا سکے گی۔</li>
                  </ul>
                </div>
              </section>

              {/* باب ہفتم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب ہفتم: طلبہ و طالبات</h2>
                <div className="rules-clause">
                  <strong>دفعہ 13 (داخلہ):</strong> دارالعلوم میں داخلہ طلبہ و طالبات دونوں کے لیے ہوگا۔ دارالعلوم میں طلبہ و طالبات کے لیے <strong>الگ الگ عمارت</strong> ہوگی۔ داخلہ مقررہ اہلیت اور دستیاب نشستوں کی بنیاد پر دیا جائے گا۔
                </div>
                <div className="rules-clause">
                  <strong>دفعہ 14 (قواعد و ذمہ داریاں):</strong> طلبہ و طالبات اس بات کے پابند ہوں گے کہ:
                  <ul className="rules-sub-list">
                    <li>اسلامی لباس، پردہ اور اخلاقی آداب کی مکمل پابندی کریں۔</li>
                    <li>اساتذہ، عملہ اور انتظامیہ کا مکمل احترام کریں۔</li>
                    <li>وقت کی پابندی، حاضری اور ادارے کے نظم و ضبط کا سختی سے خیال رکھیں۔</li>
                  </ul>
                </div>
              </section>

              {/* باب ہشتم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب ہشتم: نصابِ تعلیم</h2>
                <div className="rules-clause">
                  <strong>دفعہ 15:</strong> دارالعلوم کا نصاب درج ذیل اہم مضامین و علوم پر مشتمل ہوگا:
                  <ul className="rules-sub-list">
                    <li>قرآنِ مجید (ناظرہ، حفظ، تجوید، ترجمہ و تفسیر)</li>
                    <li>حدیث شریف، فقہ اسلامی، عقائد، اسلامی اخلاق و آداب</li>
                    <li>عربی زبان، اردو زبان، انگریزی زبان</li>
                    <li>ریاضی، انگلش، سائنس، اردو (اور دیگر عصری مضامین ضرورت کے مطابق)</li>
                  </ul>
                </div>
              </section>

              {/* باب نہم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب نہم: مالی و حساباتی امور</h2>
                <div className="rules-clause">
                  <strong>دفعہ 16:</strong>
                  <ul className="rules-sub-list">
                    <li>دارالعلوم کے مالی وسائل عطیات، زکوٰۃ، صدقات، فیس اور دیگر جائز ذرائع پر مشتمل ہوں گے۔</li>
                    <li>تمام رقوم صرف دارالعلوم کے اغراض و مقاصد کے لیے استعمال کی جائیں گی۔</li>
                    <li>آمدن و اخراجات کا باقاعدہ اور شفاف ریکارڈ رکھا جائے گا۔</li>
                    <li>کسی بھی عہدیدار یا رکن کو منافع یا ذاتی فائدہ نہیں دیا جائے گا۔</li>
                  </ul>
                </div>
              </section>

              {/* باب دہم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب دہم: ترمیم</h2>
                <div className="rules-clause">
                  <strong>دفعہ 17:</strong> اس آئین میں کسی بھی قسم کی ترمیم مجلسِ منتظمہ کے <strong>دو تہائی اکثریتی ووٹ</strong> سے کی جا سکے گی، بشرطیکہ وہ اسلامی شریعت اور ملکی قوانین کے خلاف نہ ہو۔
                </div>
              </section>

              {/* باب یازدہم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب یازدہم: تحلیل (خاتمہ)</h2>
                <div className="rules-clause">
                  <strong>دفعہ 18:</strong> دارالعلوم کے تحلیل ہونے کی صورت میں اس کے تمام اثاثے کسی دوسرے رجسٹرڈ دینی یا فلاحی ادارے کو منتقل کیے جائیں گے، اور کسی فرد میں تقسیم نہیں ہوں گے۔
                </div>
              </section>

              {/* باب دوازدہم */}
              <section className="rules-doc-section">
                <h2 className="rules-section-heading">باب دوازدہم: توثیق و منظوری</h2>
                <div className="rules-clause" style={{ background: '#fefce8', borderRightColor: '#ca8a04' }}>
                  یہ آئین <strong>دارالعلوم اسلامیہ مردان (للبنین والبنات)</strong> کی مجلسِ منتظمہ نے <strong>بروز منگل بتاریخ 15/04/2025</strong> متفقہ طور پر منظور کیا۔
                </div>
              </section>

              {/* توثیق و دستخط بلاک */}
              <footer className="rules-doc-footer-seal">
                <div className="rules-seal-row">
                  <div className="rules-seal-box rules-seal-meta">
                    <p><strong>تاریخِ نفاذ و توثیق:</strong> بروز منگل، 15 اپریل 2025ء (مطابق 1446-1447ھ)</p>
                    <p><strong>مقام و جائے صدور:</strong> دفتر اہتمام، گلشن حقانیہ، رنگ روڈ، مردان</p>
                    <div className="rules-verified-badge">
                      <FiCheckCircle size={15} />
                      <span>متفقہ منظور شدہ از مجلسِ منتظمہ دارالعلوم اسلامیہ مردان</span>
                    </div>
                  </div>

                  <div className="rules-seal-box rules-seal-sig">
                    <img
                      src="/muhtamim-signature.png"
                      alt="دستخط مہتمم مولانا محمد حقانی راشد"
                      className="rules-sig-img"
                    />
                    <div className="rules-sig-line"></div>
                    <div className="rules-sig-name">حضرت مولانا محمد حقانی راشد صاحب (مدظلہ)</div>
                    <div className="rules-sig-role">مہتمم و سرپرستِ اعلیٰ</div>
                    <div className="rules-sig-inst">دارالعلوم اسلامیہ مردان (للبنین وللبنات)</div>
                  </div>
                </div>
              </footer>

            </article>

          </div>
        </div>

        {/* Modal Bottom Close Bar (Screen only) */}
        <div className="rules-modal-bottom-bar no-print">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            بند کریں (Close)
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            <FiPrinter size={16} />
            <span>پرنٹ یا PDF محفوظ کریں</span>
          </button>
        </div>

      </div>
    </div>
  );
}
