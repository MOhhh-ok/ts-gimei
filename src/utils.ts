export const GENERATED_DIR_NAME = "generated";
export const GENERATED_NAMES_FILE_NAME = "names.json";
export const GENERATED_ADDRESSES_FILE_NAME = "addresses.json";

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
