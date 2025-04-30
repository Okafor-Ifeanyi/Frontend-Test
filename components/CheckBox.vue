<template>
    <div class="form-check w-25 mb-2 text-size">
      <input
        class="form-check-input"
        type="checkbox"
        :id="id"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <label class="form-check-label" :for="id">
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckBox',
    props: {
      id: { type: String, required: true },
      label: { type: String, required: true },
      modelValue: { type: Boolean, default: false },
    },
    emits: ['update:modelValue'],
  };
  </script>