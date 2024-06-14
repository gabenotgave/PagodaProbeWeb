import Breadcrumb from "../components/Breadcrumb";
import WhoWeServe from "../assets/images/WhoWeServe.png"
import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        const title = "About Us - Pagoda Probe";
        document.title = title;
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
        document.querySelector('meta[name="description"').setAttribute('content', "Find address and criminal records for anyone in Pennsylvania");
    }, []);

    return (
        <>
            <Breadcrumb items = { [{ title: "Home", link: "/" }, { title : "About" }] } />
            <h5 className="mb-3">About Us</h5>
            <p>
                The goal of Pagoda Probe is to provide a service that one can use to vet a
                legal resident of Pennsylvania. The software's intended audience
                is companies seeking to perform a background check on a potential hiree.
            </p>
            <p>
                Though, as our general terms of use states, Pagoda Probe cannot guarantee the
                accuracy of data contained within or displayed by this software. The project,
                its creators, or maintainers can also not be held liable for any incorrect
                or unethical application of data contained within or displayed by this
                software.
            </p>
            <p>
                Pagoda Probe aims to expand its services across the entirety of Pennsylvania,
                offering both parcel search and docket search capabilities for all counties. You
                can view our progress below:
            </p>
            <img className="img-fluid" src={WhoWeServe} />
            {/* <p>Eventually, Pagoda Probe hopes to amass more data about individuals—such as facial images, job status and history, phone numbers, and emails—and to eventually expand our services to other Pennsylvania counties, making this software a little more universal.</p> */}
        </>
    )
}

export default AboutPage;