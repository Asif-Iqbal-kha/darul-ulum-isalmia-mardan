import React from 'react';
import UnderConstruction from '../components/UnderConstruction';

export default function DepartmentsPage() {
  return (
    <div className="departments-page">
      <UnderConstruction
        pageTitleUr="تعلیمی و تربیتی شعبہ جات — دارالعلوم اسلامیہ مردان"
        pageTitleEn="Academic Departments & Programs"
        descriptionUr="شعبہ حفظ و ناظرہ، شعبہ کتب (درس نظامی مکمل)، شعبہ تجوید و قراءت، اور دار الافتاء کے تفصیلی نصاب، اسباق کا شیڈول اور اساتذہ کی تفصیلات پر کام جاری ہے۔"
        expectedItems={[
          'شعبہ حفظ و ناظرہ قرآن کریم کا مکمل تعلیمی نظام',
          'شعبہ کتب (درجات عامہ تا دورۂ حدیث شریف)',
          'شعبہ تجوید و قراءت سبعہ و عشرہ',
          'شعبہ دار الافتاء، فتاویٰ آرکائیو اور جدید تحقیقات'
        ]}
      />
    </div>
  );
}
