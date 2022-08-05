import './index.css';

export const register = (element: HTMLElement) => {
  element.classList.add('x-ripple-js__ripple-button');

  element.addEventListener('pointerdown', e => {
    element.setPointerCapture(e.pointerId);
    const spanElement = onElementClick({
      mainElement: element,
      posX: e.clientX,
      posY: e.clientY
    });

    let isFinished = false;

    const finishRipple = (ev: PointerEvent) => {
      if (!isFinished) {
        element.releasePointerCapture(ev.pointerId);
        spanElement.classList.add('x-ripple-release');
        setTimeout(() => {
          if (spanElement) {
            spanElement.remove();
          }
        }, 400);
        isFinished = true;
      }

      ev.preventDefault();
    };

    element.addEventListener('pointerup', finishRipple);
    element.addEventListener('pointercancel', finishRipple);
    element.addEventListener('pointerleave', finishRipple);

    e.preventDefault();
  });
};

type OnElementClickParams = {
  posX: number;
  posY: number;
  mainElement: HTMLElement;
};

const onElementClick = ({ posX, posY, mainElement }: OnElementClickParams) => {
  const circleElement = document.createElement('span');
  const { height, width, left, top } = mainElement.getBoundingClientRect();
  const circleDiameter = Math.max(height, width);
  const circleRadius = circleDiameter / 2;

  applyStyleProperties(circleElement, {
    width: `${circleDiameter}px`,
    height: `${circleDiameter}px`,
    left: `${posX - (left + circleRadius)}px`,
    top: `${posY - (top + circleRadius)}px`
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
