import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../core/utils/language-pack';

@Component({
  selector: 'app-labyrinth',
  imports: [],
  templateUrl: './labyrinth.html',
  styleUrl: './labyrinth.css',
})
export class Labyrinth {
  public pack = selectedLanguagePack;
}
