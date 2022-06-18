import { register } from '.';

export const vueDirective = {
  mounted: (element: HTMLElement) => {
    register(element);
  }
};
