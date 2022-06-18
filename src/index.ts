export { vueDirective } from './vueDirective';

export const register = (element: HTMLElement) => {
  element.classList.add('x-ripple-js__ripple-button');

  let spanElement: HTMLSpanElement = null;

  element.addEventListener('pointerdown', (e) => {
    element.setPointerCapture(e.pointerId);
    spanElement = onElementClick({
      mainElement: element,
      posX: e.clientX,
      posY: e.clientY
    });
  });

  element.addEventListener('pointerup', (e) => {
    element.releasePointerCapture(e.pointerId);
    spanElement.classList.add('x-ripple-release');
    setTimeout(() => {
      if (spanElement) {
        spanElement.remove();
      }
    }, 200);
  });
};

type OnElementClickParams = {
  posX: number;
  posY: number;
  mainElement: HTMLElement;
};

const onElementClick = ({ posX, posY, mainElement }: OnElementClickParams) => {
  const circleElement = document.createElement('span');
  const circleDiameter = Math.max(
    mainElement.offsetWidth,
    mainElement.offsetHeight
  );
  const circleRadius = circleDiameter / 2;

  applyStyleProperties(circleElement, {
    width: `${circleDiameter}px`,
    height: `${circleDiameter}px`,
    left: `${posX - (mainElement.offsetLeft + circleRadius)}px`,
    top: `${posY - (mainElement.offsetTop + circleRadius)}px`
  });

  circleElement.classList.add('x-ripple');

  mainElement.appendChild(circleElement);

  return circleElement;
};

const applyStyleProperties = (
  element: HTMLElement,
  styleProperties: Partial<CSSStyleDeclaration>
) =>
  Object.entries(styleProperties).forEach(
    ([styleProperty, styleValue]) => (element.style[styleProperty] = styleValue)
  );
