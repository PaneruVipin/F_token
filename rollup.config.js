import babel from "@rollup/plugin-babel";
// import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const plugins = [
  external(),
  resolve({ extensions }),
  babel({ extensions, babelHelpers: "bundled" }),
  // commonjs(),
//   terser(),

];

export default [
  {
    input: "src/FT.js",
    output: [
      {
        file: "dist/FT.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/FT.esm.js",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins,
    external: ['react'],
  },
];
