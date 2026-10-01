import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Jamia Darul Uloom Islamia Mardan';
const SITE_NAME_UR = 'جامعہ دارالعلوم اسلامیہ مردان';
const BASE_URL = 'https://darululum-islamia-mardan.edu.pk';

/**
 * SEO Head component — sets per-page title, description, canonical, OG, and Twitter tags.
 *
 * @param {string} titleEn   - English page title (e.g. "Admissions")
 * @param {string} titleUr   - Urdu page title (e.g. "داخلہ")
 * @param {string} descEn    - English meta description
 * @param {string} descUr    - Urdu meta description
 * @param {string} path      - URL path (e.g. "/admission")
 */
export default function SEOHead({ titleEn, titleUr, descEn, descUr, path = '', noindex = false }) {
  const isHome = path === '/' || path === '';
  const fullTitle = isHome
    ? `${titleEn} - ${titleUr}`
    : `${titleEn} - ${titleUr} | ${SITE_NAME}`;
  const fullDesc = `${descEn} | ${descUr}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <html lang="ur-PK" dir="rtl" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / WhatsApp / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${BASE_URL}/logo.png`} />
      <meta property="og:locale" content="ur_PK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={`${BASE_URL}/logo.png`} />
    </Helmet>
  );
}
