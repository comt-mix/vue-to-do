<template>
  <div>
    <li v-for="todo in $store.state.todoList" :key="todo.id">
      <div class="box">
        <div class="text">
          <input v-model="todo.title" class="title" />
          <input v-model="todo.content" class="content" />
        </div>
        <div class="icon">
          <span @click="deleteTodo(todo.id)"
            ><font-awesome-icon icon="fa-solid fa-trash"
          /></span>
          <span><font-awesome-icon icon="fa-solid fa-pen-to-square" /></span>
        </div>
        <button
          @click="completedTodo(todo.id, todo.isCompleted)"
          :class="todo.isCompleted ? 'green' : 'red'"
        >
          {{ buttonTitle(todo) }}
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoTitle: "",
      todoContent: "",
    };
  },
  methods: {
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
    completedTodo(id, isCompleted) {
      this.$store.commit("updateTodo", { id, isCompleted });
    },
    buttonTitle(todo) {
      return todo.isCompleted ? "Complete" : "Pending";
    },
  },
  computed: {
    buttonClass() {
      return this.$store.state.todoList.isCompleted ? "green" : "red";
    },
  },
};
</script>

<style scoped>
span {
  margin-left: 1rem;
}
input {
  border-radius: 0.4rem;
}
li {
  list-style: none;
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
