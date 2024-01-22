//Modal.tsx
import React from 'react';
import CrossIcon from './SVG/Technical/CrossIcon';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.60)] flex justify-center overflow-hidden overflow-y-auto transition-opacity z-[999]" onClick={onClose}>
            
            <div className="modal-content relative top-[100px] m-5 w-full h-[min-content] max-w-max rounded-xl bg-white p-[20px] translate-y-[-50px] transition-opacity transition-transform
                            flex flex-col " onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-end'>
                <button onClick={onClose} className='flex justify-center items-center'>
                <CrossIcon size='20' color='#A0BE3C'/>
                </button>
                </div>
                
                
                {children}
                
            </div>
            
        </div>
    );
};

export default Modal;
