import React from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialong, Transition } from "@headlessui/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>

        </div>
    );
};

export default Modal;
