<template>
  <div class="test">
    <input type="text" v-model="user.lastName">
    <h1>{{user.firstName}} {{user.lastName}}</h1>
    <h2>{{(numbers.second - numbers.first) * 10}}</h2>
    <button v-on:click="changeName">Change Name</button>
  </div>
</template>

<script>
  export default {
    name: 'Ahmazing',
    data() {
      return {
        user: {
          firstName: 'Jack',
          lastName: 'Crow'
        },
        numbers: {
          first: 1,
          second: 5
        }
      }
    },
    methods: {
      changeName: function() {
        this.user.firstName = `${document.querySelector('input').value} Moneyball`;
      }
    }
  }
</script>

<style scoped>
  .test {
    display: flex;
    flex-direction: column;
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
  }
</style>
