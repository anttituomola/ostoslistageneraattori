import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { hideModal } from '../reducers/modalReducer';
import { useSelector } from 'react-redux';

const Modal = (props) => {
    const dispatch = useDispatch()
    const modalRef = useRef(null)
    const modalVisible = useSelector(state => state.modal.modalVisible)

    useOnClickOutside(modalRef, () => dispatch(hideModal()));

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Mikäli klikataan refe-elementtiä tai sen lapsia, ei tehdä mitään
                    if (!ref.current || ref.current.contains(event.target)) {
                        return
                    }
                    handler(event)
                }
                document.addEventListener("mousedown", listener)
                document.addEventListener("touchstart", listener)
                return () => {
                    document.removeEventListener("mousedown", listener)
                    document.removeEventListener("touchstart", listener)
                }
            },
            [ref, handler]
        )
    }

    // Kuunnellaan ESC-näppäintä ja suljetaan modaali
    const listenForEscKey = event => {
        const { keyCode } = event;

        if (keyCode === 27) {
            dispatch(hideModal())
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', listenForEscKey);

        return () => {
            window.removeEventListener('keydown', listenForEscKey);
        }
    })

    // Ei renderöidä mikäli modalVisible on false
    if (!modalVisible) {
        return null
    }
    
    return (
        <div className="modal">
            <div className="modalContent" ref={modalRef}>
                <span className="close" onClick={() => dispatch(hideModal())}>X</span>
                <p>{props.portion}</p>
            </div>
        </div>
    )
}

export default Modal