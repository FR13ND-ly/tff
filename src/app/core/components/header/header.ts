import { Component, inject, signal } from '@angular/core';
import { selectedLanguageIndex, selectedLanguage, selectedLanguagePack, languages } from '../../utils/language-pack';
import { Theme } from '../../services/theme';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public themeService = inject(Theme);
  
  public pack = selectedLanguagePack;
  public currentLang = selectedLanguage;
  
  public availableLanguages = languages;
  
  public isLangMenuOpen = signal(false);

  toggleTheme(): void {
    const currentState = this.themeService.isDarkMode();
    this.themeService.toggleDarkMode(!currentState);
  }

  toggleLangMenu(): void {
    this.isLangMenuOpen.update(val => !val);
  }

  selectLanguage(index: number): void {
    selectedLanguageIndex.set(index);
    this.isLangMenuOpen.set(false); 
  }
}