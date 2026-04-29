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
  public isMobileMenuOpen = signal(false);

  private clickOutsideListener?: () => void;
  private mobileClickOutsideListener?: () => void;

  toggleLangMenu(): void {
    const willOpen = !this.isLangMenuOpen();

    // Close mobile menu if opening language menu
    if (willOpen) {
      this.isMobileMenuOpen.set(false);
      this.removeMobileClickOutsideListener();
    }

    this.isLangMenuOpen.set(willOpen);

    if (willOpen) {
      setTimeout(() => {
        this.addClickOutsideListener();
      }, 10);
    } else {
      this.removeClickOutsideListener();
    }
  }

  selectLanguage(index: number): void {
    selectedLanguageIndex.set(index);
    this.isLangMenuOpen.set(false);
    this.removeClickOutsideListener();
  }

  private addClickOutsideListener(): void {
    this.removeClickOutsideListener();

    this.clickOutsideListener = () => {
      this.isLangMenuOpen.set(false);
      this.removeClickOutsideListener();
    };

    document.addEventListener('click', this.clickOutsideListener);
  }

  private removeClickOutsideListener(): void {
    if (this.clickOutsideListener) {
      document.removeEventListener('click', this.clickOutsideListener);
      this.clickOutsideListener = undefined;
    }
  }

  toggleMobileMenu(): void {
    const willOpen = !this.isMobileMenuOpen();

    // Close language menu if opening mobile menu
    if (willOpen) {
      this.isLangMenuOpen.set(false);
      this.removeClickOutsideListener();
    }

    this.isMobileMenuOpen.set(willOpen);

    if (willOpen) {
      setTimeout(() => {
        this.addMobileClickOutsideListener();
      }, 10);
    } else {
      this.removeMobileClickOutsideListener();
    }
  }

  private addMobileClickOutsideListener(): void {
    this.removeMobileClickOutsideListener();

    this.mobileClickOutsideListener = () => {
      this.isMobileMenuOpen.set(false);
      this.removeMobileClickOutsideListener();
    };

    document.addEventListener('click', this.mobileClickOutsideListener);
  }

  private removeMobileClickOutsideListener(): void {
    if (this.mobileClickOutsideListener) {
      document.removeEventListener('click', this.mobileClickOutsideListener);
      this.mobileClickOutsideListener = undefined;
    }
  }

  ngOnDestroy(): void {
    this.removeClickOutsideListener();
    this.removeMobileClickOutsideListener();
  }

  toggleTheme(): void {
    const currentState = this.themeService.isDarkMode();
    this.themeService.toggleDarkMode(!currentState);
  }
}