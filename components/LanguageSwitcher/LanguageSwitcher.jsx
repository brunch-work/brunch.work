export default function LanguageSwitcher({ currentLanguage }) {
  return (
    <div className="language-switcher">
      <a
        href={currentLanguage.href}
        locale={currentLanguage.locale}
        aria-label={currentLanguage.localeAria}
      >
        {currentLanguage.localeCap}
      </a>
    </div>
  );
}
