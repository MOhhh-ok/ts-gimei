# TS Gimei

TypeScript版、Gimeiです。現在は、名前出力のみです。

以下のデータを使用しています。

https://github.com/willnet/gimei

## インストール

```
npm i @masa-dev/ts-gimei
```

## 使い方

```typescript
import { Gimei } from '@masa-dev/ts-gimei';

const gimei = new Gimei();

// 男女含めランダム
console.log(gimei.person());
// {
//   firstName: { kanji: '映乃', hiragana: 'あきの', katakana: 'アキノ', romaji: 'Akino' },
//   lastName: { kanji: '長田', hiragana: 'ながた', katakana: 'ナガタ', romaji: 'Nagata' },
//   gender: 'female'
// }

// 男性ランダム
console.log(gimei.person({ gender: 'male' }));
// {
//   firstName: { kanji: '朝陽', hiragana: 'あさひ', katakana: 'アサヒ', romaji: 'Asahi' },
//   lastName: { kanji: '上村', hiragana: 'うえむら', katakana: 'ウエムラ', romaji: 'Uemura' },
//   gender: 'male'
// }

// 女性ランダム
console.log(gimei.person({ gender: 'female' }));
// {
//   firstName: { kanji: '千果', hiragana: 'ちか', katakana: 'チカ', romaji: 'Chika' },
//   lastName: { kanji: '亀井', hiragana: 'かめい', katakana: 'カメイ', romaji: 'Kamei' },
//   gender: 'female'
// }
```