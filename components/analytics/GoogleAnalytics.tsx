import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics/gtag";

/**
 * Carga el script de Google Analytics (gtag.js). Se coloca UNA vez en el
 * layout raíz. Si no hay NEXT_PUBLIC_GA_ID configurado, no renderiza nada
 * (así el sitio no depende de tener Analytics para funcionar).
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
