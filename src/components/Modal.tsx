import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseLine } from "react-icons/ri";

import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: () => void;
  title: string;
  body: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  handleSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => onClose()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-950 opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h5"
                    className="text-xl text-center font-medium leading-6 text-white flex justify-between mb-4"
                  >
                    {title}
                    <div
                      className="rounded-full p-1 cursor-pointer hover:bg-slate-300 hover:bg-opacity-10 "
                      onClick={() => onClose()}
                    >
                      <RiCloseLine />
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    {body}
                    {footer}
                  </div>

                  <div className="mt-4">
                    <Button
                      label={actionLabel}
                      onClick={handleSubmit}
                      disabled={disabled}
                      fullWidth
                      large
                      secondary
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
