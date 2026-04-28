import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../utils/language-pack';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public pack = selectedLanguagePack;
}
