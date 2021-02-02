<template>
  <button class="blue-button" type="button" name="blue-button">
    Blue Button
  </button>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BlueButton extends Vue {}
</script>

<style lang="scss">
.blue-button {
  background-color: cyan;
}
</style>
