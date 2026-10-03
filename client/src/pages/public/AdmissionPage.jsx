import { useState, useEffect, useRef } from 'react';
import { submitAdmission, getClasses } from '../../services/api';
import {
  FiCheckCircle,
  FiCopy,
  FiSend,
  FiUploadCloud,
  FiPrinter,
  FiPhone,
  FiMapPin,
  FiCamera,
  FiCheck,
  FiLoader,
} from 'react-icons/fi';
import './PublicPages.css';
import SEOHead from '../../components/common/SEOHead';
import { compressImage } from '../../utils/imageCompressor';

const DEFAULT_CLASSES = [
  'حفظ قرآن کریم',
  'ناظرہ قرآن کریم',
  'تجوید و قراءت',
  'کلاس چہارم (ابتدائی)',
  'کلاس پنجم',
  'درس نظامی (عامہ اول)',
  'درس نظامی (عامہ دوم)',
  'درس نظامی (خاصہ اول)',
  'درس نظامی (خاصہ دوم)',
  'درس نظامی (عالیہ اول)',
  'درس نظامی (عالیہ دوم)',
  'دورۃ الحدیث (عالمیہ)',
  'تخصص فی الفقہ والافتاء',
];

const ADMISSION_RULES_25 = [
  'کلاس چہارم میں طالب علم کی عمر (9) سال سے کم نہ ہو۔ داخلہ کے وقت طالب علم کے والد صاحب کے شناختی کارڈ کی فوٹو کاپی اور متعلقہ طالب علم کا فارم (ب) لانا لازمی ہے۔',
  'داخلہ کے لئے دارالعلوم کے منعقدہ امتحان میں کامیابی حاصل کرنا ضروری ہے جس میں ناظرہ، اردو، ریاضی اور انگریزی کا امتحان ہوگا۔',
  'امیدوار کا داخلہ ہونے کی صورت میں اس کے والد صاحب/سرپرست (جو کہ طالب علم کے تمام امور کا ذمہ دار ہے) کا دارالعلوم میں طالب علم کے ساتھ آنا لازمی ہے۔',
  'داخلہ ابتدائی تین ماہ کے لئے عارضی ہوگا، بعد ازاں طالب علم کی تعلیمی کارکردگی اور دیگر معاملات کے جائزہ لینے کے بعد مستقل داخلہ دیا جائے گا۔',
  'داخلہ فارم یا داخلہ کے دیگر مراحل میں امیدوار یا سرپرست کی طرف سے کسی غلط بیانی / بے قاعدگی ثابت ہونے پر طالب علم کا داخلہ منسوخ کر دیا جائے گا۔',
  'دارالعلوم کے ہر طالب علم کے لئے شریعت کی پابندی اور اپنی وضع قطع سنت کے مطابق رکھنا لازمی ہے۔ ہر قسم نشہ آور اشیاء رکھنا شرعاً، عرفاً اور اخلاقاً جرم ہے، اس سے اجتناب ضروری ہے بصورتِ دیگر دارالعلوم سے خارج کیا جائے گا۔',
  'سکول کے امتحان میں داخلہ لینے سے پہلے ناظم تعلیمات سے اجازت لینا لازمی ہے۔',
  'کسی قسم کی تنظیم سازی، جلسے جلوس کا انعقاد، کسی بھی تنظیم کے ساتھ عملی وابستگی یا دوسرے طلباء کو اس کی ترغیب دینا، اشتہارات، اسٹیکر، بیج اور کیلنڈر وغیرہ کا دارالعلوم کی دیواروں کھڑکیوں پر لگانا یا پاس رکھنا، سیاسی و فرقہ وارانہ بحث و مباحثہ اور ملک دشمن عناصر کے ساتھ روابط رکھنا ممنوع ہے۔',
  'تعلیمی سال کے دوران دارالعلوم کی طرف سے سیاسی اجتماعات/جلسے جلوسوں میں شرکت سخت ممنوع ہے، منتظمین دارالعلوم ایسے طلباء کے کسی عمل کی ذمہ دار نہ ہوگی۔',
  'تعلیمی سال کے دوران دارالعلوم سے اخراج کی صورت میں سرپرست / والد کو ممکنہ ذرائع سے مطلع کیا جائے گا۔',
  'داخلہ کے بعد مہتمم دارالعلوم کی تحریری اجازت کے بغیر تعلیمی سال کے دوران سالانہ امتحان سے پہلے دارالعلوم چھوڑنے کی اجازت نہیں ہوگی۔',
  'دارالعلوم کے قواعد و ضوابط کی خلاف ورزی طالب علم کے اخراج کا موجب بن سکتی ہے۔',
  'تجویز کردہ درجہ میں طالب علم کو داخلہ ملنے کے بعد سہ ماہی امتحان تک اگر متعلقہ اساتذہ کرام کی رائے میں اس درجہ میں چلنے کی استعداد کا حامل نہ سمجھا گیا تو ناظم تعلیمات کو طالب علم کو نچلے درجہ میں منتقل کرنے یا خارج کر دینے کا اختیار ہوگا۔',
  'ترقیِ درجہ کے لئے سالانہ امتحان پاس کرنا لازمی ہے۔ سالانہ امتحان دینے سے پہلے دارالعلوم چھوڑنے کی صورت میں اگلے درجہ میں داخلے کا مجاز نہ ہوگا۔',
  'وہ طلباء جو دارالعلوم میں رہائشی ہیں یا دوپہر کا کھانا دارالعلوم میں کھاتے ہیں، ان کا نگران کی اجازت کے بغیر باہر نکلنا منع ہے۔',
  'دارالعلوم کی حدود میں موبائل فون لانا، استعمال کرنا قطعاً ممنوع ہے۔ بصورتِ دیگر ضبط کیا جائے گا، نیز کیمرے والے فون ضبط ہونے کی صورت میں ناقابلِ واپسی ہوں گے۔ امتحانی ہال میں موبائل ضبط کیا جائے گا اور امتحان کالعدم تصور ہوگا۔',
  'دارالعلوم کی حدود میں چاقو، چھری، یا اسلحہ لانا قانوناً جرم ہے۔',
  'بے ریش طلباء کرام کے لئے سر کا بال مشین کرنا لازمی ہے۔',
  'چھ (6) دن مسلسل غیر حاضری کی صورت میں طالب علم کا اخراج کیا جائے گا۔ بیماری کی صورت میں ناظم تعلیمات سے تحریری اجازت لینا لازمی ہوگا۔',
  'ہر طالب علم پر لازم ہے کہ دارالعلوم کی وقف اشیاء (تپائیاں، دروازے، کھڑکیاں، قالین وغیرہ) کے ضائع اور خراب کرنے کی صورت میں متعلقہ طالب علم سے تاوان لیا جائے گا۔',
  'تا قیامِ دارالعلوم میری طرف سے مہتمم/ناظم دارالعلوم / یا جس کو وہ اجازت دیں، اس کا اختیار ہوگا کہ وہ زکوٰۃ، صدقات وصول کر کے طلباء کی ضروریات طعام، قیام، تعلیم وغیرہ میں حسبِ صوابدید خرچ کریں یا دارالعلوم پر وقف کریں۔',
  'رہائشی طلبہ کے لئے روزانہ مغرب کی اذان سے پہلے مدرسہ میں حاضری لازمی ہے۔ ایک مہینہ میں تین دن کی غیر حاضری کرنے کی وجہ سے سرپرست کو بلایا جائے گا۔',
  'رہائشی طلباء کے لئے جمعہ کے دن نمازِ عصر کے بعد حاضری ضروری ہے جس کی ذمہ داری ضامن پر عائد ہوگی۔',
  'تین ماہ پیشگی فیس جمع کرانا لازمی ہے۔',
  'منتظمین دارالعلوم کو اختیار حاصل ہے کہ طالب علم کی فیس طعام یا دیگر ضروریاتِ دارالعلوم میں خرچ کریں۔'
];

