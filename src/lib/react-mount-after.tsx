import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal, render } from 'react-dom';

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
export function renderComponentNextToSelector(ReactComponent: () => React.JSX.Element, selector: string) {
    // 創建一個臨時容器
    const tempContainer = document.createElement("div");
    tempContainer.style.display = "inline-block";
    tempContainer.style.margin = "0";
    tempContainer.style.padding = "0";
    tempContainer.style.border = "none";
    tempContainer.style.width = "auto";
    tempContainer.style.height = "auto";
    tempContainer.style.background = "none";

    const target = document.querySelector(selector);
    if (target && target.parentNode) {
        // 渲染組件到臨時容器
        render(<ReactComponent />, tempContainer, () => {
            target!.parentNode!.insertBefore(tempContainer, target.nextSibling);
        });
        return true;
    } else {
        return false;
    }
}