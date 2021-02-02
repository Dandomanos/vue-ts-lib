<template>
  <button class="red-button" type="button" name="red-button">
    Red Button
  </button>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BlueButton extends Vue {}
</script>

<style lang="scss">
.red-button {
  background-color: rgb(228, 90, 26);
}
</style>
