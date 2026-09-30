import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import UnderConstruction from '../components/UnderConstruction';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Top Banner Notice */}
      <UnderConstruction
        pageTitleUr="رابطہ و معلومات — دارالعلوم اسلامیہ مردان"
        pageTitleEn="Contact Us & Location"
        descriptionUr="آن لائن میپ انٹیگریشن اور خودکار انکوائری پورٹل پر کام جاری ہے۔ فی الحال آپ درج ذیل ذرائع سے انتظامیہ سے براہ راست رابطہ فرما سکتے ہیں۔"
        expectedItems={[
          'گوگل میپس پر جامعہ کی درست لوکیشن',
          'براہ راست شعبہ جاتی فون ایکسٹینشنز',
          'شکایات و تجاویز کا خودکار پورٹل',
          'رہنما برائے زائرین و مہمانانِ گرامی'
        ]}
      />

      {/* Direct Contact Cards Section */}
      <section className="contact-details-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Card */}
            <div className="contact-info-card">
              <h2 className="info-card-title">براہِ راست رابطہ کی معلومات</h2>
              <p className="info-card-desc">
                جامعہ دارالعلوم اسلامیہ مردان میں داخلہ، مالی تعاون یا کسی بھی شرعی رہنمائی کے لیے ہمارے دفتری اوقات میں رابطہ کریں۔
              </p>

              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong>پتہ و جائے وقوع:</strong>
                    <p>مردان، خیبر پختونخوا، پاکستان</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong>فون / ہیلپ لائن:</strong>
                    <p dir="ltr">+92 300 1234567 / +92 937 123456</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <strong>ای میل ایڈریس:</strong>
                    <p dir="ltr">info@darululoomislamia.edu.pk</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <strong>دفتری اوقات:</strong>
                    <p>صبح 08:00 بجے تا بعد نمازِ عصر (04:30 بجے)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="contact-form-card">
              <h2 className="info-card-title">فوری پیغام بھیجیں</h2>
              <p className="info-card-desc">
                اپنا سوال یا پیغام درج کریں، جامعہ کی انتظامیہ جلد آپ سے رابطہ کرے گی۔
              </p>

              {submitted ? (
                <div className="submission-success">
                  <CheckCircle2 size={42} className="success-icon" />
                  <h3>آپ کا پیغام موصول ہو گیا ہے!</h3>
                  <p>جامعہ کا متعلقہ عملہ جلد آپ سے رابطہ فرمائے گا۔ شکریہ۔</p>
                  <button 
                    type="button" 
                    className="btn btn-sky"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: '', message: '' });
                    }}
                  >
                    نیا پیغام بھیجیں
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label>آپ کا نامِ گرامی *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="مثلاً: محمد احمد"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>فون / واٹس ایپ نمبر *</label>
                    <input 
                      type="tel" 
                      required 
                      dir="ltr"
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>موضوع</label>
                    <input 
                      type="text" 
                      placeholder="مثلاً: داخلہ کی معلومات / فتویٰ / عمومی سوال"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>پیغام / تفصیل</label>
                    <textarea 
                      rows="4" 
                      placeholder="اپنا پیغام یہاں تحریر فرمائیں..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    <Send size={18} />
                    <span>پیغام ارسال کریں</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
