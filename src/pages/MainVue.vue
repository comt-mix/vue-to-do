<template>
  <div class="container">
    <AddInput></AddInput>
    <TodoLists></TodoLists>
  </div>
</template>

<script>
import AddInput from "@/components/AddInput.vue";
import TodoLists from "@/components/TodoLists.vue";

export default {
  components: {
    AddInput,
    TodoLists,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
