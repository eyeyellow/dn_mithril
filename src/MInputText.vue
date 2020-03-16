<template>
  <label>
    <span :class="labelClasses">{{ label }}</span>
    <!--
      The inner 'input' event has to be propagated by our component as another
      'input' event with the value's payload so that the outer v-model picks it up.
     -->
    <input
      class="m-input"
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="textInput"
    >
  </label>
</template>

<script>
/**
 * The base text input component for the Mithril design system.
 *
 * @vue-prop {String} value - The value prop to be bound to the input element's
 *   value attribute - to be handed by an outer v-model of the parent component
 *
 * @vue-prop {String} label - The text to display on the input's label
 *
 * @vue-prop {Array} labelClasses - The classes to apply to the label span element
 *    - should be an array of strings of class names
 *
 * @vue-prop {Boolean} autofocus - Will focus on the input if set to `true`
 *    - use this with caution as it can cause accessibility concerns
 *
 */
  export default {
    name: 'm-text-input',
    inheritAttrs: false,
    props: {
      value: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      labelClasses: {
        type: Array,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      }
    },
    mounted() {
      if (this.autofocus) this.$refs.textInput.focus();
    }
  };
</script>
