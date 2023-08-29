import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const hanleClose = () => {
        setShowModal(false);
    };

    return(
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && <Modal onClose={hanleClose} />}
    </div>
    );
}

export default ModalPage;