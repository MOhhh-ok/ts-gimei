import gimei from "./index.js";

async function test() {
  // 男女含めランダム
  const manOrWoman = await gimei.person();

  // 男性ランダム
  const man = await gimei.person({ gender: "male" });

  // 女性ランダム
  const woman = await gimei.person({ gender: "female" });

  // 住所ランダム
  const address = await gimei.address();

  console.log({ manOrWoman });
  console.log({ man });
  console.log({ woman });
  console.log({ address });
}

test();
