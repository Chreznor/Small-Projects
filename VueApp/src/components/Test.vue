<template>
  <div class="test">
    <ul>
      <router-link to="/ahmazing">
        <li v-for="title in titles">{{title}}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        titles: ['Ahmazing', 'Yeah', 'Great']
      }
    }
  }
</script>

<style scoped>
  .test {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border: 2px solid #4f4f4f;
    box-shadow: 0 10px 20px black;
  }

  ul {
    padding: 0;
  }

  ul:hover {
    border: 4px dotted yellow;
    cursor: pointer;
  }

  li {
    list-style: none;
    color: black;
    text-decoration: none;
  }
</style>
