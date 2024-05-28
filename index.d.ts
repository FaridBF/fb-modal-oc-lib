// Fichier: index.d.ts
declare module "fb-modal-oc-lib" {
  import { FC } from "react";

  export interface ModalProps {
    isVisible: boolean;
    title: string;
    description?: string;
    src: string;
    onClose: () => void;
  }

  export const Modal: FC<ModalProps>;

  export default Modal;
}
