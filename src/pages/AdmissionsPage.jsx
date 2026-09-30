import React from 'react';
import UnderConstruction from '../components/UnderConstruction';

export default function AdmissionsPage() {
  return (
    <div className="admissions-page">
      <UnderConstruction
        pageTitleUr="آن لائن داخلہ و قواعد — دارالعلوم اسلامیہ مردان"
        pageTitleEn="Online Admission & Guidelines"
        descriptionUr="نئے تعلیمی سال کے داخلہ فارم، شرائطِ داخلہ، ٹیسٹ اور انٹرویو کا شیڈول، اور مطلوبہ دستاویزات کا پورٹل ترتیب دیا جا رہا ہے۔"
        expectedItems={[
          'آن لائن داخلہ فارم برائے حفظ و درس نظامی',
          'داخلہ کی شرائط، عمر کی حد اور مطلوبہ کاغذات',
          'داخلہ ٹیسٹ و انٹرویو کی تاریخیں',
          'مفت رہائش، کتب اور وظائف کی درخواست کا طریقہ کار'
        ]}
      />
    </div>
  );
}
