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

// http-url:https://framerusercontent.com/modules/CF2yHuUXqizxj5uavF9M/MLMZB8CxbckkooJlzGoi/tI5jCz33A.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, forwardLoader, getFonts, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/081O8HfS0BReVRaDcjTu/xfIE3ZAw1rMDb56cj5zY/tT0wk_moh.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";

// http-url:https://framerusercontent.com/modules/05Wa4oyBZ7TjI1kMwh1y/EkSddwRVYYngMkEH0UN9/TQvmJK7UB.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Satoshi-medium", "FS;Satoshi-bold", "FS;Satoshi-bold italic", "FS;Satoshi-medium italic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2", weight: "500" }, { family: "Satoshi", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2", weight: "700" }, { family: "Satoshi", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NID3I7RITWZSKXRCJGOCMP5NOADJK6IG/2HLHGD7OBTWCOHW64YXOE5KFXHU4KJHM/ZHME2QIRFR7UPJ47NLY27RCAFY44CKZJ.woff2", weight: "500" }] }];
var css = [`.framer-0ApY1 .framer-styles-preset-14ew30v:not(.rich-text-wrapper), .framer-0ApY1 .framer-styles-preset-14ew30v.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-19a7d54a-8908-466b-aff3-afd2d858cefc, rgba(255, 255, 255, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-0ApY1 .framer-styles-preset-14ew30v:not(.rich-text-wrapper), .framer-0ApY1 .framer-styles-preset-14ew30v.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-19a7d54a-8908-466b-aff3-afd2d858cefc, rgba(255, 255, 255, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-0ApY1 .framer-styles-preset-14ew30v:not(.rich-text-wrapper), .framer-0ApY1 .framer-styles-preset-14ew30v.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-19a7d54a-8908-466b-aff3-afd2d858cefc, rgba(255, 255, 255, 0.7)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-0ApY1";

// http-url:https://framerusercontent.com/modules/hKaCdSh2KxLFSZd9VlY6/OercWaK9NVd16rM5aUjs/UwhnZFjEy.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts([]);
var fonts2 = [{ explicitInter: true, fonts: [] }];
var css2 = ['.framer-f1jbK .framer-styles-preset-1ge2maa:not(.rich-text-wrapper), .framer-f1jbK .framer-styles-preset-1ge2maa.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-19a7d54a-8908-466b-aff3-afd2d858cefc, rgba(255, 255, 255, 0.7)) /* {"name":"Text"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-a47e5f39-ab8e-4e9f-95d6-dca87be48225, #ffffff); --framer-link-text-decoration: none; transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1) 0s; }'];
var className2 = "framer-f1jbK";

// http-url:https://framerusercontent.com/modules/081O8HfS0BReVRaDcjTu/xfIE3ZAw1rMDb56cj5zY/tT0wk_moh.js
var serializationHash = "framer-fKyT5";
var variantClassNames = { NQAUKahMh: "framer-v-1i18dg0" };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ avatar, creator, height, id, link, title, width, ...props }) => {
  var _ref, _ref1;
  return { ...props, BdwUs0U2_: avatar !== null && avatar !== void 0 ? avatar : props.BdwUs0U2_, eUsA3dMaW: link !== null && link !== void 0 ? link : props.eUsA3dMaW, KaIqwAUtj: (_ref = title !== null && title !== void 0 ? title : props.KaIqwAUtj) !== null && _ref !== void 0 ? _ref : "Created by ", TO1TitaNZ: (_ref1 = creator !== null && creator !== void 0 ? creator : props.TO1TitaNZ) !== null && _ref1 !== void 0 ? _ref1 : "Hamza Ehsan" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, BdwUs0U2_, TO1TitaNZ, KaIqwAUtj, eUsA3dMaW, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "NQAUKahMh", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className2];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1i18dg0", className3, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "FooterCopyright__NQAUKahMh", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-14ew30v", "data-styles-preset": "TQvmJK7UB", children: "Created by " }) }), className: "framer-86it7u", "data-framer-name": "Creator", fonts: ["Inter"], layoutDependency, layoutId: "FooterCopyright__GBIyPl9vq", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, text: KaIqwAUtj, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (0 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 24) - 0 - 24) / 2)), sizes: "24px", ...toResponsiveImage(BdwUs0U2_) }, className: "framer-1rl6h47", "data-border": true, layoutDependency, layoutId: "FooterCopyright__QDcBRx9Pc", style: { "--border-bottom-width": "1px", "--border-color": "var(--token-af7273d3-1fb6-4796-9326-48ad035c57d2, rgba(255, 255, 255, 0.1))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50 } }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-14ew30v", "data-styles-preset": "TQvmJK7UB", children: /* @__PURE__ */ _jsx(Link, { href: eUsA3dMaW, openInNewTab: true, smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-1ge2maa", "data-styles-preset": "UwhnZFjEy", children: "Hamza Ehsan" }) }) }) }), className: "framer-ypggja", "data-framer-name": "Creator", fonts: ["Inter"], layoutDependency, layoutId: "FooterCopyright__R8CbWBgvX", style: { "--framer-paragraph-spacing": "0px" }, text: TO1TitaNZ, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-fKyT5.framer-1tn08tt, .framer-fKyT5 .framer-1tn08tt { display: block; }", ".framer-fKyT5.framer-1i18dg0 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-fKyT5 .framer-86it7u, .framer-fKyT5 .framer-ypggja { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }", ".framer-fKyT5 .framer-1rl6h47 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fKyT5.framer-1i18dg0 { gap: 0px; } .framer-fKyT5.framer-1i18dg0 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-fKyT5.framer-1i18dg0 > :first-child { margin-left: 0px; } .framer-fKyT5.framer-1i18dg0 > :last-child { margin-right: 0px; } }", ...css, ...css2, '.framer-fKyT5[data-border="true"]::after, .framer-fKyT5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramertT0wk_moh = withCSS(Component, css3, "framer-fKyT5");
var tT0wk_moh_default = FramertT0wk_moh;
FramertT0wk_moh.displayName = "Elements/Created By";
FramertT0wk_moh.defaultProps = { height: 24, width: 192.5 };
addPropertyControls(FramertT0wk_moh, { BdwUs0U2_: { title: "Avatar", type: ControlType.ResponsiveImage }, TO1TitaNZ: { defaultValue: "Hamza Ehsan", title: "Creator", type: ControlType.String }, KaIqwAUtj: { defaultValue: "Created by ", displayTextArea: false, title: "Title", type: ControlType.String }, eUsA3dMaW: { title: "Link", type: ControlType.Link } });
addFonts(FramertT0wk_moh, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/CF2yHuUXqizxj5uavF9M/MLMZB8CxbckkooJlzGoi/tI5jCz33A.js
var ElementsCreatedByFonts = getFonts(tT0wk_moh_default);
var cycleOrder = ["Cx4p8h5pI", "zpJ7MAuDj", "OW7QCSJKc"];
var serializationHash2 = "framer-97Kvh";
var variantClassNames2 = { Cx4p8h5pI: "framer-v-1oah1bq", OW7QCSJKc: "framer-v-1ueiktd", zpJ7MAuDj: "framer-v-ztm933" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Desktop: "Cx4p8h5pI", Mobile: "OW7QCSJKc", Tablet: "zpJ7MAuDj" };
var Variants2 = motion2.create(React2.Fragment);
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "Cx4p8h5pI" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "Cx4p8h5pI", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx2(motion2.footer, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-1oah1bq", className3, classNames), "data-border": true, "data-framer-name": "Desktop", layoutDependency, layoutId: "FooterCopyright__Cx4p8h5pI", ref: refBinding, style: { "--border-bottom-width": "0px", "--border-color": "var(--token-8ff57e4c-59b8-4387-a644-21cf5cc6f487, rgba(255, 255, 255, 0.1))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", ...style }, ...addPropertyOverrides({ OW7QCSJKc: { "data-framer-name": "Mobile" }, zpJ7MAuDj: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-14auab3", "data-framer-name": "Copyright", layoutDependency, layoutId: "FooterCopyright__GvbjK5Qf9", children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 24, y: (componentViewport?.y || 0) + 24 + (((componentViewport?.height || 72) - 48 - 24) / 2 + 0 + 0) + 0, ...addPropertyOverrides({ OW7QCSJKc: { y: void 0 }, zpJ7MAuDj: { y: (componentViewport?.y || 0) + 24 + (((componentViewport?.height || 200) - 48 - 24) / 2 + 0 + 0) + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-vtw8lu-container", layoutDependency, layoutId: "FooterCopyright__oU2Sqbr8S-container", nodeId: "oU2Sqbr8S", rendersWithMotion: true, scopeId: "tI5jCz33A", children: /* @__PURE__ */ _jsx2(tT0wk_moh_default, { BdwUs0U2_: addImageAlt({ pixelHeight: 1024, pixelWidth: 1024, src: "https://framerusercontent.com/images/BAAm4iLj0ZDVoNBCfkiG00pMAVw.jpg?width=1024&height=1024", srcSet: "https://framerusercontent.com/images/BAAm4iLj0ZDVoNBCfkiG00pMAVw.jpg?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/BAAm4iLj0ZDVoNBCfkiG00pMAVw.jpg?width=1024&height=1024 1024w" }, ""), eUsA3dMaW: "https://hxmzaehsan.com", height: "100%", id: "oU2Sqbr8S", KaIqwAUtj: "Created by ", layoutId: "FooterCopyright__oU2Sqbr8S", TO1TitaNZ: "Hamza Ehsan", width: "100%" }) }) }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-97Kvh.framer-if3nmc, .framer-97Kvh .framer-if3nmc { display: block; }", ".framer-97Kvh.framer-1oah1bq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 64px 24px 64px; position: relative; width: 100%; }", ".framer-97Kvh .framer-14auab3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-97Kvh .framer-vtw8lu-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-97Kvh.framer-v-ztm933.framer-1oah1bq { padding: 24px 32px 24px 32px; width: 100%; }", ".framer-97Kvh.framer-v-1ueiktd.framer-1oah1bq { gap: 42px; padding: 24px 32px 24px 32px; width: 100%; }", ".framer-97Kvh.framer-v-1ueiktd .framer-14auab3 { flex-wrap: wrap; gap: 16px; justify-content: center; }", '.framer-97Kvh[data-border="true"]::after, .framer-97Kvh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramertI5jCz33A = withCSS2(Component2, css4, "framer-97Kvh");
var tI5jCz33A_default = FramertI5jCz33A;
FramertI5jCz33A.displayName = "Footer/Copyright";
FramertI5jCz33A.defaultProps = { height: 72, width: 1200 };
addPropertyControls2(FramertI5jCz33A, { variant: { options: ["Cx4p8h5pI", "zpJ7MAuDj", "OW7QCSJKc"], optionTitles: ["Desktop", "Tablet", "Mobile"], title: "Variant", type: ControlType2.Enum } });
addFonts2(FramertI5jCz33A, [{ explicitInter: true, fonts: [] }, ...ElementsCreatedByFonts], { supportsExplicitInterCodegen: true });
FramertI5jCz33A.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(tT0wk_moh_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramertI5jCz33A", "slots": [], "annotations": { "framerContractVersion": "1", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"zpJ7MAuDj":{"layout":["fixed","auto"]},"OW7QCSJKc":{"layout":["fixed","auto"]}}}', "framerImmutableVariables": "true", "framerIntrinsicWidth": "1200", "framerAutoSizeImages": "true", "framerComponentViewportWidth": "true", "framerIntrinsicHeight": "72", "framerDisplayContentsDiv": "false" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  tI5jCz33A_default as default
};
