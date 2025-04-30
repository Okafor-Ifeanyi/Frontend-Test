<script setup lang="ts">
interface Props {
  name: string
  id: string
  label: string
}

const { name, id, label } = defineProps<Props>()
const modelValue = defineModel<string>()
</script>

<template>
  <div class="form-check w-25 mb-2 text-size">
    <input
      class="form-check-input"
      :name="name"
      type="radio"
      :id="id"
      :value="id.toString()"
      v-model="modelValue"
    />
    <label class="form-check-label" :for="id">
      {{ label }}
    </label>
  </div>
</template>