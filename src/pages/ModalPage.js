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

    const actionBar = <div>
        <Button onClick={hanleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={hanleClose} actionBar={actionBar}>
        <p>Here is important agreement for you to accept</p>
        </Modal>

    return(
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal &&  modal}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur dictum metus, vitae dapibus mauris aliquam et. Integer sit amet sollicitudin libero. Nulla dictum lacinia elit, facilisis pretium enim consequat sed. Suspendisse potenti. Vestibulum vel arcu vel massa pulvinar vulputate. Vivamus eu quam eget est molestie finibus. Maecenas vitae ex eu elit varius faucibus. Cras congue, sapien ac imperdiet imperdiet, purus mauris tincidunt ipsum, in eleifend libero neque vitae sem.

            Nam laoreet velit eget sapien efficitur tincidunt. Aenean a eros non leo auctor sodales sed id elit. Proin porttitor, arcu nec hendrerit varius, urna dolor vulputate odio, id efficitur risus dolor quis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin egestas lacus augue, id pharetra urna fringilla in. Sed sit amet ante lacus. Vestibulum sit amet mauris quis mi cursus cursus.

            Sed pellentesque efficitur ipsum vitae tristique. Nam id tempor urna, a varius eros. Cras iaculis velit sed elit dignissim, ut mollis ex semper. In nec tortor metus. Suspendisse sed finibus ante. Etiam non est sit amet elit congue feugiat vel id felis. Phasellus blandit libero faucibus, congue odio id, facilisis urna. Maecenas aliquet sapien turpis, vel suscipit mauris tempor non. Duis posuere nisi blandit, eleifend ipsum in, rhoncus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a metus dolor. Sed luctus sapien vitae nisi malesuada ultrices. Maecenas vel laoreet est, quis tincidunt purus. Aenean lectus eros, sollicitudin et semper et, rhoncus at tortor.

            Maecenas feugiat purus dolor. Morbi orci nunc, dictum sit amet malesuada nec, eleifend ut quam. Aliquam scelerisque dictum urna, eu mattis arcu lacinia mollis. Etiam in sodales risus. Morbi porta finibus quam, nec gravida sapien gravida ac. Phasellus tristique est ut nisi ultrices rhoncus. Donec sagittis mattis ex, scelerisque luctus dolor. Fusce imperdiet sollicitudin ante. Nam vel tellus sit amet erat iaculis consectetur nec nec neque. Vestibulum porttitor sollicitudin accumsan. Sed hendrerit tincidunt ante quis vehicula.

            Donec vel nisi vitae velit dictum ornare sed vel odio. Vivamus malesuada ornare ligula. Curabitur id purus in nisl laoreet rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin at lorem hendrerit, ultricies arcu at, iaculis nunc. Nullam iaculis laoreet volutpat. Aenean cursus est at aliquet fermentum. Fusce molestie odio elit, ut varius eros viverra vitae. Maecenas tincidunt, urna eu rutrum venenatis, magna est tincidunt nunc, venenatis pharetra orci diam sit amet lacus. Curabitur quis tempus eros. Morbi eu felis vel quam varius vestibulum et et diam. Curabitur vulputate nulla ante, ut pretium erat rutrum sed. Aliquam vestibulum ac dolor a dignissim. Ut iaculis est a pretium laoreet. Proin mi ligula, auctor consectetur magna sed, sollicitudin viverra ligula. Aenean quis nulla id metus tempus semper vel id neque.
       </p>
    </div>
    );
}

export default ModalPage;