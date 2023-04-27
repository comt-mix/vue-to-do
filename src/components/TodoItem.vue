<template>
  <div class="box">
    <div class="text">
      <input v-model="title" class="title" /> 
      <input v-model="content" class="content" /> 
    </div>
    <div class="icon">
      <span @click="removeTodo(index)"
        ><font-awesome-icon icon="fa-solid fa-trash"
      /></span>
      <span @click="updateTodo"
        ><font-awesome-icon icon="fa-solid fa-pen-to-square"
      /></span>
    </div>
    <button @click="completedTodo()" :class="buttonClass">
      {{ buttonTitle }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {},
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {
    this.id = this.todoItem.id;
    this.title = this.todoItem.title;
    this.content = this.todoItem.content;
  },
  methods: {
    removeTodo() {
      //   this.list.splice(index, 1);
    },

    updateTodo() {
      //   console.log(this.todoList);
    },

    completedTodo() {
      this.$emit("completedTodo", this.todoItem.id);
    },
  },
  computed: {
    buttonTitle() {
      if (this.todoItem.isCompleted) {
        return "Completed";
      } else {
        return "Pending";
      }
    },
    buttonClass() {
      if (this.todoItem.isCompleted) {
        return "green";
      } else {
        return "red";
      }
    },
  },
};
</script>

<style></style>
