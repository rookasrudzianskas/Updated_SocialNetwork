import React, {Fragment} from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <Transition.Root show={open} as={Fragment}>

        </Transition.Root>
    );
};

export default Modal;
