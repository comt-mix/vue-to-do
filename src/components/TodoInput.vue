<template>
  <div class="text">
    <template v-if="!todo.isEdited">
      <div class="title">{{ todo.title }}</div>
      <div class="content">{{ todo.content }}</div>
    </template>
    <template v-else>
      <input v-model="editData.todoTitle" class="title" />
      <input
        v-model="editData.todoContent"
        class="content"
        @keyup.enter="alertTodo(todo.id)"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      editData: {
        todoTitle: "",
        todoContent: "",
        isEdited: false,
      },
    };
  },
  methods: {
    alertTodo(id) {
      this.$store.commit("editTodo", { id: id, data: this.editData });
      window.alert("수정이 완료되었습니다!");
    },
  },
};
</script>

<style scoped>
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
