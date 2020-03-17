import vue from 'rollup-plugin-vue';

export default [
  // Browser build
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/mithril.js'
    },
    plugins: [
      vue()
    ]
  },
  // ES6 module build
  {
    input: 'src/mithril.js',
    output: {
      format: 'esm',
      file: 'dist/mithril.esm.js'
    },
    plugins: [
      vue()
    ]
  },
]
