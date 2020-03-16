import vue from 'rollup-plugin-vue';

export default {
  // Browser build
  input: 'src/wrapper.js',
  output: {
    format: 'iife',
    file: 'dist/index.js'
  },
  plugins: [
    vue()
  ]
}
