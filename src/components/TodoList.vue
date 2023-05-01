<template>
  <div>
    <li v-for="todo in $store.state.todoList" :key="todo.id">
      <div class="box">
        <ListInput :todo="todo"></ListInput>
        <ListIcon :todo="todo"></ListIcon>
        <button
          @click="completedTodo(todo.id, todo.isCompleted)"
          :class="buttonClass(todo)"
        >
          {{ buttonTitle(todo) }}
        </button>
      </div>
    </li>
  </div>
</template>

<script>
import ListInput from "./ListInput.vue";
import ListIcon from "./ListIcon.vue";

export default {
  components: {
    ListInput,
    ListIcon,
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
span {
  margin-left: 1rem;
}
input {
  border-radius: 0.4rem;
}
li {
  list-style: none;
}
.box {
  width: 30%;
  text-align: left;
  margin: 0 auto;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
.title {
  font-size: 1.4rem;
  font-weight: bold;
}
.content {
  font-size: 1.1rem;
  color: gray;
}
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
