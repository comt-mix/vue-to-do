<template>
      <li v-for="(todo, index) in {todoList}" :key="index">
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
        <button @click="completedTodo(todo.title, index)" :class="changeColor(isCompleted)">
          {{ isCompleted ? "Completed" : "Pending" }}
        </button>
      </div>
    </li>
</template>

<script>
export default {
  data() {
    return {
      todoList: [{
        title: "111",
        content: "1",
        isCompleted: false,
      }, {
        title: "222",
        content: "2",
        isCompleted: false,
      }, {
        title: "333",
        content: "3",
        isCompleted: false,
      }],
    };
  },
  methods: {},
  props: {
    todoList: Array,
  }
};
</script>

<style></style>
