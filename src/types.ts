export type Gender = 'male' | 'female';

export interface JaVariation {
  kanji: string;
  hiragana: string;
  katakana: string;
  romaji: string;
}

export interface Name extends JaVariation {}
export interface Address {
  prefecture: Prefecture;
  city: City;
  town: Town;
}

export interface Prefecture extends JaVariation {}
export interface City extends JaVariation {}
export interface Town extends JaVariation {}

export interface Person {
  firstName: Name;
  lastName: Name;
  gender: Gender;
}

export interface NamesData {
  firstNames: {
    male: Name[];
    female: Name[];
  };
  lastNames: Name[];
}

export interface NamesYamlData {
  first_name: {
    male: string[][];
    female: string[][];
  };
  last_name: string[][];
}

export interface AddressesData {
  prefecture: Prefecture[];
  city: City[];
  town: Town[];
}

export interface AddressesYamlData {
  addresses: {
    prefecture: string[][];
    city: string[][];
    town: string[][];
  };
}
