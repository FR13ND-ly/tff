import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../core/utils/language-pack';

interface Hero {
  name: string;
  image: string;
}

@Component({
  selector: 'app-bear-trap',
  imports: [],
  templateUrl: './bear-trap.html',
  styleUrl: './bear-trap.css',
})
export class BearTrap {
  public pack = selectedLanguagePack;

  joinerHeroes: Hero[] = [
    { name: 'Jessie', image: '/heroes/jessie.png' },
    { name: 'Jasser', image: '/heroes/jasser.jpg' },
    { name: 'Seo-Yoon', image: '/heroes/seo_yoon.jpg' },
    { name: 'Jeronimo', image: '/heroes/jeronimo.png' },
    { name: 'Gwen', image: '/heroes/gwen.jpg' },
    { name: 'Reina', image: '/heroes/reina.jpg' },
    { name: 'Philly', image: '/heroes/philly.png' },
    { name: 'Bradley', image: '/heroes/bradley.jpg' },
  ];

  starterHeroes: Hero[] = [
    { name: 'Bradley', image: '/heroes/bradley.jpg' },
    { name: 'Wayne', image: '/heroes/wayne.jpg' },
    { name: 'Mia', image: '/heroes/mia.png' },
    { name: 'Jeronimo', image: '/heroes/jeronimo.png' },
  ];
}