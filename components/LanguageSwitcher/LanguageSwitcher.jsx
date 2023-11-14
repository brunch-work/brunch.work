import Link from "next/link"

export default function LanguageSwitcher({currentLanguage}) {

    return (
        <Link href="/" locale={currentLanguage.locale} aria-label={currentLanguage.localeAria}>
            <p className="lang">
                {currentLanguage.localeCap}
            </p>
        </Link>
    )
}