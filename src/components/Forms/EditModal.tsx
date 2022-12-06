import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const EditModal = ({ children }: Props) => {
  const closeModal = (e: MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hidden");
  };

  return (
    <div className="hidden" id="modal">
      <div
        className="w-screen h-screen bg-black opacity-80 absolute"
        onClick={closeModal}
      ></div>
      <div
        className="p-6 bg-white max-w-lg z-50
                    absolute top-[10%] left-0 right-0 m-auto
                    flex items-center justify-center
                    "
      >
        {children}
      </div>
    </div>
  );
};

export default EditModal;
