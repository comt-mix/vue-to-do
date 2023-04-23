<template>
  <div class="container">
    <div class="add-box">
      <div class="text">
        <input v-model="title" placeholder="title" class="title" />
        <input v-model="content" placeholder="content" class="content" />
        <button @click="addTodo" class="plus-button">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>

    <li v-for="(todo, index) in todoList" v-bind:key="index">
      <div class="box">
        <div class="text">
          <input v-model="todo.title" class="title" />
          <input v-model="todo.content" class="content" />
        </div>
        <div class="icon">
          <span><font-awesome-icon icon="fa-solid fa-trash" /></span>
          <span><font-awesome-icon icon="fa-solid fa-pen-to-square" /></span>
        </div>
        <button class="bottom-button">Pending</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        title: this.title,
        content: this.content,
      });
      (this.title = ""), (this.content = "");
    },
  },
};
</script>

<style>
span {
  margin-left: 1rem;
}
input {
  border-radius: 0.4rem;
}
li {
  list-style: none;
}
.contanier {
  width: 100%;
}
.add-box {
  width: 30%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
.add-box input {
  border: 2px solid #d3d3d3;
}
.box {
  width: 30%;
  text-align: left;
  margin: 0 auto;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
.box input {
  border-style: none;
}
.text {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.title {
  font-size: 1.4rem;
  font-weight: bold;
}
.content {
  font-size: 1.1rem;
  color: gray;
}
.icon {
  text-align: right;
  margin: 1rem;
}
.bottom-button {
  width: 100%;
  margin: 0 auto;
  padding: 0.6rem;
  border-style: none;
  color: tomato;
  border: 3px solid tomato;
  background-color: white;
  font-size: 1.2rem;
  border-radius: 0 0 0.6rem 0.6rem;
}
.plus-button {
  margin-top: 2rem;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.6rem;
  border: 2px solid #d3d3d3;
  background-color: white;
}
</style>
