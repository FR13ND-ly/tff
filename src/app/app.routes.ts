import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { BearTrap } from './pages/bear-trap/bear-trap';
import { CrazyJoe } from './pages/crazy-joe/crazy-joe';
import { Svs } from './pages/svs/svs';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'bear-trap', component: BearTrap },
    { path: 'crazy-joe', component: CrazyJoe },
    { path: 'svs', component: Svs },
    { path: '**', component: NotFound }
];
