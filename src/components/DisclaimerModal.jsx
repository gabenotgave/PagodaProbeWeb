import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo2 from "../assets/images/logo2.png"
import { useDispatch } from "react-redux";
import { toggleDisclaimerModal } from "../slices/modalSlice";

const DisclaimerModal = ({show}) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleDisclaimerModal());
    };
    
    return (
        <>
            <Modal show={show} enforceFocus={true} keyboard={false} onHide={() => {}} className="modal-md">
                <Modal.Header style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}>
                    <Modal.Title>
                        <img width="200" src={logo2} />
                        {/* <h5 className="mb-0">General Terms of Use</h5> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>All records and data contained within and displayed by the Pagoda Probe project (the "Project") are already publicly accessible through state and county records. The Project's purpose is to facilitate Pennsylvania property record and docket quieries by coupling both functions into one application. Only simplistic algorithms are employed to guage the confidence with which one record can be associated with a target individual, and no potentially bias data points are factored into said algorithms. The Project cannot in any way guarantee the accuracy of any records or data contained within or displayed by the software. The Project, its creators, or maintainers can also not be held liable for any incorrect or unethical application of records or data found using this software.</p>
                    <p>By clicking "I agree" below, you are indicating your accordance with the aforementioned general terms of use and thus releasing the Project and its creators of any liability for producing inaccurate records or data.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="btn-primary" onClick={handleClose}>
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DisclaimerModal;