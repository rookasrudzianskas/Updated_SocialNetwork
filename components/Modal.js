import React from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>

        </div>
    );
};

export default Modal;
