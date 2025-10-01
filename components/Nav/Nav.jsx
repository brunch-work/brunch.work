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
                width="2393"
                height="2639"
                viewBox="0 0 2393 2639"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{currentLanguage.logoAria}</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1610.86 603.333C1631.11 552.79 1642.25 497.613 1642.25 439.833C1642.25 196.92 1445.31 0 1202.37 0C959.421 0 762.476 196.92 762.476 439.833C762.476 526.009 787.262 606.396 830.094 674.256L829.226 674.759C755.531 535.06 608.832 439.833 439.89 439.833C196.945 439.833 0 636.753 0 879.667C0 1122.58 196.945 1319.5 439.89 1319.5C196.945 1319.5 0 1516.42 0 1759.33C0 2002.25 196.945 2199.17 439.89 2199.17C608.832 2199.17 755.531 2103.94 829.226 1964.24L830.094 1964.74C787.262 2032.6 762.476 2112.99 762.476 2199.17C762.476 2442.08 959.421 2639 1202.37 2639C1445.31 2639 1642.25 2442.08 1642.25 2199.17C1642.25 2141.39 1631.11 2086.21 1610.86 2035.67C1691.5 2135.4 1814.86 2199.17 1953.11 2199.17C2196.05 2199.17 2393 2002.25 2393 1759.33C2393 1516.42 2196.05 1319.5 1953.11 1319.5C2196.05 1319.5 2393 1122.58 2393 879.667C2393 636.753 2196.05 439.833 1953.11 439.833C1814.86 439.833 1691.5 503.605 1610.86 603.333ZM1947.25 1319.46C1949.2 1319.49 1951.15 1319.5 1953.11 1319.5C1951.15 1319.5 1949.2 1319.51 1947.25 1319.54V1319.5C1947.25 1319.49 1947.25 1319.47 1947.25 1319.46ZM439.89 1319.5C443.083 1319.5 446.27 1319.47 449.449 1319.4C452.133 1319.34 454.813 1319.26 457.485 1319.15V1319.85C451.649 1319.62 445.784 1319.5 439.89 1319.5Z"
                  fill="#EB3323"
                />
              </svg>
            </a>
          </div>

          <div className="nav__right">
            <a href="#contact">
              <div className="nav__contact inline-link">
                <span>{currentLanguage.contact}</span>
                <div className="inline-link__box">
                  <svg
                    className="arrow arrow--1"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M17.9922 0.00978898L18 14.7501H15.5253L15.5214 4.36785L1.88732 18L0 16.1107L13.6341 2.48053L3.22449 2.50402L3.19709 0L17.9922 0.00978898Z"
                      fill="#D7D2CB"
                    />
                  </svg>
                  <svg
                    className="arrow arrow--2"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M17.9922 0.00978898L18 14.7501H15.5253L15.5214 4.36785L1.88732 18L0 16.1107L13.6341 2.48053L3.22449 2.50402L3.19709 0L17.9922 0.00978898Z"
                      fill="#D7D2CB"
                    />
                  </svg>
                </div>
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
