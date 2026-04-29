import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { BearTrap } from './pages/bear-trap/bear-trap';
import { CrazyJoe } from './pages/crazy-joe/crazy-joe';
import { Svs } from './pages/svs/svs';
import { NotFound } from './pages/not-found/not-found';
import { Labyrinth } from './pages/labyrinth/labyrinth';
import { DiceChampionship } from './pages/dice-championship/dice-championship';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'bear-trap', component: BearTrap },
    { path: 'crazy-joe', component: CrazyJoe },
    { path: 'dice-championship', component: DiceChampionship },
    { path: 'labyrinth', component: Labyrinth },
    { path: 'svs', component: Svs },
    { path: '**', component: NotFound }
];
