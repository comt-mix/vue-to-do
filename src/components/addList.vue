<template>
  <div>
    <li v-for="(todo, index) in list" :key="index">
      <TodoItem :todoItem="todo" @completedTodo="completedTodo"></TodoItem>
    </li>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  props: {
    todoList: [],
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.list = [...this.todoList];
  },
  methods: {
    removeTodo(index) {
      this.list.splice(index, 1);
    },

    updateTodo() {
      console.log(this.todoList);
    },

    completedTodo(id) {
      this.list = this.list.map((el) => {
        if (el.id === id) {
          el.isCompleted = !el.isCompleted;
        }
        return el;
      });
    },
  },
};
</script>

<style></style>
