<template>
  <button
    @click="completedTodo(todo.id, todo.isCompleted)"
    :class="buttonClass(todo)"
  >
    {{ buttonTitle(todo) }}
  </button>
</template>

<script>
export default {
  props: {
    todo: {},
  },
  methods: {
    completedTodo(id, isCompleted) {
      this.$store.commit("updateTodo", { id, isCompleted });
    },
    buttonTitle(todo) {
      if (todo.isCompleted) {
        return "Complete";
      } else {
        return "Pending";
      }
    },
  },
  computed: {
    buttonClass() {
      return (todo) => {
        if (todo.isCompleted) {
          return "green";
        } else {
          return "red";
        }
      };
    },
  },
};
</script>
<style scoped>
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
