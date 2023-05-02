<template>
  <div class="icon">
    <span @click="deleteTodo(todo.id)"
      ><font-awesome-icon icon="fa-solid fa-trash"
    /></span>
    <span @click="editTodo(todo)"
      ><font-awesome-icon icon="fa-solid fa-pen-to-square"
    /></span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {},
  },
  data() {
    return {};
  },
  methods: {
    deleteTodo(id) {
      this.$store.commit("deleteTodo", id);
    },
    editTodo(todo) {
      todo.isEdited = true; // props의 todo와 naming이 겹침
    },
  },
};
</script>

<style scoped>
span {
  margin-left: 1rem;
}
.icon {
  text-align: right;
  margin: 1rem;
}
</style>
