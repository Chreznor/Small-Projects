<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name">
      <br>
      <input type="text" v-model="newUser.email" placeholder="Enter Email">
      <br>
      <input type="submit" value="Submit">
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
    <test></test>
  </div>

</template>

<script>
import Test from './Test'
export default {
  components: {
    Test
  },
  name: 'hi',
  data () {
    return {
      newUser: {},
      msg: 'This is great',
      users: []
    }
  },
  methods: {
    addUser: function(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false
      })
      e.preventDefault();
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created: function() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        let data = res.data;
        console.log(data)
        data.map(dat => dat['contacted'] = false);
        this.users = data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

.contacted {
  text-decoration: line-through;
}
</style>
