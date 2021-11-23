import React, {Fragment, useRef} from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);
    let completeButtonRef = useRef(null)


    return (
        <Transition.Root show={!!open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpen}
            >

                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    {/* trick browser to center modals */}
                    <span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
                        &#8203
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave='ease-in duration-200'
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        // ref={completeButtonRef}
                    >

                    </Transition.Child>

                </div>
            </Dialog>
        </Transition.Root>
        // <div>
        //
        // </div>
    );
};

export default Modal;
