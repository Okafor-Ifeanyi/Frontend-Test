<template>
  <button class="btn py-3 px-4 btn-hover-custom" :style="buttonStyle">
    <span v-html="icon"></span>
    <span class="mx-3 ">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'DashButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    buttonStyle() {
      return {
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        color: '#A0A0A0',
        padding: '8px 16px',
        borderRadius: '0px',
        fontSize: '14px',
      };
    },
  },
};
</script>

<style scoped>
.btn i {
  margin-right: 8px; /* Space between icon and text */
}
</style>