<template>
  <div class="container">
    <InputText></InputText>
    <TodoList></TodoList>
  </div>
</template>

<script>
import InputText from "@/components/AddInput.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    InputText,
    TodoList,
  },
};
</script>

<style>
.contanier {
  width: 100%;
}
</style>
