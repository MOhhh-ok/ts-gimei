import fs, { mkdir } from "fs-extra";
import path from "path";
import { parse } from "yaml";
import { AddressesData, AddressesYamlData, JapaneseNotation, NamesData, NamesYamlData } from "./../src/types";
import { GENERATED_ADDRESSES_FILE_NAME, GENERATED_DIR_NAME, GENERATED_NAMES_FILE_NAME } from "./../src/utils";

const outputDir = path.join(__dirname, "..", GENERATED_DIR_NAME);
if (!fs.existsSync(outputDir)) {
  mkdir(outputDir);
}

generate();

async function generate() {
  const namesData = getNamesData();
  const addressesData = getAddressesData();

  await Promise.all([
    fs.writeFile(path.join(outputDir, GENERATED_NAMES_FILE_NAME), JSON.stringify(namesData)),
    fs.writeFile(path.join(outputDir, GENERATED_ADDRESSES_FILE_NAME), JSON.stringify(addressesData)),
  ]);
}

/////////

function getNamesData(): NamesData {
  const ymlData: NamesYamlData = getYamlData("names.yml");
  return {
    firstNames: {
      male: ymlData.first_name.male.map(arrToItem),
      female: ymlData.first_name.female.map(arrToItem),
    },
    lastNames: ymlData.last_name.map(arrToItem),
  };
}

function getAddressesData(): AddressesData {
  const ymlData: AddressesYamlData = getYamlData("addresses.yml");
  return {
    prefecture: ymlData.addresses.prefecture.map(arrToItem),
    city: ymlData.addresses.city.map(arrToItem),
    town: ymlData.addresses.town.map(arrToItem),
  };
}

function getYamlData(fileName: string) {
  const _path = getYamlPath(fileName);
  const str = fs.readFileSync(_path, "utf8");
  return parse(str);
}

function getYamlPath(fileName: string) {
  return path.join(__dirname, "..", "data", fileName);
}

function arrToItem(arr: string[]): JapaneseNotation {
  const [kanji, hiragana, katakana, romaji] = arr;
  return {
    kanji,
    hiragana,
    katakana,
    romaji,
  };
}
