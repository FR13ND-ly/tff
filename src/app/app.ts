import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Footer } from "./core/components/footer/footer";
import { selectedLanguageIndex } from './core/utils/language-pack';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tff');

  constructor() {
    effect(() => {
      localStorage.setItem('selectedLanguageIndex', selectedLanguageIndex().toString());
    });
  }
}