export default function AdmissionPage() {
  const [form, setForm] = useState({
    residenceType: 'رہائشی',
    studentName: '',
    fatherName: '',
    nationality: 'پاکستانی',
    dateOfBirth: '',
    cnic: '',
    fatherCnic: '',
    secularEducation: '',
    previousEducation: '',
    desiredClass: 'حفظ قرآن کریم',
    identificationMark: '',
    maritalStatus: 'مجرد',
    permanentAddress: '',
    currentAddress: '',
    guardianName: '',
    guardianFatherName: '',
    guardianRelation: 'والد',
    guardianPhone: '',
    guardianCnic: '',
    guardianPermanentAddress: '',
    guardianCurrentAddress: '',
    phone: '',
    mardanRelative: '',
    admissionFee: 1000,
    paymentMethod: 'JazzCash',
    transactionId: '',
  });

  const [classes, setClasses] = useState([]);
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);
  const [agreePledge, setAgreePledge] = useState(true);
  const [showPledgeDetails, setShowPledgeDetails] = useState(false);

  useEffect(() => {
    async function loadClasses() {
      try {
        const data = await getClasses();
        if (data && data.length > 0) {
          setClasses(data);
          setForm((prev) => {
            const classExists = data.some(
              (c) => c.name === prev.desiredClass || (prev.desiredClass === 'حفظ قرآن کریم' && c.name === 'حفظ')
            );
            return {
              ...prev,
              desiredClass: classExists
                ? (prev.desiredClass === 'حفظ قرآن کریم' && !data.some((c) => c.name === 'حفظ قرآن کریم') ? 'حفظ' : prev.desiredClass)
                : data[0].name,
            };
          });
        }
      } catch (err) {
        console.warn('Failed to load classes for admission form:', err);
      }
    }
    loadClasses();
  }, []);

  const [showSuccess, setShowSuccess] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const photoInputRef = useRef(null);
  const proofInputRef = useRef(null);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handlePhotoChange = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('برائے مہربانی صرف تصویر (JPG یا PNG) منتخب فرمائیں');
      return;
    }
    try {
      const { file: compressed, dataUrl } = await compressImage(file, { maxWidth: 600, maxHeight: 800, quality: 0.8 });
      setStudentPhoto(compressed);
      setPhotoPreview(dataUrl);
    } catch {
      setStudentPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProofChange = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, paymentProof: 'برائے مہربانی صرف تصویری فائل منتخب فرمائیں' }));
      return;
    }
    try {
      const { file: compressed, dataUrl } = await compressImage(file, { maxWidth: 1200, maxHeight: 1200, quality: 0.75 });
      setPaymentProof(compressed);
      setProofPreview(dataUrl);
      setErrors((prev) => ({ ...prev, paymentProof: '' }));
    } catch {
      setPaymentProof(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofPreview(reader.result);
        setErrors((prev) => ({ ...prev, paymentProof: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToField = (fieldId) => {
    setTimeout(() => {
      const el = document.getElementById(fieldId) || document.querySelector(`[name="${fieldId}"]`);
      if (!el) return;

      const headerEl = document.querySelector('.site-header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 120;
      const elRect = el.getBoundingClientRect();
      const absoluteElementTop = elRect.top + window.pageYOffset;
      const targetScrollY = Math.max(0, absoluteElementTop - headerHeight - 35);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth',
      });

      setTimeout(() => {
        try {
          if (typeof el.focus === 'function') {
            el.focus({ preventScroll: true });
          }
        } catch (e) {
          // ignore
        }
      }, 350);
    }, 50);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.studentName.trim()) newErrors.studentName = 'طالب علم کا نام درج فرمائیں';
    if (!form.fatherName.trim()) newErrors.fatherName = 'والد کا نام درج فرمائیں';
    if (!form.phone.trim()) newErrors.phone = 'رابطہ نمبر درج فرمائیں';
    if (!form.desiredClass) newErrors.desiredClass = 'مطلوبہ درجہ منتخب فرمائیں';
    if (!form.dateOfBirth) newErrors.dateOfBirth = 'تاریخ پیدائش درج فرمائیں';
    if (!paymentProof) newErrors.paymentProof = 'رقم منتقلی کی رسید یا اسکرین شاٹ منسلک کرنا لازمی ہے';
    if (!agreePledge) newErrors.agreePledge = 'جامعہ کے قواعد و ضوابط اور عہد نامہ کی توثیق لازمی ہے';
    setErrors(newErrors);

    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      const orderedFieldIds = [
        'desiredClass',
        'studentName',
        'fatherName',
        'dateOfBirth',
        'phone',
        'paymentProof',
        'agreePledge',
      ];
      const firstMissingId = orderedFieldIds.find((id) => newErrors[id]);
      if (firstMissingId) {
        scrollToField(firstMissingId);
      }
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = {
        ...form,
        address: form.currentAddress || form.permanentAddress || '',
        admissionFee: 1000,
        screenshotData: proofPreview || '',
        studentPhotoData: photoPreview || '',
      };
      const res = await submitAdmission(payload, paymentProof);
      if (res.success) {
        setTrackingNumber(res.trackingNumber);
        setShowSuccess(true);
      } else {
        alert(res.message || 'درخواست جمع کرنے میں خرابی ہوئی، براہ کرم دوبارہ کوشش فرمائیں۔');
      }
    } catch (err) {
      console.error('Admission submit error:', err);
      alert('درخواست جمع کرنے میں خرابی: ' + (err.message || 'سرور سے رابطہ چیک فرمائیں۔'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setForm({
      residenceType: 'رہائشی',
      studentName: '',
      fatherName: '',
      nationality: 'پاکستانی',
      dateOfBirth: '',
      cnic: '',
      fatherCnic: '',
      secularEducation: '',
      previousEducation: '',
      desiredClass: 'حفظ قرآن کریم',
      identificationMark: '',
      maritalStatus: 'مجرد',
      permanentAddress: '',
      currentAddress: '',
      guardianName: '',
      guardianFatherName: '',
      guardianRelation: 'والد',
      guardianPhone: '',
      guardianCnic: '',
      guardianPermanentAddress: '',
      guardianCurrentAddress: '',
      phone: '',
      mardanRelative: '',
      admissionFee: 1000,
      paymentMethod: 'JazzCash',
      transactionId: '',
    });
    setStudentPhoto(null);
    setPhotoPreview(null);
    setPaymentProof(null);
    setProofPreview(null);
    setShowSuccess(false);
    setTrackingNumber('');
    setErrors({});
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      <SEOHead
        titleEn="Online Admission Form"
        titleUr="آن لائن داخلہ فارم"
        descEn="Apply online for admission in Jamia Darul Uloom Islamia Mardan. Courses: Hifz-ul-Quran, Nazira, Dars-e-Nizami."
        descUr="جامعہ دارالعلوم اسلامیہ مردان میں آن لائن داخلہ فارم پر کریں۔ حفظ، ناظرہ، اور درس نظامی کے شعبہ جات۔"
        path="/admission"
      />
      {/* Page Header */}
      <div className="page-header no-print">
        <div className="container">
          <h1>داخلہ فارم</h1>
          <p>جامعہ دارالعلوم اسلامیہ مردان — تعلیمی سال 1447-1448ھ / 2026ء</p>
        </div>
      </div>

      <div className="content-page">
        <div className="container">
          <div className="madrassa-admission-container">
            {/* MAIN COLUMN: Scroll wrapper so only the form can scroll horizontally if desired without shifting header and footer */}
            <div className="admission-sheet-scroll-wrapper">
              <div className="official-admission-sheet">
              {/* Form Top Header */}
              <div className="sheet-top-header">
                {/* Photo Upload Box (Left) */}
                <div
                  className="sheet-photo-box"
                  onClick={() => photoInputRef.current && photoInputRef.current.click()}
                  title="طالب علم کی تازہ تصویر اپلوڈ کرنے کے لیے کلک کریں"
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="طالب علم کی تصویر" />
                  ) : (
                    <div className="sheet-photo-placeholder">
                      <FiCamera size={22} style={{ marginBottom: '4px', color: '#6b7280' }} />
                      <div>یہاں پر</div>
                      <div style={{ fontWeight: 700 }}>تازہ تصویر</div>
                      <div>لگائیں</div>
                    </div>
                  )}
                  <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoChange(e.target.files[0])}
                    style={{ display: 'none' }}
                  />
                </div>

                {/* Center Title & Madrassa Info */}
                <div className="sheet-header-center">
                  <h1 className="sheet-title-main">داخلہ فارم</h1>
                  <h2 className="sheet-madrassa-name">دارالعلوم اسلامیہ مردان (گلشن حقانیہ رنگ روڈ مردان)</h2>
                  <p style={{ margin: '2px 0 6px', fontSize: '0.78rem', color: '#374151', fontWeight: 600 }}>
                    رجسٹرڈ حکومتِ پاکستان: 59942/18649 (19/05/2025) | ملحق وفاق المدارس: 32373 (07/07/2026)
                  </p>
                  <div className="sheet-class-badge">
                    <span>برائے درجہ: </span>
                    <select
                      id="desiredClass"
                      name="desiredClass"
                      value={form.desiredClass}
                      onChange={(e) => handleChange('desiredClass', e.target.value)}
                      style={{
                        background: 'transparent',
                        color: '#fff',
                        border: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'inherit',
                        fontWeight: 700,
                        cursor: 'pointer',
                        outline: 'none',
                      }}
                    >
                      {classes.length > 0
                        ? classes.map((c) => (
                            <option key={c._id} value={c.name} style={{ color: '#000' }}>
                              {c.name}
                            </option>
                          ))
                        : DEFAULT_CLASSES.map((name) => (
                            <option key={name} value={name} style={{ color: '#000' }}>
                              {name}
                            </option>
                          ))}
                    </select>
                  </div>
                  <div className="sheet-section-title-badge">کوائف طالب علم</div>
                </div>

                {/* Madrassa Logo (Right) */}
                <div className="sheet-logo-box">
                  <img src="/logo.png" alt="لوگو دارالعلوم اسلامیہ مردان" />
                </div>
              </div>

              {/* FORM FIELDS */}
              <form onSubmit={handleSubmit}>
                {/* Residence Type 3-Box Selector (Exact as top of user physical form) */}
                <div className="sheet-residence-container">
                  <div className="sheet-residence-row">
                    {['رہائشی', 'غیر رہائشی', 'جزوقتی'].map((type) => (
                      <label
                        key={type}
                        className={`sheet-residence-card ${form.residenceType === type ? 'sheet-residence-card--active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="residenceType"
                          value={type}
                          checked={form.residenceType === type}
                          onChange={(e) => handleChange('residenceType', e.target.value)}
                        />
                        <span className="sheet-residence-indicator">
                          {form.residenceType === type ? '✓ ' : ''}
                        </span>
                        <span className="sheet-residence-name">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Row 1: Name & Father Name */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">نام: *</span>
                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      className={`sheet-input-dotted ${errors.studentName ? 'sheet-input-error' : ''}`}
                      placeholder="طالب علم کا نام"
                      value={form.studentName}
                      onChange={(e) => handleChange('studentName', e.target.value)}
                    />
                    {errors.studentName && (
                      <span className="form-error-text" style={{ color: '#dc2626', fontSize: '0.75rem', display: 'block', marginTop: '2px' }}>
                        {errors.studentName}
                      </span>
                    )}
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">ولدیت: *</span>
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      className={`sheet-input-dotted ${errors.fatherName ? 'sheet-input-error' : ''}`}
                      placeholder="والد محترم کا نام"
                      value={form.fatherName}
                      onChange={(e) => handleChange('fatherName', e.target.value)}
                    />
                    {errors.fatherName && (
                      <span className="form-error-text" style={{ color: '#dc2626', fontSize: '0.75rem', display: 'block', marginTop: '2px' }}>
                        {errors.fatherName}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Nationality & Date of Birth */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">شہریت:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="مثلاً پاکستانی"
                      value={form.nationality}
                      onChange={(e) => handleChange('nationality', e.target.value)}
                    />
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">تاریخ پیدائش: *</span>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      className={`sheet-input-dotted ${errors.dateOfBirth ? 'sheet-input-error' : ''}`}
                      value={form.dateOfBirth}
                      onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                      style={{ direction: 'ltr', textAlign: 'right' }}
                    />
                    {errors.dateOfBirth && (
                      <span className="form-error-text" style={{ color: '#dc2626', fontSize: '0.75rem', display: 'block', marginTop: '2px' }}>
                        {errors.dateOfBirth}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 3: Student CNIC/B-Form & Father CNIC */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">طالب علم کا شناختی کارڈ/فارم ب نمبر:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="12345-1234567-1"
                      value={form.cnic}
                      onChange={(e) => handleChange('cnic', e.target.value)}
                      style={{ direction: 'ltr', textAlign: 'right', fontFamily: 'var(--font-english)' }}
                      maxLength="15"
                    />
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">والد صاحب کا شناختی کارڈ نمبر:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="12345-1234567-1"
                      value={form.fatherCnic}
                      onChange={(e) => handleChange('fatherCnic', e.target.value)}
                      style={{ direction: 'ltr', textAlign: 'right', fontFamily: 'var(--font-english)' }}
                      maxLength="15"
                    />
                  </div>
                </div>

                {/* Row 4: Secular Education & Class */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">علوم عصریہ:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="پرائمری، مڈل، سکول کا نام وغیرہ"
                      value={form.secularEducation}
                      onChange={(e) => handleChange('secularEducation', e.target.value)}
                    />
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">الدرجہ: *</span>
                    <select
                      id="desiredClassField"
                      name="desiredClassField"
                      value={form.desiredClass}
                      onChange={(e) => handleChange('desiredClass', e.target.value)}
                      className="sheet-input-dotted"
                      style={{ padding: '4px', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      {classes.length > 0
                        ? classes.map((c) => (
                            <option key={c._id} value={c.name}>
                              {c.name}
                            </option>
                          ))
                        : DEFAULT_CLASSES.map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>

                {/* Row 5: Guardian Name & Relation */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">ضامن/سرپرست کا نام:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="سرپرست یا ضامن کا نام"
                      value={form.guardianName}
                      onChange={(e) => handleChange('guardianName', e.target.value)}
                    />
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">سرپرست سے رشتہ:</span>
                    <select
                      value={form.guardianRelation}
                      onChange={(e) => handleChange('guardianRelation', e.target.value)}
                      className="sheet-input-dotted"
                      style={{ padding: '4px', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      <option value="والد">والد</option>
                      <option value="چچا">چچا</option>
                      <option value="دادا">دادا</option>
                      <option value="بڑا بھائی">بڑا بھائی</option>
                      <option value="ماموں">ماموں</option>
                      <option value="دیگر">دیگر</option>
                    </select>
                  </div>
                </div>

                {/* Row 6: Phone Numbers */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">والد صاحب/بھائی صاحب کا نمبر: *</span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`sheet-input-dotted ${errors.phone ? 'sheet-input-error' : ''}`}
                      placeholder="03001234567"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      style={{ direction: 'ltr', textAlign: 'right', fontFamily: 'var(--font-english)' }}
                    />
                    {errors.phone && (
                      <span className="form-error-text" style={{ color: '#dc2626', fontSize: '0.75rem', display: 'block', marginTop: '2px' }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">سرپرست کا نمبر:</span>
                    <input
                      type="tel"
                      className="sheet-input-dotted"
                      placeholder="03001234567"
                      value={form.guardianPhone}
                      onChange={(e) => handleChange('guardianPhone', e.target.value)}
                      style={{ direction: 'ltr', textAlign: 'right', fontFamily: 'var(--font-english)' }}
                    />
                  </div>
                </div>

                {/* Row 7: Permanent & Current Address */}
                <div className="sheet-form-row">
                  <div className="sheet-field-half">
                    <span className="sheet-label">مستقل پتہ:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="گاؤں / محلہ، ڈاکخانہ، تحصیل و ضلع"
                      value={form.permanentAddress}
                      onChange={(e) => handleChange('permanentAddress', e.target.value)}
                    />
                  </div>
                  <div className="sheet-field-half">
                    <span className="sheet-label">موجودہ پتہ:</span>
                    <input
                      type="text"
                      className="sheet-input-dotted"
                      placeholder="موجودہ رہائش کا پتہ"
                      value={form.currentAddress}
                      onChange={(e) => handleChange('currentAddress', e.target.value)}
                    />
                  </div>
                </div>

                {/* Guardian Declaration (Page 1 of official physical paper) */}
                <div className="sheet-guardian-declaration-box">
                  <p className="declaration-text">
                    میں مسمی <strong>{form.guardianName || form.fatherName || '................................'}</strong> کامل یقین کے ساتھ شہادت اور اقرار کرتا ہوں کہ مسمی <strong>{form.studentName || '................................'}</strong> بن <strong>{form.fatherName || '................................'}</strong> کے داخلہ فارم میں اس کی تاریخ پیدائش سمیت جو دیگر کوائف درج کئے گئے ہیں وہ میرے علم کے مطابق درست ہیں اور کوئی غلط بیانی نہیں کی گئی۔
                  </p>
                  <div className="sheet-declaration-sigs">
                    <div className="declaration-sig-item">
                      <span>دستخط سرپرست:</span>
                      <div className="sig-underline"></div>
                    </div>
                    <div className="declaration-sig-item">
                      <span>دستخط طالب علم:</span>
                      <div className="sig-underline"></div>
                    </div>
                  </div>
                </div>

                {/* Office Use Section (Page 1 of official physical paper) */}
                <div className="sheet-office-use-card">
                  <div className="office-card-title">دفتری استعمال کے لئے</div>
                  <div className="office-card-grid">
                    <div className="office-grid-cell">
                      <strong>تاریخ داخلہ:</strong> <span>{currentDate}</span>
                    </div>
                    <div className="office-grid-cell">
                      <strong>رجسٹریشن نمبر:</strong> <span style={{ color: '#9ca3af' }}>(برائے دفتری ریکارڈ)</span>
                    </div>
                    <div className="office-grid-cell">
                      <strong>داخلہ نمبر:</strong> <span style={{ fontFamily: 'var(--font-english)' }}>ADM-2026-AUTO</span>
                    </div>
                    <div className="office-grid-cell">
                      <strong>مقدار فیس:</strong> <span>1,000 روپے</span>
                    </div>
                    <div className="office-grid-cell office-sig-cell">
                      <strong>دستخط ناظم تعلیمات:</strong>
                      <div className="sig-underline-short"></div>
                    </div>
                    <div className="office-grid-cell office-sig-cell">
                      <strong>دستخط مہتمم صاحب:</strong>
                      <div className="sig-underline-short"></div>
                    </div>
                  </div>
                </div>

                {/* SECTION: ADMISSION FEE & PAYMENT PROOF (MODEST & PROFESSIONAL) */}
                <div className="sheet-fee-box no-print">
                  <div className="sheet-section-pill" style={{ marginBottom: '10px' }}>داخلہ فیس و رقم منتقلی کی رسید</div>
                  <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.7' }}>
                    داخلہ فارم کی آن لائن پروسیسنگ کے لیے فیس مبلغ <strong>1,000 روپے</strong> مختص ہے۔ رقم اکاؤنٹ (JazzCash: 0302-2855766 / EasyPaisa: 0315-3044992 یا Faysal Bank) میں جمع کروا کر رسید کا عکس لازمی منسلک فرمائیں۔
                  </p>

                  <div className="sheet-form-row" style={{ marginBottom: '10px' }}>
                    <div className="sheet-field-half">
                      <span className="sheet-label">مقررہ فیس:</span>
                      <input
                        type="text"
                        className="sheet-input-dotted"
                        value="1,000 روپے"
                        readOnly
                        disabled
                        style={{ color: '#18225e', fontWeight: 700 }}
                      />
                    </div>
                    <div className="sheet-field-half" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                      <span className="sheet-label">ادائیگی کا ذریعہ: *</span>
                      <div className="payment-method-selector admission-payment-selector">
                        <label className={`payment-method-option ${form.paymentMethod === 'JazzCash' ? 'payment-method-option--active' : ''}`}>
                          <input
                            type="radio"
                            name="admissionMethod"
                            value="JazzCash"
                            checked={form.paymentMethod === 'JazzCash'}
                            onChange={(e) => handleChange('paymentMethod', e.target.value)}
                            style={{ display: 'none' }}
                          />
                          <img src="/logos/jazzcash.png" alt="JazzCash" className="payment-method-logo" onError={(e) => { e.target.style.display='none'; }} />
                          <span>JazzCash</span>
                        </label>
                        <label className={`payment-method-option ${form.paymentMethod === 'EasyPaisa' ? 'payment-method-option--active' : ''}`}>
                          <input
                            type="radio"
                            name="admissionMethod"
                            value="EasyPaisa"
                            checked={form.paymentMethod === 'EasyPaisa'}
                            onChange={(e) => handleChange('paymentMethod', e.target.value)}
                            style={{ display: 'none' }}
                          />
                          <img src="/logos/easypaisa.png" alt="EasyPaisa" className="payment-method-logo" onError={(e) => { e.target.style.display='none'; }} />
                          <span>EasyPaisa</span>
                        </label>
                        <label className={`payment-method-option ${form.paymentMethod === 'بینک ٹرانسفر' ? 'payment-method-option--active' : ''}`}>
                          <input
                            type="radio"
                            name="admissionMethod"
                            value="بینک ٹرانسفر"
                            checked={form.paymentMethod === 'بینک ٹرانسفر'}
                            onChange={(e) => handleChange('paymentMethod', e.target.value)}
                            style={{ display: 'none' }}
                          />
                          <img src="/logos/faysalbank.png" alt="Faysal Bank" className="payment-method-logo" onError={(e) => { e.target.style.display='none'; }} />
                          <span>بینک ٹرانسفر</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="sheet-form-row">
                    <div className="sheet-field-full">
                      <span className="sheet-label">ٹرانزیکشن ID / حوالہ نمبر (اگر ہو):</span>
                      <input
                        type="text"
                        className="sheet-input-dotted"
                        placeholder="اختیاری"
                        value={form.transactionId}
                        onChange={(e) => handleChange('transactionId', e.target.value)}
                        style={{ direction: 'ltr', textAlign: 'right', fontFamily: 'var(--font-english)' }}
                      />
                    </div>
                  </div>

                  {/* Payment Receipt Upload Box */}
                  <div style={{ marginTop: '12px' }}>
                    <span className="sheet-label" style={{ display: 'block', marginBottom: '6px' }}>
                      رقم منتقلی کا تصدیقی ثبوت (رسید یا اسکرین شاٹ) *
                    </span>
                    <div
                      id="paymentProof"
                      tabIndex={-1}
                      className={`file-upload-area ${errors.paymentProof ? 'file-upload-error' : ''} ${proofPreview ? 'file-upload-has-file' : ''}`}
                      onClick={() => proofInputRef.current && proofInputRef.current.click()}
                      style={{ padding: '16px', minHeight: '95px', outline: 'none' }}
                    >
                      {proofPreview ? (
                        <div className="file-upload-preview" style={{ textAlign: 'center' }}>
                          <img
                            src={proofPreview}
                            alt="رسید"
                            style={{ maxHeight: '130px', maxWidth: '100%', borderRadius: '4px', objectFit: 'contain' }}
                          />
                          <div style={{ marginTop: '6px' }}>
                            <button
                              type="button"
                              className="btn btn-outline btn-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPaymentProof(null);
                                setProofPreview(null);
                              }}
                              style={{ fontSize: '0.75rem', padding: '2px 8px' }}
                            >
                              رسید تبدیل کریں
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="file-upload-placeholder" style={{ padding: '6px 0' }}>
                          <FiUploadCloud size={28} style={{ color: '#6b7280', marginBottom: '4px' }} />
                          <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>
                            رسید کی تصویر منتخب کرنے کے لیے یہاں کلک کریں
                          </p>
                          <span style={{ fontSize: '0.72rem', color: '#9ca3af' }}>
                            (معاون فائل: JPG یا PNG)
                          </span>
                        </div>
                      )}
                      <input
                        ref={proofInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleProofChange(e.target.files[0])}
                        style={{ display: 'none' }}
                      />
                    </div>
                    {errors.paymentProof && (
                      <span className="form-error-text" style={{ marginTop: '4px' }}>
                        {errors.paymentProof}
                      </span>
                    )}
                  </div>
                </div>

                {/* SECTION: OFFICIAL RULES & CODE OF CONDUCT (All 25 Rules + Final Binding Pledge) */}
                <div className="sheet-rules-section">
                  <div className="sheet-rules-header">
                    <h3 className="sheet-rules-heading">
                      شرائط و ضوابط داخلہ (دارالعلوم اسلامیہ مردان گلشن حقانیہ رنگ روڈ مردان)
                    </h3>
                  </div>

                  <ol className="sheet-rules-25-list">
                    {ADMISSION_RULES_25.map((rule, idx) => (
                      <li key={idx} className="rule-25-item">
                        <span className="rule-idx">({idx + 1})</span>
                        <span className="rule-text">{rule}</span>
                      </li>
                    ))}
                  </ol>

                  {/* Final Pledge on Rules Sheet */}
                  <div className="sheet-final-pledge-card">
                    <p className="pledge-strong-title">
                      میں نے دارالعلوم کی ساری ہدایات / شرائط و ضوابط غور سے پڑھ لی ہیں اور میں ان کی پوری پابندی کا عہد کرتا ہوں۔
                    </p>
                    <p className="pledge-binding-line">
                      میں مسمی <strong>{form.studentName || '................................'}</strong> بن <strong>{form.fatherName || '................................'}</strong> پورا سال مذکورہ شرائط کا پابند رہوں گا۔
                    </p>
                    <div className="sheet-pledge-dual-sigs">
                      <div className="pledge-sig-col">
                        <span>دستخط طالب علم:</span>
                        <div className="sig-underline"></div>
                      </div>
                      <div className="pledge-sig-col">
                        <span>دستخط سرپرست:</span>
                        <div className="sig-underline"></div>
                      </div>
                    </div>

                    <label className="pledge-checkbox-label">
                      <input
                        id="agreePledge"
                        name="agreePledge"
                        type="checkbox"
                        checked={agreePledge}
                        onChange={(e) => setAgreePledge(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#18225e' }}
                      />
                      <span>
                        میں صدقِ دل سے دارالعلوم اسلامیہ مردان کے تمام ۲۵ شرائط و ضوابط کو پڑھ کر ان پر کاربند رہنے کا عہد کرتا ہوں۔
                      </span>
                    </label>
                    {errors.agreePledge && (
                      <span className="form-error-text" style={{ marginTop: '4px', display: 'block' }}>
                        {errors.agreePledge}
                      </span>
                    )}
                  </div>
                </div>

                {/* SUBMIT BUTTON & PRINT BAR */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }} className="no-print">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{
                      flex: 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      opacity: submitting ? 0.85 : 1,
                      pointerEvents: submitting ? 'none' : 'auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <FiLoader
                          size={18}
                          style={{ animation: 'spinLoader 0.9s linear infinite', flexShrink: 0 }}
                        />
                        <span>درخواست جمع کی جا رہی ہے... (Processing...)</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        <span>درخواستِ داخلہ جمع فرمائیں</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-lg"
                    onClick={handlePrint}
                    title="فارم پرنٹ کریں"
                  >
                    <FiPrinter size={16} /> پرنٹ فارم
                  </button>
                </div>
              </form>
            </div>
            </div>

            {/* SIDEBAR: Concise guidelines & accounts info */}
            <div className="admission-sidebar no-print">
              {/* Rules Card */}
              <div className="admission-sidebar-card">
                <h3 className="admission-sidebar-title">شرائط و ہدایاتِ داخلہ</h3>
                <ul className="admission-rules-list">
                  <li>طالب علم کا مسلمان اور صحیح العقیدہ ہونا لازمی ہے۔</li>
                  <li>شعبہ ناظرہ کے لیے کم از کم عمر 5 سال ہونی چاہیے۔</li>
                  <li>شعبہ حفظ کے لیے ناظرہ قرآن مع تجوید مکمل ہونا ضروری ہے۔</li>
                  <li>داخلہ فارم کے ہمراہ فیس 1,000 روپے کی رسید منسلک فرمائیں۔</li>
                  <li>ٹیسٹ و انٹرویو کے وقت 2 عدد تازہ تصاویر اور شناختی کارڈ کی کاپی ہمراہ لائیں۔</li>
                </ul>
              </div>

              {/* Payment Accounts Card */}
              <div className="admission-sidebar-card">
                <h3 className="admission-sidebar-title">فیس ادائیگی کے اکاؤنٹس</h3>
                <p style={{ fontSize: '0.82rem', color: '#6b7280', margin: '0 0 10px', lineHeight: '1.6' }}>
                  داخلہ فیس (1,000 روپے) مندرجہ ذیل اکاؤنٹ میں منتقل فرما سکتے ہیں:
                </p>

                <div className="admission-account-row">
                  <div>
                    <strong>JazzCash:</strong>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Hazrat Umar</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-english)', fontWeight: 600, direction: 'ltr' }}>0302-2855766</span>
                </div>

                <div className="admission-account-row">
                  <div>
                    <strong>EasyPaisa:</strong>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Hazrat Umar</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-english)', fontWeight: 600, direction: 'ltr' }}>0315-3044992</span>
                </div>

                <div className="admission-account-row">
                  <div>
                    <strong>Faysal Bank (فیصل بینک):</strong>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Hazrat Umar</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-english)', fontSize: '0.76rem', fontWeight: 600, direction: 'ltr' }}>PK66FAYS3125301000005358</span>
                </div>
              </div>

              {/* Admission Schedule */}
              <div className="admission-sidebar-card">
                <h3 className="admission-sidebar-title">داخلہ شیڈول</h3>
                <div style={{ fontSize: '0.84rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                    <span style={{ color: '#6b7280' }}>فارم کی وصولی:</span>
                    <span>یکم شوال تا 15 شوال</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                    <span style={{ color: '#6b7280' }}>ٹیسٹ و انٹرویو:</span>
                    <span>20 شوال</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #eee' }}>
                    <span style={{ color: '#6b7280' }}>نتائج کا اعلان:</span>
                    <span>25 شوال</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                    <span style={{ color: '#6b7280' }}>تعلیمی آغاز:</span>
                    <span>یکم ذوالقعدہ</span>
                  </div>
                </div>
              </div>

              {/* Office Contact */}
              <div className="admission-sidebar-card">
                <h3 className="admission-sidebar-title">دفتری رہنمائی و رابطہ</h3>
                <div style={{ fontSize: '0.84rem', color: '#4b5563', lineHeight: '1.8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <FiPhone size={14} style={{ color: '#143223' }} />
                    <a href="tel:03153044992" style={{ fontFamily: 'var(--font-english)', direction: 'ltr', color: 'inherit' }}>
                      0315 3044992
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <FiMapPin size={14} style={{ color: '#143223', flexShrink: 0, marginTop: '4px' }} />
                    <span>مردان، خیبرپختونخوا، پاکستان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      {showSuccess && (
        <div className="modal-overlay" onClick={resetForm}>
          <div className="tracking-success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tracking-success-icon" style={{ color: 'var(--color-success)' }}>
              <FiCheckCircle size={52} />
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.3rem' }}>درخواستِ داخلہ موصول ہو گئی</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
              طالب علم <strong>{form.studentName}</strong> کی درخواست اور فیس رسید کا ریکارڈ محفوظ کر لیا گیا ہے۔
            </p>

            <div className="tracking-number-display" style={{ margin: '16px 0' }}>
              <span className="tracking-label">درخواست کا ٹریکنگ نمبر</span>
              <div className="tracking-number-box">
                <span className="tracking-number-value">{trackingNumber}</span>
                <button type="button" className="tracking-copy-btn" onClick={handleCopy}>
                  <FiCopy size={15} />
                  {copied ? 'کاپی ہو گیا' : 'کاپی'}
                </button>
              </div>
            </div>

            <div className="tracking-note" style={{ fontSize: '0.82rem', lineHeight: '1.7' }}>
              <strong>اہم نوٹ:</strong> اس ٹریکنگ نمبر کو محفوظ فرمائیں۔ ویب سائٹ کے "ٹریکنگ" صفحے پر جا کر آپ کسی بھی وقت اپنی درخواست کی صورتحال معلوم کر سکتے ہیں۔
            </div>

            <button className="btn btn-primary" onClick={resetForm} style={{ width: '100%', marginTop: '16px' }}>
              مکمل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
