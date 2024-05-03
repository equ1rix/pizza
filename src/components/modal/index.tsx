import CloseButton from "../iconbuttons/closeButton";

type ModalProps = {
  onClose: () => void;
  title: string;
};

const Modal = ({ onClose = () => {}, title = "" }: ModalProps) => (
  <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center bg-opacity-50 z-50">
    <div className="max-w-[500px] w-[100%] min-h-[230px] bg-secondMain p-[15px] rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-white fz font-bold text-2xl">{title}</h3>
        <CloseButton onClick={onClose} />
      </div>
      <div className="text-customizationBG">
        <p className="text-lg font-medium mt-2">
          The coursework was completed by the student of the KI-21-2/9-68 group:
        </p>
        <p className="text-xl font-semibold">Pavlenko Nazar Ihorovych</p>
        <p className="italic pt-5">
          "TypeScript and the React framework were used as the foundation, with
          styling handled by the Tailwind CSS library"
        </p>
      </div>
    </div>
  </div>
);

export default Modal;
