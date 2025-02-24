import { gimei } from './index';

// 男女含めランダム
const manOrWoman = gimei.person();

// 男性ランダム
const man = gimei.person({ gender: 'male' });

// 女性ランダム
const woman = gimei.person({ gender: 'female' });

// 住所ランダム
const address = gimei.address();

console.log(manOrWoman);
console.log(man);
console.log(woman);
console.log(address);
