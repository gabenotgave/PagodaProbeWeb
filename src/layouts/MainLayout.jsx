import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DisclaimerModal from "../components/DisclaimerModal";
import MainCallout from "../components/MainCallout";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisclaimerModal } from "../slices/modalSlice";

const MainLayout = () => {
    const showDisclaimerModal = useSelector((state) => state.modal.showDisclaimerModal);

    const dispatch = useDispatch();
    const handleToggleDisclaimerModal = () => {
        dispatch(toggleDisclaimerModal());
    };


    return (
        <>
            <Nav />
            <div className="container mt-4 content">
                <DisclaimerModal show={showDisclaimerModal} />
                <MainCallout onToggleDisclaimerModal={handleToggleDisclaimerModal} />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;