export default function TextSlide({currentLanguage}) {

    return (
        <div className="text-slide">
            <div className="text-slide__wrapper">
                <p>
                    {currentLanguage.hero_1}
                    <span>{currentLanguage.hero_2}</span>
                    {currentLanguage.hero_3}
                    <span>{currentLanguage.hero_4}</span>
                    {currentLanguage.hero_5}
                    <span>{currentLanguage.hero_6}</span>
                </p>
            </div>
        </div>
    )
}