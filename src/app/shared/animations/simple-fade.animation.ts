import { style, transition, animate, animation, trigger, state, useAnimation, query, animateChild, group } from '@angular/animations';

const simpleFadeAnimation = animation([
  style({
    opacity: '{{ opacity }}'
  }),
  animate('{{ time }}')
]);

export const fadeAnimation =
  trigger('simpleFadeAnimation', [
    state('in', style({opacity: 1})),
    transition(':enter', [
      useAnimation(simpleFadeAnimation, {
        params: {
          opacity: 0,
          time: '0.5s'
        }
      })
    ])
  ]);

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      useAnimation(simpleFadeAnimation, {
        params: {
          opacity: 0,
          time: '0.3s'
        }
      })
    ])
  ]);
