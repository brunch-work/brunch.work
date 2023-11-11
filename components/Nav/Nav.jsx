import Image from "next/image";
import styles from "./Nav.module.scss"

function Nav({locale}) {

    return (
        <div className={styles.nav + ' main-grid'}>
            <div className="margin"></div>
            <div className="main__body">

                <div className={styles.nav__wrapper}>
                    <div className="nav__left">
                        <Image
                            src="/images/svg/brunch-logo-black.svg"
                            width={100}
                            height={24}
                            alt="Studio Brunch Inc. logo"
                        />
                    </div>

                    <div className={styles.nav__right}>
                        <div className="contact">
                            <a href="#footer">Contact us</a>
                        </div>
                        <div className="locale">
                            <a href="/fr">FR</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="margin"></div>
        </div>
    )
}

export default Nav;