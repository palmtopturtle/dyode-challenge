import React, { useState, useRef } from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionContent = useRef(null);

    const accordionContentStyles = {
        maxHeight: isOpen ? accordionContent.current.scrollHeight : 0
    }

    return (
        <div className={`accordion${(isOpen ? ' open' : '')}`}>
            <button className="accordion__button" onClick={() => setIsOpen(!isOpen)}>{title}</button>
            <div className="accordion__content" style={accordionContentStyles} ref={accordionContent}>
                {children}
            </div>
        </div>
    )
}

export default Accordion;