export type Gender = 'male' | 'female';

export interface Name {
  kanji: string;
  hiragana: string;
  katakana: string;
  romaji: string;
}

export interface NamesData {
  firstNames: {
    male: Name[];
    female: Name[];
  };
  lastNames: Name[];
}

export interface Person {
  firstName: Name;
  lastName: Name;
  gender: Gender;
}

export interface NamesYamlData {
  first_name: {
    male: string[][];
    female: string[][];
  };
  last_name: string[][];
}
