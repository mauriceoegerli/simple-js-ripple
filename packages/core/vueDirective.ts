import { register } from './ripple';

export const vueDirective = {
  mounted: (element: HTMLElement) => {
    register(element);
  }
};
