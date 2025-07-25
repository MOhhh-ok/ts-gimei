# TS Gimei

TypeScript版、Gimeiです。日本人の名前、住所をランダムで生成します。

漢字、ひらがな、カタカナ、ローマ字を出力します。

以下のデータを使用しています。

https://github.com/willnet/gimei

## インストール

```
npm i ts-gimei
```

## 使い方

### ランダム人物名

人物名をランダムに取得します。

```typescript

// 男女含めランダム
const manOrWoman = gimei.person();

// 男性ランダム
const man = gimei.person({ gender: 'male' });

// 女性ランダム
const woman = gimei.person({ gender: 'female' });
```

### 人物名の結果例

```typescript
{
  firstName: {
    kanji: '夏弥',
    hiragana: 'かや',
    katakana: 'カヤ',
    romaji: 'Kaya',
  },
  lastName: {
    kanji: '栗原',
    hiragana: 'くりはら',
    katakana: 'クリハラ',
    romaji: 'Kurihara',
  },
  gender: 'female',
};
```

### ランダム住所

仮の住所をランダムに取得します。

```typescript
// 住所ランダム
const address = gimei.address();
```

### 住所の結果例

```typescript
{
  prefecture: {
    kanji: '埼玉県',
    hiragana: 'さいたまけん',
    katakana: 'サイタマケン',
    romaji: 'Saitamaken'
  },
  city: {
    kanji: '柴田郡川崎町',
    hiragana: 'しばたぐんかわさきまち',
    katakana: 'シバタグンカワサキマチ',
    romaji: 'Shibatagunkawasakimachi'
  },
  town: {
    kanji: '和見町',
    hiragana: 'わみまち',
    katakana: 'ワミマチ',
    romaji: 'Wamimachi'
  }
}
```

## ライセンス

MIT