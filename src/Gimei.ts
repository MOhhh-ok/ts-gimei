import fs from 'fs-extra';
import path from 'path';
import { parse } from 'yaml';
import { Gender, Name, NamesData, NamesYamlData, Person } from './types';

export class Gimei {
  private data: NamesData;
  constructor() {
    const str = fs.readFileSync(
      path.join(__dirname, '..', 'data', 'names.yml'),
      'utf8'
    );
    const ymlData: NamesYamlData = parse(str);
    this.data = {
      firstNames: {
        male: ymlData.first_name.male.map(parseItem),
        female: ymlData.first_name.female.map(parseItem),
      },
      lastNames: ymlData.last_name.map(parseItem),
    };
    console.log(this.data);
  }

  person(params?: { gender?: Gender }): Person {
    const gender = params?.gender ?? getRandomItem(['male', 'female']);
    const firstNames = this.data.firstNames[gender];
    const lastNames = this.data.lastNames;
    return {
      firstName: getRandomItem(firstNames),
      lastName: getRandomItem(lastNames),
      gender,
    };
  }
}

function parseItem(item: string[]): Name {
  const [kanji, hiragana, katakana, romaji] = item;
  return {
    kanji,
    hiragana,
    katakana,
    romaji,
  };
}

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
