<template>
  <div>
    <li v-for="todo in todoList" :key="todo.id">
      <TodoList :todo="todo"></TodoList>
    </li>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoList,
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
