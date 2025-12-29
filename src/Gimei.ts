import { Address, AddressesData, Gender, NamesData, Person } from "./types.js";
import { getRandomItem } from "./utils.js";

export class Gimei {
  private namesData: NamesData | undefined;
  private addressesData: AddressesData | undefined;

  async person(params?: { gender?: Gender }): Promise<Person> {
    await this.ensureNamesData();
    const gender = params?.gender ?? getRandomItem(["male", "female"]);
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

  async address(): Promise<Address> {
    await this.ensureAddressesData();
    const prefecture = getRandomItem(this.addressesData.prefecture);
    const city = getRandomItem(this.addressesData.city);
    const town = getRandomItem(this.addressesData.town);
    return { prefecture, city, town };
  }

  private async ensureNamesData() {
    if (this.namesData) return;
    const data = await import("../generated/names.json");
    this.namesData = data.default;
  }

  private async ensureAddressesData() {
    if (this.addressesData) return;
    const data = await import("../generated/addresses.json");
    this.addressesData = data.default;
  }
}
