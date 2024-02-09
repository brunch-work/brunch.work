
export default function LanguageSwitcher({currentLanguage}) {

    return (
        <div className="language-switcher">
            <a href={currentLanguage.href} locale={currentLanguage.locale} aria-label={currentLanguage.localeAria}>
                <p className="lang">
                    {currentLanguage.localeCap}
                </p>
            </a>
        </div>
    )
}