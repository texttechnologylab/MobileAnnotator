import { HammerGestureConfig } from '@angular/platform-browser';
import { DIRECTION_HORIZONTAL, DIRECTION_ALL } from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: { velocity: 0.3, threshold: 10, direction: DIRECTION_HORIZONTAL },
        pinch: { enable: false }, // Wichtig um vertikalen Scroll nicht zu blockieren
        rotate: { enable: false } // Wichtig um vertikalen Scroll nicht zu blockieren
    };
    options = {
        domEvents: true,
    };
}
