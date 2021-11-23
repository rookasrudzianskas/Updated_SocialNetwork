import React, {Fragment, useRef, useState} from 'react';
import {modalState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import { Dialog, Transition } from '@headlessui/react'
import {CameraIcon} from "@heroicons/react/outline";
import {collection, addDoc, serverTimestamp} from '@firebase/firestore';
import {useSession} from "next-auth/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const {data: session} = useSession();

    let filePickerRef = useRef(null);
    let captionRef = useRef(null);


    const uploadPost = async () => {
        if (loading) {
            return;
        }
        setLoading(true);

        // create a post and add to the firestore post collection

        // get the post id for the newly created post

        // upload the image to the firebase storage with the post id as the name

        // get the download url from the firebase storage and update original post with the image url

        // 1st what we are doing, 2nd the collection name, 3rd the things we add to the database
        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user.username,
            caption: captionRef.current.value,
            profileImg: session.user.image,
            timestamp: serverTimestamp(),
        });

    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
        //    doe the reading 🔥
    }

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

                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>

                                {selectedFile ? (
                                    <img src={selectedFile} onClick={() => setSelectedFile(null)} className="w-full object-contain cursor-pointer" alt=""/>
                                ) : (
                                    <div
                                        onClick={() => filePickerRef.current.click()}
                                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                                    >
                                        <CameraIcon
                                            className="h-6 w-6 text-red-600"
                                            aria-hidden="true"
                                        />

                                    </div>
                                )}

                                 <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Upload a photo
                                        </Dialog.Title>

                                        <div>
                                            <input
                                                type="file"
                                                ref={filePickerRef}
                                                hidden
                                                onChange={addImageToPost}
                                            />
                                        </div>

                                        <div className="mt-2">
                                            <input
                                                className="border-none focus:ring-0 w-full text-center"
                                                type="text"
                                                ref={captionRef}
                                                placeholder="Please enter the caption"
                                            />
                                        </div>

                                    </div>
                                 </div>

                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        disabled={false}
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none disabled:focus:ring-2 disabled:focus:ring-offset-2 disabled:focus:ring-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                    >
                                        Upload the file
                                    </button>
                                </div>
                            </div>
                        </div>

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
