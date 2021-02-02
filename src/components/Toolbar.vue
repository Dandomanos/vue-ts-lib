<template>
  <div class="toolbar">
    <blue-button />
    <red-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BlueButton from './BlueButton.vue'
import RedButton from './RedButton.vue'

@Component({
  components: {
    BlueButton,
    RedButton
  }
})
export default class Toolbar extends Vue {}
</script>
