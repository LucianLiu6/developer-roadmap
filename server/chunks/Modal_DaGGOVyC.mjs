import { jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { g as useKeydown, u as useOutsideClick, c as cn } from './BaseLayout_CyQdLUYI.mjs';

function Modal(props) {
  const {
    onClose,
    children,
    bodyClassName,
    wrapperClassName,
    overlayClassName
  } = props;
  const popupBodyEl = useRef(null);
  useKeydown("Escape", () => {
    onClose();
  });
  useOutsideClick(popupBodyEl, () => {
    onClose();
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "popup fixed left-0 right-0 top-0 z-[99] flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",
        overlayClassName
      ),
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "relative h-full w-full max-w-md p-4 md:h-auto",
            wrapperClassName
          ),
          children: /* @__PURE__ */ jsx(
            "div",
            {
              ref: popupBodyEl,
              className: cn(
                "popup-body relative h-full rounded-lg bg-white shadow",
                bodyClassName
              ),
              children
            }
          )
        }
      )
    }
  );
}

export { Modal as M };
