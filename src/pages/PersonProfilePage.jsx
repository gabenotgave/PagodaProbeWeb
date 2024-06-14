import Breadcrumb from "../components/Breadcrumb";
import PersonProfile from "../components/PersonProfile";

const PersonProfilePage = () => {
    return (
        <>
            <Breadcrumb items = { [{ title: "Home", link: "/" }, { title: "Person Profile" }] } />
            <PersonProfile />
        </>
    );
}

export default PersonProfilePage;