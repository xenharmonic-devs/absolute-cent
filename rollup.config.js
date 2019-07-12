import fs from 'fs'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import ramda from 'rollup-plugin-ramda'

const { name, author, license, version } = JSON.parse(fs.readFileSync('package.json'))
const banner = `// ${name} - created by ${author} - ${license} licence - ${version}`

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'AbsoluteCent',
      file: 'dist/absolute-cent.min.js',
      format: 'iife',
      sourcemap: false
    },
    plugins: [
      resolve({
        mainFields: ['jsnext', 'main']
      }),
      commonjs({
        namedExports: {
          'node_modules/ramda/index.js': Object.keys(require('ramda'))
        }
      }),
      babel(),
      ramda(),
      terser({
        mangle: false,
        output: {
          preamble: banner
        }
      })
    ]
  }
]
