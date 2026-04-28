import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { selectedLanguagePack } from '../../core/utils/language-pack';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  public pack = selectedLanguagePack;
}
