import { computed, effect, signal } from '@angular/core';
import en from '../languages/en.json';
import es from '../languages/es.json';
import ru from '../languages/ru.json';
import de from '../languages/de.json';
import id from '../languages/id.json';
import fr from '../languages/fr.json';
import it from '../languages/it.json';
import pt from '../languages/pt.json';
import zh from '../languages/zh.json';

export const languages = [
    en, es, ru, de, id, fr, it, pt, zh
];

export const selectedLanguageIndex = signal(0);
export const selectedLanguage = computed(() => languages[selectedLanguageIndex()]);
export const selectedLanguagePack = computed(() => selectedLanguage().pack);
