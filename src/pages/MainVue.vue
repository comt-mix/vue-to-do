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

    <li v-for="(todo, index) in todoList" :key="index">
      <div class="box">
        <div class="text">
          <input v-model="todo.title" class="title" />
          <input v-model="todo.content" class="content" />
        </div>
        <div class="icon">
          <span @click="removeTodo(index)"
            ><font-awesome-icon icon="fa-solid fa-trash"
          /></span>
          <span @click="updateTodo"
            ><font-awesome-icon icon="fa-solid fa-pen-to-square"
          /></span>
        </div>
        <button @click="completedTodo()" :class="changeColor(isCompleted)">
          {{ isCompleted ? "Completed" : "Pending" }}
        </button>
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
      isCompleted: false,
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        title: this.title,
        content: this.content,
        isCompleted: false,
      });
      (this.title = ""), (this.content = "");
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    updateTodo() {
      console.log(this.todoList);
    },
    completedTodo() {
      this.isCompleted = !this.isCompleted;
      console.log(this.todoList.isCompleted);
    },
    changeColor(isCompleted) {
      if (isCompleted) return "green";
      return "red";
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
.plus-button {
  margin-top: 2rem;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.6rem;
  border: 2px solid #d3d3d3;
  background-color: white;
}
.green {
  width: 100%;
  margin: 0 auto;
  padding: 0.6rem;
  border-style: none;
  color: green;
  border: 3px solid green;
  background-color: white;
  font-size: 1.2rem;
  border-radius: 0 0 0.6rem 0.6rem;
}
.red {
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
</style>
