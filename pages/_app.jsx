import "../styles/main.scss";
import { useRouter } from "next/router";
import text from "../translations/text";

import Seo from "../components/Seo";

function App({ Component, pageProps }) {

  const router = useRouter();
  const { locale } = router;
  const currentLanguage = text[locale];


  return (
    <div className="app">
      <Seo currentLanguage={currentLanguage.seo} />
      <Component
        {...pageProps}
        currentLanguage={currentLanguage}
        locale={locale}
        router={router}
      />
    </div>
  );
}

export default App;