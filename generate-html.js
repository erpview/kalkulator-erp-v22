import fs from 'fs';
import path from 'path';

const publisher = {
  '@type': 'Organization',
  'name': 'Kalkulator ERP by ERP-VIEW.PL',
  'url': 'https://kalkulator-erp.com'
};

const routes = [
  {
    path: '',
    title: 'Kalkulator kosztów wdrożenia systemu ERP | Kalkulator ERP',
    description: 'Oblicz koszty wdrożenia systemu ERP dla Twojej firmy. Porównaj oferty wiodących dostawców, poznaj ceny modułów i otrzymaj spersonalizowaną wycenę w 24h.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Kalkulator kosztów wdrożenia systemu ERP',
      'applicationCategory': 'BusinessApplication',
      'description': 'Kalkulator kosztów wdrożenia systemu ERP dla firm. Porównaj oferty, poznaj ceny modułów i otrzymaj spersonalizowaną wycenę.',
      'url': 'https://kalkulator-erp.com',
      'operatingSystem': 'All',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'PLN'
      },
      'publisher': publisher
    }
  },
  {
    path: 'wdrozenie-erp',
    title: 'Wdrożenie systemu ERP - Etapy, korzyści i najlepsze praktyki | Kalkulator ERP',
    description: 'Poznaj kompleksowy przewodnik po wdrożeniu systemu ERP. Dowiedz się o etapach wdrożenia, korzyściach z systemów ERP oraz najlepszych praktykach implementacji.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Wdrożenie systemu ERP - Kompleksowy przewodnik po procesie implementacji',
      'description': 'Poznaj kompleksowy przewodnik po wdrożeniu systemu ERP. Dowiedz się o etapach implementacji, korzyściach i najlepszych praktykach.',
      'url': 'https://kalkulator-erp.com/wdrozenie-erp',
      'datePublished': new Date().toISOString(),
      'dateModified': new Date().toISOString(),
      'publisher': publisher
    }
  },
  {
    path: 'koszt-wdrozenia-erp',
    title: 'Ile kosztuje wdrożenie ERP? Kompleksowy przewodnik po kosztach wdrożenia ERP | Kalkulator ERP',
    description: 'Sprawdź, ile kosztuje wdrożenie systemu ERP. Poznaj wszystkie składniki kosztów, porównaj modele wdrożenia i dowiedz się, jak zaplanować budżet na system ERP.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Ile kosztuje wdrożenie systemu ERP? Kompleksowy przewodnik po kosztach',
      'description': 'Sprawdź, ile kosztuje wdrożenie systemu ERP. Poznaj wszystkie składniki kosztów i dowiedz się, jak zaplanować budżet.',
      'url': 'https://kalkulator-erp.com/koszt-wdrozenia-erp',
      'datePublished': new Date().toISOString(),
      'dateModified': new Date().toISOString(),
      'publisher': publisher
    }
  },
  {
    path: 'systemy-erp',
    title: 'Systemy ERP w Polsce - Dostawcy ERP | Kalkulator ERP',
    description: 'Poznaj najpopularniejsze systemy ERP dostępne w Polsce. Porównaj funkcjonalności, sprawdź opinie i wybierz najlepsze rozwiązanie dla swojej firmy.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'headline': 'Systemy ERP w Polsce - Przegląd i porównanie dostępnych rozwiązań',
      'description': 'Poznaj najpopularniejsze systemy ERP dostępne w Polsce. Porównaj funkcjonalności i wybierz najlepsze rozwiązanie dla swojej firmy.',
      'url': 'https://kalkulator-erp.com/systemy-erp',
      'datePublished': new Date().toISOString(),
      'dateModified': new Date().toISOString(),
      'publisher': publisher
    }
  }
];

const template = (route) => `<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${route.title}</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="${route.title}" />
    <meta name="description" content="${route.description}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://kalkulator-erp.com/${route.path}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="https://erp-view.pl/images/artykuly/zdjecia/kalkulator-erp-share.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://kalkulator-erp.com/${route.path}" />
    <meta property="twitter:title" content="${route.title}" />
    <meta property="twitter:description" content="${route.description}" />
    <meta property="twitter:image" content="https://erp-view.pl/images/artykuly/zdjecia/kalkulator-erp-share.jpg" />
    
    <!-- Canonical -->
    <link rel="canonical" href="https://kalkulator-erp.com/${route.path}" />
    
    <!-- Icons -->
    <link rel="icon" href="https://erp-view.pl/images/artykuly/zdjecia/favicon.png" />
    <link rel="shortcut icon" href="https://erp-view.pl/images/artykuly/zdjecia/favicon.png" />
    <link rel="apple-touch-icon" href="https://www.erp-view.pl/images/artykuly/zdjecia/icon-192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.erp-view.pl/images/artykuly/zdjecia/icon-192.png" />
    <link rel="icon" sizes="192x192" href="https://www.erp-view.pl/images/artykuly/zdjecia/icon-192.png" />
    <link rel="icon" sizes="512x512" href="https://www.erp-view.pl/images/artykuly/zdjecia/icon-512.png" />
    
    <!-- PWA -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Kalkulator ERP" />
    <link rel="manifest" href="/manifest.webmanifest" />

    <!-- Structured Data -->
    <script type="application/ld+json">
      ${JSON.stringify(route.schema, null, 2)}
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Create route directories and HTML files
routes.forEach((route) => {
  const dirPath = route.path;
  if (dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  const htmlContent = template(route);
  const filePath = dirPath ? `${dirPath}/index.html` : 'index.html';
  fs.writeFileSync(filePath, htmlContent);
});

console.log('Generated HTML files for all routes with enhanced SEO');