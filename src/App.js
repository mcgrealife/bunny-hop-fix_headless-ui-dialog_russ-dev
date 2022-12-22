import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const handleMobileViewPort = () => {
  let viewHeight = window.innerHeight * 0.005;
  document.documentElement.style.setProperty("--vh", `${viewHeight}px`);
};

function App() {
  useEffect(() => {
    handleMobileViewPort();

    window.addEventListener("resize", () => handleMobileViewPort());

    return () => {
      window.removeEventListener("resize", () => handleMobileViewPort());
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="trick-mobile-browser">
        {/* <div className="fixed inset-0 flex items-center justify-center bg-pink-400"> */}
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 font-sfp-text"
            onClose={closeModal}
          >
            <div className="fixed h-screen inset-0 flex lg:items-center justify-center lg:px-4 text-center overflow-y-hidden">
              <Transition.Child
                as={Fragment}
                enter={"ease-out duration-1000"}
                enterFrom={"translate-y-full"}
                enterTo={"translate-y-0"}
                leave={"ease-in duration-150"}
                leaveFrom={"translate-y-0"}
                leaveTo={"translate-y-full"}
              >
                <Dialog.Panel className="mt-auto w-full lg:max-w-2xl transform overflow-hidden rounded-t-2xl lg:rounded-2xl bg-white text-left align-middle shadow-down-l transition-all">
                  <Dialog.Title
                    as="div"
                    className="relative px-2 py-3.5 flex items-center justify-center"
                  >
                    <span className="text-xl tracking-[.01em] font-bold font-sfp-display text-center text-neutral-800">
                      Change cover
                    </span>
                  </Dialog.Title>
                  <hr />
                  <div className="grid gap-y-4 grid-cols-1 lg:grid-cols-2 p-6 lg:divide-x divide-neutral-300">
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>
                    <p>hehe</p>

                    {/* bunny hop activated, comment these button to see smooth animation */}
                    <button>Save</button>
                    <button>Cancel</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}

export default App;
