<template>
  <div class="text">
    <input v-model="todo.title" placeholder="title" class="title" />
    <input v-model="todo.content" placeholder="content" class="content" />
    <button @click="addTodo" class="plus-button">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("todo", { ...this.todo });
      (this.todo.title = ""), (this.todo.content = "");
    },
  },
};
</script>

<style>
input {
  border-radius: 0.4rem;
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
</style>
