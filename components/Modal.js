import React from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>

        </div>
    );
};

export default Modal;
