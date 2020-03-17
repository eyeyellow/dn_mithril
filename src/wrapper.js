import * as components from './mithril';

if (typeof Vue !== 'undefined') {
  for (const name in components) {
    Vue.component(name, components[name])
  }
}
