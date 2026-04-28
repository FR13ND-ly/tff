import { Component, computed } from '@angular/core';
import { selectedLanguagePack } from '../../core/utils/language-pack';

interface Hero {
  name: string;
  image: string;
}

interface HqWaveData {
  captains: Hero[];
}

@Component({
  selector: 'app-crazy-joe',
  imports: [],
  templateUrl: './crazy-joe.html',
  styleUrl: './crazy-joe.css',
})
export class CrazyJoe {
  public pack = selectedLanguagePack;

  private hqWavesData: HqWaveData[] = [
    {
      captains: [
        { name: 'Sergey',  image: '/heroes/sergey.png' },
        { name: 'Edith',   image: '/heroes/edith.jpg' },
        { name: 'Patrick', image: '/heroes/patrick.png' },
      ]
    },
    {
      captains: [
        { name: 'Sergey',  image: '/heroes/sergey.png' },
        { name: 'Edith',   image: '/heroes/edith.jpg' },
        { name: 'Hector',  image: '/heroes/hector.jpg' }, 
      ]
    }
  ];

  public hqWaves = computed(() => {
    const translatedWaves = this.pack().crazyJoe.hqDefense.waves;
    return translatedWaves.map((wave, index) => ({
      ...wave,
      captains: this.hqWavesData[index].captains
    }));
  });
}