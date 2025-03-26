import fs from 'fs-extra';
import path from 'path';
import { parse } from 'yaml';
import {
  Gender,
  Name,
  NamesData,
  NamesYamlData,
  Person,
  AddressesData,
  JaVariation,
  AddressesYamlData,
  Address,
} from './types';

export class Gimei {
  private namesData: NamesData | undefined;
  private addressesData: AddressesData | undefined;

  person(params?: { gender?: Gender }): Person {
    if (!this.namesData) this.loadNamesData();
    const gender = params?.gender ?? getRandomItem(['male', 'female']);
    const firstNames = this.namesData.firstNames[gender];
    const lastNames = this.namesData.lastNames;
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    const fullName = {
      kanji: `${lastName.kanji} ${firstName.kanji}`,
      hiragana: `${lastName.hiragana} ${firstName.hiragana}`,
      katakana: `${lastName.katakana} ${firstName.katakana}`,
      romaji: `${lastName.romaji} ${firstName.romaji}`,
    };

    return {
      firstName,
      lastName,
      fullName,
      gender,
    };
  }

  address(): Address {
    if (!this.addressesData) this.loadAddressesData();
    const prefecture = getRandomItem(this.addressesData.prefecture);
    const city = getRandomItem(this.addressesData.city);
    const town = getRandomItem(this.addressesData.town);
    return { prefecture, city, town };
  }

  private loadNamesData() {
    const _path = path.join(__dirname, '..', 'data', 'names.yml');
    const str = fs.readFileSync(_path, 'utf8');
    const ymlData: NamesYamlData = parse(str);
    this.namesData = {
      firstNames: {
        male: ymlData.first_name.male.map(parseItem),
        female: ymlData.first_name.female.map(parseItem),
      },
      lastNames: ymlData.last_name.map(parseItem),
    };
  }

  private loadAddressesData() {
    const _path = path.join(__dirname, '..', 'data', 'addresses.yml');
    const str = fs.readFileSync(_path, 'utf8');
    const ymlData: AddressesYamlData = parse(str);
    this.addressesData = {
      prefecture: ymlData.addresses.prefecture.map(parseItem),
      city: ymlData.addresses.city.map(parseItem),
      town: ymlData.addresses.town.map(parseItem),
    };
  }
}

function parseItem(item: string[]): JaVariation {
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
