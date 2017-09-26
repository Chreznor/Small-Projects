<template>
  <div class="place">
    <img :src="img" width="235" height="300"/>
    <slot></slot>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'place',
  props: ['img', 'desc'],
  data () {
    return {
      msg: 'This is a message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
