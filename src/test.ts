import { gimei } from './index';

// 男女含めランダム
console.log(gimei.person());
// {
//   firstName: {
//     kanji: '夏弥',
//     hiragana: 'かや',
//     katakana: 'カヤ',
//     romaji: 'Kaya',
//   },
//   lastName: {
//     kanji: '栗原',
//     hiragana: 'くりはら',
//     katakana: 'クリハラ',
//     romaji: 'Kurihara',
//   },
//   gender: 'female',
// };

// 男性ランダム
console.log(gimei.person({ gender: 'male' }));
// {
//   firstName: {
//     kanji: '大河',
//     hiragana: 'たいが',
//     katakana: 'タイガ',
//     romaji: 'Taiga',
//   },
//   lastName: {
//     kanji: '竹内',
//     hiragana: 'たけうち',
//     katakana: 'タケウチ',
//     romaji: 'Takeuchi',
//   },
//   gender: 'male',
// };

// 女性ランダム
console.log(gimei.person({ gender: 'female' }));
// {
//   firstName: {
//     kanji: '花来',
//     hiragana: 'はる',
//     katakana: 'ハル',
//     romaji: 'Haru',
//   },
//   lastName: {
//     kanji: '根本',
//     hiragana: 'ねもと',
//     katakana: 'ネモト',
//     romaji: 'Nemoto',
//   },
//   gender: 'female',
// };

// 住所ランダム
console.log(gimei.address());
// {
//   prefecture: {
//     kanji: '埼玉県',
//     hiragana: 'さいたまけん',
//     katakana: 'サイタマケン',
//     romaji: 'Saitamaken'
//   },
//   city: {
//     kanji: '柴田郡川崎町',
//     hiragana: 'しばたぐんかわさきまち',
//     katakana: 'シバタグンカワサキマチ',
//     romaji: 'Shibatagunkawasakimachi'
//   },
//   town: {
//     kanji: '和見町',
//     hiragana: 'わみまち',
//     katakana: 'ワミマチ',
//     romaji: 'Wamimachi'
//   }
// }
