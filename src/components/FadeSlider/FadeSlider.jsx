import style from './FadeSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://img.goodfon.com/wallpaper/nbig/b/4a/lexus-rx-200t-krossover-chiornyi.webp' />
                            </div>
                            <div className={style.item}>
                                <img src='https://top-tuning.ru/upload/images/news/101288/Suzuka-Grey-Metallic-Audi-R8-V10-Plus-4.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://images.drive.ru/i/0/5742a4dcec05c4f44b0008ac.jpeg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://a.d-cd.net/edf84f9s-1920.jpg' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}
