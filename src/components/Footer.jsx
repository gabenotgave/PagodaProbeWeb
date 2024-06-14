import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer mt-5">
                <div className="container pt-3 pb-3 d-flex">
                    <section className="copyright-section">
                        {/* <Link className="navbar-brand" to="/">
                            <img width="200" src={logo} />
                        </Link> */}
                        <Link to="/"><span className="copyright">© 2024 Pagoda Probe</span></Link>
                    </section>
                    <section className="ms-auto">
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.facebook.com/profile.php?id=100093597782037"
                            target="_blank"
                            role="button">
                                <i className="fab fa-facebook-f"></i>
                        </a>
                        {/* <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            target="_blank"
                            role="button">
                                <i className="fab fa-twitter"></i>
                        </a> */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.linkedin.com/company/pagodaprobe/"
                            target="_blank"
                            role="button">
                                <i className="fab fa-linkedin"></i>
                        </a>
                    </section>
                </div>
                {/* <div className="text-center pb-4">
                    © 2020 Copyright:
                    <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div> */}
            </footer>
        </>
    )
};

export default Footer;