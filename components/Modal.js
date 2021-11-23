import React, {Fragment} from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <Transition.Root show={!!open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpen}
            >

                <h1>Hello</h1>
            </Dialog>
        </Transition.Root>
    );
};

export default Modal;
