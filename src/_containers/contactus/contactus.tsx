import useStylesheet from "@helper/useStylesheet.tsx";
import AOS from "aos";

const Contactus = () => {
    useStylesheet('/css/contactus.css');
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
    });
    return (
        <div className="container contact-us">
            <div className="row" data-aos="fade-up">
                <div className="col-xl-12 contact-title" data-aos="fade-up">
                    <h1 className="text-line-deco">Contact Us</h1>
                </div>
            </div>

            <div className="row contact-content" data-aos="fade-up">

                <div className="contact-box">
                    <img src="./images/india.svg" alt="" className="country-img"></img>

                    <div className="info">
                        <div className="contry">
                            <h2>Khanaires India</h2>
                        </div>

                        <div className="e-mail">
                            <i className="fa-regular fa-envelope-open mail-icon"></i>
                            <a className="" href="mailto:cio@khanaires.com">cio@khanaires.com</a>
                        </div>

                        <div className="call">
                            <i className="fa-solid fa-headset call-icon"></i>
                            <p className="call-numver">+91-73564-50175</p>
                        </div>
                        <div className="location">
                            <div className={"d-flex"}><i className="fa-solid fa-location-dot location-icon"></i> Location</div>
                            <p className="call-numver">Flat no 405,Botcha Squara,Passport Building,Birla Jn,Visakhapatnam, Visakhapatnam,Andhra Pradesh, India - 530007</p>
                        </div>
                    </div>

                </div>


                <div className="contact-box" data-aos="fade-up">
                    <img src="./images/korea.svg" alt="" className="country-img"></img>

                    <div className="info">
                        <div className="contry">
                            <h2>Khanaires Korea</h2>
                        </div>

                        <div className="e-mail">
                            <i className="fa-regular fa-envelope-open mail-icon"></i>
                            <a className="" href="mailto:cs@khanaires.com">cs@khanaires.com</a>
                        </div>

                        <div className="call">
                            <i className="fa-solid fa-headset call-icon"></i>
                            <p className="call-numver">+82 02 855 9285 </p>
                        </div>

                        <div className="location">
                            <div className={"d-flex"}><i className="fa-solid fa-location-dot location-icon"></i> Location</div>
                            <p className="call-numver">Teatown building 203, 25 Digital-ro 32ga-gil, Guro-gu, Seoul, Republic of Korea - 08392</p>
                        </div>
                    </div>
                </div>


                <div className="contact-box" data-aos="fade-up">
                    <img src="./images/united_arab_emirates.svg" alt="" className="country-img"></img>

                    <div className="info">
                        <div className="contry">
                            <h2>Khanaires Dubai</h2>
                        </div>

                        <div className="e-mail">
                            <i className="fa-regular fa-envelope-open mail-icon"></i>
                            <a className="" href="mailto:cs@khanaires.com">cio@khanaires.com</a>
                        </div>

                        <div className="call">
                            <i className="fa-solid fa-headset call-icon"></i>
                            <p className="call-numver">+82 10 3777 2820 </p>
                        </div>

                        <div className="location">
                            <div className={"d-flex"}><i className="fa-solid fa-location-dot location-icon"></i> Location</div>
                            <p className="call-numver">Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba,Dubai, U.A.E</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contactus
