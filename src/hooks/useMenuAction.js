import {useEffect, useState} from "react";

export const useMenuAction = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuAction = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const handleBackDropClick = (event, className) => {
        if (event.target.classList.contains(className)) {
            handleMenuAction();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return {
        isOpen,
        setIsOpen,
        handleMenuAction,
        handleBackDropClick,
    }
}