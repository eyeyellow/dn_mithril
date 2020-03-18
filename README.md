## Overview

This is my first attempt at creating a build system for our in-house component library at DocNetwork. The goal with this one is to have a build system setup with [rollup.js](https://rollupjs.org/) and the [rollup-plugin-vue](https://rollup-plugin-vue.vuejs.org/) that allows us to bundle our Vue components.

This setup currently allows us to output two bundles - an iife and an ES6 module.

## Testing Instructions

Each of the two bundles have slightly different testing instructions.

### IIFE Build

To test to see if this works in a plain old html file, you can include Vue in a `<script>` tag that loads it as a peer dependency from some CDN, as well as another `<script>` tag that loads the library from `dist/mithril.js` (not the ESM version).

Below is an example of that HTML file that includes the `MInputText` component a test to see if it can be used in a Vue instance on the page:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello DN Mithril</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>

<!-- Vue as a peer dependency from a CDN -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- The Mithril library (iife version) -->
<script src="./mithril/dist/mithril.js"></script>

<!-- Test Vue component -->
<script>
  const app = new Vue({
    el: '#app',
    data: {
      model: 'Hey' 
    },
    template: `
      <MInputText label="Hello Mithril" v-model="model" />
    `
  })
</script>

```

### ES6 Module (ESM) Build

To test if this works as an ES6 module, there's a [test application](https://github.com/eyeyellow/dn_mithril_test_app) that I built for serving some code that uses the library.
