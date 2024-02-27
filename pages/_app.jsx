import "../styles/main.scss";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {

  return (
    <div className="app">
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default App;