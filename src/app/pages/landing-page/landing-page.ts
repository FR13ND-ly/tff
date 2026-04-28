// landing-page.ts
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { selectedLanguagePack } from '../../core/utils/language-pack';

interface EventTime {
  label?: string;
  time: string;
}

interface GameEvent {
  name: string;
  image: string;
  times: EventTime[];
  route: string;
  hasPage: boolean;
}

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  public pack = selectedLanguagePack;

  public events = computed<GameEvent[]>(() => {
    const p = this.pack().landing;
    
    return [
      { 
        name: p.events.bearTrap, 
        image: '/events/bear_trap-icon.png', 
        times: [{time: '01:00 UTC'}, { time: '18:00 UTC' }], 
        route: '/bear-trap',
        hasPage: true
      },
      { 
        name: p.events.crazyJoe, 
        image: '/events/crazy_joe-icon.png', 
        times: [{ time: p.labels.tba }], 
        route: '/crazy-joe',
        hasPage: true
      },
      { 
        name: p.events.svs, 
        image: '/events/state_of_power-icon.png', 
        times: [{ time: p.labels.biWeekly }], 
        route: '/svs',
        hasPage: true
      },
      { 
        name: p.events.mercenaryBoss, 
        image: '/events/mercenary_prestige-icon.png', 
        times: [{ time: '14:00 UTC' }, { time: '18:00 UTC' }], 
        route: '/mercenary-boss',
        hasPage: false
      },
      { 
        name: p.events.foundry, 
        image: '/events/foundry_battle-icon.png', 
        times: [
          { label: p.labels.legion1, time: '02:00 UTC' },
          { label: p.labels.legion2, time: '19:00 UTC' }
        ], 
        route: '/foundry',
        hasPage: false
      },
      { 
        name: p.events.canyonClash, 
        image: '/events/canyon_clash-icon.png', 
        times: [
          { label: p.labels.legion1, time: '02:00 UTC' },
          { label: p.labels.legion2, time: '19:00 UTC' }
        ], 
        route: '/canyon-clash',
        hasPage: false
      }
    ];
  });
}