<template>
  <div class="add-box">
    <div class="text">
      <input v-model="todo.title" placeholder="title" class="title" />
      <input v-model="todo.content" placeholder="content" class="content" />
      <button @click="addTodo" class="plus-button">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
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
    initTodo() {
      this.todo = {
        title: "",
        content: "",
      };
    },
    addTodo() {
      this.$store.commit("todo", { ...this.todo });
      this.initTodo();
    },
  },
};
</script>

<style scoped>
.add-box {
  width: 30%;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
.add-box input {
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
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
  font-size: 1rem;
  color: gray;
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
