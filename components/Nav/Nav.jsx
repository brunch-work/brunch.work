import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Nav({ currentLanguage, locale }) {

  return (
    <div className="nav main-grid">
      <div className="margin"></div>
      <div className="main__body">
        <div className="nav__wrapper">
          <div className="nav__left">
            <a href="/" locale={locale}>
              <svg
                className="nav__logo"
                width="86"
                height="95"
                viewBox="0 0 86 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{currentLanguage.logoAria}</title>
                <path
                  d="M59.0196 15.8333C59.0196 24.5778 51.9418 31.6667 43.2108 31.6667C34.4798 31.6667 27.402 24.5778 27.402 15.8333C27.402 7.08883 34.4798 0 43.2108 0C51.9418 0 59.0196 7.08883 59.0196 15.8333Z"
                  fill="#EB3323"
                />
                <path
                  d="M31.6176 63.3333C31.6176 72.0779 24.5398 79.1667 15.8088 79.1667C7.07785 79.1667 0 72.0779 0 63.3333C0 54.5888 7.07785 47.5 15.8088 47.5C24.5398 47.5 31.6176 54.5888 31.6176 63.3333Z"
                  fill="#EB3323"
                />
                <path
                  d="M69.9804 47.5C69.9804 62.3074 57.9952 74.3111 43.2108 74.3111C28.4263 74.3111 16.4412 62.3074 16.4412 47.5C16.4412 32.6926 28.4263 20.6889 43.2108 20.6889C57.9952 20.6889 69.9804 32.6926 69.9804 47.5Z"
                  fill="#EB3323"
                />
                <path
                  d="M59.0196 79.1667C59.0196 87.9112 51.9418 95 43.2108 95C34.4798 95 27.402 87.9112 27.402 79.1667C27.402 70.4222 34.4798 63.3333 43.2108 63.3333C51.9418 63.3333 59.0196 70.4222 59.0196 79.1667Z"
                  fill="#EB3323"
                />
                <path
                  d="M86 63.3333C86 72.0779 78.9221 79.1667 70.1912 79.1667C61.4602 79.1667 54.3824 72.0779 54.3824 63.3333C54.3824 54.5888 61.4602 47.5 70.1912 47.5C78.9221 47.5 86 54.5888 86 63.3333Z"
                  fill="#EB3323"
                />
                <path
                  d="M31.6176 31.6667C31.6176 40.4112 24.5398 47.5 15.8088 47.5C7.07785 47.5 0 40.4112 0 31.6667C0 22.9222 7.07785 15.8333 15.8088 15.8333C24.5398 15.8333 31.6176 22.9222 31.6176 31.6667Z"
                  fill="#EB3323"
                />
                <path
                  d="M86 31.6667C86 40.4112 78.9221 47.5 70.1912 47.5C61.4602 47.5 54.3824 40.4112 54.3824 31.6667C54.3824 22.9222 61.4602 15.8333 70.1912 15.8333C78.9221 15.8333 86 22.9222 86 31.6667Z"
                  fill="#EB3323"
                />
              </svg>
            </a>
          </div>

          <div className="nav__right">
            <a href="#contact">
              <div className="nav__contact">
                {currentLanguage.contact}
              </div>
            </a>


            <LanguageSwitcher currentLanguage={currentLanguage} />
          </div>
        </div>
      </div>
      <div className="margin"></div>
    </div>
  );
}

export default Nav;
