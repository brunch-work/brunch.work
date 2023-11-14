import { useRouter } from "next/router";
import text from "../translations/text"

import TextSlide from "../components/TextSlide/TextSlide";

export default function Home() {

   const { locale } = useRouter();

   const currentLanguage = text[locale];

  return (
    <div className="home">
      <TextSlide currentLanguage={currentLanguage}/>
    </div>
  );
}
