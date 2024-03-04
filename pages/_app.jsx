import "../styles/main.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App({ Component, pageProps }) {

  return (
    <div className="app">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;