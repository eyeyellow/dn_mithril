import vue from 'rollup-plugin-vue';

export default [
  // Browser build
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/index.js'
    },
    plugins: [
      vue()
    ]
  },
  // ES6 module build
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/index.esm.js'
    },
    plugins: [
      vue()
    ]
  },
]
