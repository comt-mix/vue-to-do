import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        title: "111",
        content: "1",
        isCompleted: false,
        isEdited: false,
      },
      {
        id: 2,
        title: "222",
        content: "2",
        isCompleted: false,
        isEdited: false,
      },
      {
        id: 3,
        title: "333",
        content: "3",
        isCompleted: false,
        isEdited: false,
      },
    ],
  },
  mutations: {
    todo(state, payload) {
      state.todoList.push({
        id: state.todoList[state.todoList.length - 1].id + 1,
        title: payload.title,
        content: payload.content,
        isCompleted: false,
        isEdited: false,
      });
    },

    deleteTodo(state, payload) {
      const update = state.todoList.filter((el) => el.id !== payload);

      return (state.todoList = update);
    },

    updateTodo(state, payload) {
      state.todoList.map((todo) => {
        if (todo.id === payload.id) {
          return (todo.isCompleted = !todo.isCompleted);
        }
      });
    },

    editTodo(state, payload) {
      const todo = state.todoList.find((list) => list.id === payload.id);

      todo.title = payload.data.todoTitle;
      todo.content = payload.data.todoContent;
      todo.isEdited = false;
    },
  },
  actions: {
    //비동기처리
  },
  getters: {},
});
