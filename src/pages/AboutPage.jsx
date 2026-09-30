import React from 'react';
import UnderConstruction from '../components/UnderConstruction';

export default function AboutPage() {
  return (
    <div className="about-page">
      <UnderConstruction
        pageTitleUr="تعارف و تاریخ — دارالعلوم اسلامیہ مردان"
        pageTitleEn="About & History - Darul Uloom Islamia Mardan"
        descriptionUr="جامعہ دارالعلوم اسلامیہ مردان کے قیام، اغراض و مقاصد، اکابرین و اساتذہ کرام کی فہرست اور نصاب کی مکمل تاریخ پر مبنی تفصیلی دستاویزات اس صفحہ پر جلد اپلوڈ کی جائیں گی۔"
        expectedItems={[
          'جامعہ دارالعلوم اسلامیہ مردان کا تاریخی پس منظر و قیام',
          'اغراض و مقاصد اور تعلیمی و تربیتی وژن',
          'مجلس شوریٰ و جید اساتذہ کرام کا تعارف',
          'وفاق المدارس سے الحاق اور سالانہ کارکردگی رپورٹس'
        ]}
      />
    </div>
  );
}
