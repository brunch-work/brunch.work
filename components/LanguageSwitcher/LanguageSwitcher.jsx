import Link from "next/link"

export default function LanguageSwitcher({currentLanguage}) {

    return (
        <a href={currentLanguage.href} locale={currentLanguage.locale} aria-label={currentLanguage.localeAria}>
            <p className="lang">
                {currentLanguage.localeCap}
            </p>
        </a>
    )
}