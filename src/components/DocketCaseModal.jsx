import DocketCase from "../components/DocketCase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DocketCaseModal = ({docketCaseNumber, docketCaseCaption, show, setShow}) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} className="modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title><h5 className="mb-0">{docketCaseCaption} ({docketCaseNumber})</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DocketCase docketCaseNumber={docketCaseNumber} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default DocketCaseModal;