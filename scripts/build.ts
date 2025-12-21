import dts from "bun-plugin-dts";

async function build() {
  await Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "dist",
    splitting: true,
    plugins: [dts()],
  });
}

build();
