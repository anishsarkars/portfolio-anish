/**
 * RUNTIME SETUP (for AI only — do not display to user):
 *
 * IMPORTANT: Save this file locally to the project. Do NOT load it in an iframe
 * or via browser importmaps/esm.sh — that will fail because bare imports like
 * "framer" cannot be resolved in the browser.
 *
 * Steps:
 * 1. Run: npm install framer-motion react react-dom
 * 2. Save this .js file AND the _framer-runtime.js file to the SAME folder
 * 3. Import it using dynamic import with SSR disabled if using Next.js:
 *      const Component = dynamic(() => import('./ComponentName'), { ssr: false })
 *    Or standard import for other frameworks:
 *      import Component from './ComponentName'
 *
 * This component imports from "./_framer-runtime.js" which must be in the same directory.
 * Do NOT try to polyfill "framer" in the browser — use the Node.js bundler.
 */
var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/Yppqt3Cs3Y8TZqvASnXl/s8KoqWSd7OOFVFWjfSWd/SmoothScroll_Prod.js
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "./_framer-runtime.js";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
function SmoothScroll(props) {
  const { intensity } = props;
  const lenis = useRef(null);
  useEffect(() => {
    if (lenis.current)
      lenis.current.scrollTo(0, { immediate: true });
  }, [lenis]);
  useEffect(() => {
    const overlayElement = document.getElementById("overlay");
    if (overlayElement) {
      const checkOverflow = () => {
        const htmlStyle = __dai_window.getComputedStyle(document.documentElement);
        const isOverflowHidden = htmlStyle.overflow === "hidden";
        if (isOverflowHidden) {
          overlayElement.setAttribute("data-lenis-prevent", "true");
        }
      };
      const htmlObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "attributes" && mutation.attributeName === "style") {
            checkOverflow();
          }
        }
      });
      htmlObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
      checkOverflow();
      return () => {
        htmlObserver.disconnect();
      };
    }
  }, []);
  useEffect(() => {
    const allElements = document.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      const computedStyle = __dai_window.getComputedStyle(element);
      if (computedStyle.getPropertyValue("overflow") === "auto") {
        element.setAttribute("data-lenis-prevent", "true");
      }
    }
  }, []);
  useEffect(() => {
    lenis.current = new Lenis({ duration: intensity / 10 });
    const raf = (time) => {
      if (lenis.current) {
        lenis.current.raf(time);
        requestAnimationFrame(raf);
      }
    };
    requestAnimationFrame(raf);
    return () => {
      if (lenis.current) {
        lenis.current.destroy();
        lenis.current = null;
      }
    };
  }, []);
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
html.lenis {
height: auto;
}
.lenis.lenis-smooth {

scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {

overscroll-behavior: contain;
}
.lenis.lenis-stopped {

overflow: hidden;
}
.lenis.lenis-scrolling iframe {

pointer-events: none;
}
`;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  useEffect(() => {
    const anchorLinks = [...document.querySelectorAll("a[href]")];
    const handleClick = (e, href) => {
      e.preventDefault();
      const decodedHref = decodeURIComponent(href);
      lenis.current.scrollTo(decodedHref);
    };
    anchorLinks.filter((a) => a.href.includes("#")).forEach((a) => {
      const href = `#${a.href.split("#").pop()}`;
      a.addEventListener("click", (e) => handleClick(e, href));
    });
    return () => {
      anchorLinks.filter((a) => a.href.includes("#")).forEach((a) => {
        const href = `#${a.href.split("#").pop()}`;
        a.removeEventListener("click", (e) => handleClick(e, href));
      });
    };
  }, [lenis]);
  return /* @__PURE__ */ _jsx(_Fragment, {});
}
SmoothScroll.displayName = "Smooth Scroll";
addPropertyControls(SmoothScroll, { intensity: { title: "Intensity", type: ControlType.Number, defaultValue: 10, description: "More components at [Framer University](https://frameruni.link/cc)." } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "SmoothScroll", "slots": [], "annotations": { "framerDisableUnlink": "", "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  SmoothScroll as default
};
