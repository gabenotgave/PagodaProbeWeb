import SearchPersonForm from "../components/SearchPersonForm";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        const title = "Find address and criminal records for anyone in Pennsylvania";

        document.title = "Pagoda Probe";
        document.querySelector('meta[property="og:title"]').setAttribute('content', title);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', title);
        document.querySelector('meta[name="description"').setAttribute('content', "");
    }, []);

    return (
        <>
            <Breadcrumb items = { [{ title: "Home" }] } />
            <h5 className="mb-3">Search Person</h5>
            <SearchPersonForm />
        </>
    )
}

export default HomePage;