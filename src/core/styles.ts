import { css as _css, styled as _styled, keyframes as _keyframes, extractCss } from "goober";


export type StylesContext = {
  target?: Element;
  k?: 1;
}
const gooberId = '_goober';

export const stylesContext: StylesContext = {};
export const keyframesContext: StylesContext = { k: 1 };

// all next "css", "styled", etc. calls will use this new target
const bindCssTarget = (target: Element) => {
  stylesContext.target = target;
  keyframesContext.target = target;
};

// moves already rendered styles to the new element
const moveCssTarget = (target: Element, targetParent?: Element) => {
  target.innerHTML = extractCss(targetParent);
  target.id = '_goober';
  const parent = targetParent || document;
  const prevStyles = parent.querySelector('#_goober');
  if (prevStyles) prevStyles.remove();
}

export const setCssTarget = (target: Element) => {
  moveCssTarget(target);
  bindCssTarget(target);
};
export { extractCss };

export const css = _css.bind(stylesContext);
export const styled = _styled.bind(stylesContext);
export const keyframes = _css.bind(keyframesContext);
