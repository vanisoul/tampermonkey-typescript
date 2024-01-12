import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';

export function appendComponentToElement(ReactComponent: () => React.JSX.Element, selector: string) {
    const myElement = document.querySelector(selector);
    if (!myElement) {
        console.error('Specified selector not found in the document.');
        return false;
    }
    function fragmentApp() {
        return (
            <>

                {createPortal(
                    <ReactComponent />,
                    myElement!
                )}
            </>
        );
    }

    const fragmentElement = document.createDocumentFragment();
    myElement.appendChild(fragmentElement);
    createRoot(fragmentElement).render(fragmentApp());
    return true;
}