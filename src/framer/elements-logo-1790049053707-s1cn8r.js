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

// http-url:https://framerusercontent.com/modules/KSyVBu0E0liDLg6JGeuV/dFAhR0LBdHXOIhS8eFAA/RKoVavP5G.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, Link, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
var serializationHash = "framer-Fikj6";
var variantClassNames = { mBaTZ1V5G: "framer-v-109qzaa" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, link, width, ...props }) => {
  return { ...props, ZceSIG0ZG: link !== null && link !== void 0 ? link : props.ZceSIG0ZG };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ZceSIG0ZG, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "mBaTZ1V5G", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: ZceSIG0ZG, openInNewTab: false, children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-109qzaa", className, classNames)} framer-iw0mdo`, "data-framer-name": "Variant 1", layoutDependency, layoutId: "ElementsLogo__mBaTZ1V5G", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, children: /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", intrinsicHeight: 97, intrinsicWidth: 97, loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 0), pixelHeight: 194, pixelWidth: 194, src: "https://framerusercontent.com/images/NaTYhbpgrZOX1v374uYcigykZSs.png" }, className: "framer-1icj0ce", "data-framer-name": "Logo (Replace)", layoutDependency, layoutId: "ElementsLogo__xqae36yjY" }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Fikj6.framer-iw0mdo, .framer-Fikj6 .framer-iw0mdo { display: block; }", ".framer-Fikj6.framer-109qzaa { height: 24px; overflow: visible; position: relative; text-decoration: none; width: 24px; }", ".framer-Fikj6 .framer-1icj0ce { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }"];
var FramerRKoVavP5G = withCSS(Component, css, "framer-Fikj6");
var RKoVavP5G_default = FramerRKoVavP5G;
FramerRKoVavP5G.displayName = "Elements/Logo";
FramerRKoVavP5G.defaultProps = { height: 24, width: 24 };
addPropertyControls(FramerRKoVavP5G, { ZceSIG0ZG: { title: "Link", type: ControlType.Link } });
addFonts(FramerRKoVavP5G, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerRKoVavP5G", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerContractVersion": "1", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}', "framerDisplayContentsDiv": "false", "framerVariables": '{"ZceSIG0ZG":"link"}', "framerIntrinsicWidth": "24", "framerIntrinsicHeight": "24", "framerImmutableVariables": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  RKoVavP5G_default as default
};
