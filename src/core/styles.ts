import { css as _css, styled as _styled, keyframes as _keyframes, extractCss } from "goober";

export type StylesContext = {
  target?: Element;
  k?: 1;
}
export const stylesContext: StylesContext = {};
export const keyframesContext: StylesContext = { k: 1 };

export const bindCssTarget = (target: Element) => {
  stylesContext.target = target;
  keyframesContext.target = target;
};
export { extractCss };

export const css = _css.bind(stylesContext);
export const styled = _styled.bind(stylesContext);
export const keyframes = _css.bind(keyframesContext);
