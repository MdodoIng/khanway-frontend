import {t} from "i18next";

const MarketVideo = () => {
    return (
        <div className="container l-video">
            <div className="row" data-aos="fade-up">
                <div className="col-xl-12 video-title">
                    <h3>KhanHwang's EGGx</h3>
                    <h1 className="text-line-deco">World's first goodwill NFW </h1>
                </div>
                <div className="col-xl-12 video-con">
                    <iframe src="https://www.youtube.com/embed/RArtLpO1hWM?si=rsvhgFi21jZCmkh_"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                <div className="col-12 more-box">
                    <a href="" className="btn btn-grad btn-more">{t('market.video_landing_button')}</a>
                </div>
            </div>
        </div>
    )
}

export default MarketVideo;