<template>
  <div class="box">
    <TodoInput :todo="todo"></TodoInput>
    <TodoIcon :todo="todo"></TodoIcon>
    <TodoButton :todo="todo"></TodoButton>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoIcon from "./TodoIcon.vue";
import TodoButton from "./TodoButton.vue";

export default {
  props: {
    todo: {},
  },
  components: {
    TodoInput,
    TodoIcon,
    TodoButton,
  },
};
</script>

<style scoped>
.box {
  width: 30%;
  text-align: left;
  margin: 0 auto;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
</style>
