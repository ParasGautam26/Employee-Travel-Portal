import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
]);


export const slideInAnimation = trigger('slideIn', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('300ms', style({ transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)' }),
      animate('300ms', style({ transform: 'translateX(-100%)' })),
    ]),
  ]);