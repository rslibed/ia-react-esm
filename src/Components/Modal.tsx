import { FC, ReactElement, useEffect, useRef } from "react";
interface ModalProps {
  title: string;
  content: string;
  buttonText: string;
}

const Modal: FC<ModalProps> = (props: ModalProps): ReactElement => {
  const modalRef = useRef(null) as React.RefObject<HTMLCalciteModalElement>;

  function closeModal(): void {
    modalRef.current?.removeAttribute("active");
    console.log("test", modalRef);
  }

  useEffect(() => {}, [modalRef]);

  return (
    <calcite-modal aria-labelledby="modal-title" ref={modalRef} active>
      <h3 slot="header" id="modal-title">
        {props.title}
      </h3>
      <div slot="content">{props.content}</div>
      <calcite-button
        onClick={() => {
          closeModal();
        }}
        slot="primary"
        width="full"
      >
        {props.buttonText}
      </calcite-button>
    </calcite-modal>
  );
};

export default Modal;
