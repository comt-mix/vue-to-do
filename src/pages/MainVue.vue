<template>
  <div class="container">
    <div class="box">
      <div class="text">
        <div class="title">Todo-A</div>
        <div class="sub-title">Project-A</div>
      </div>
      <div class="icon">
        <span><font-awesome-icon icon="fa-solid fa-trash" /></span>
        <span><font-awesome-icon icon="fa-solid fa-pen-to-square" /></span>
      </div>
      <button class="bottom-button">Pending</button>
    </div>
    <button class="plus-button"><font-awesome-icon icon="fa-solid fa-plus" /></button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "todo",
    }
  }
}
</script>

<style>
span {
  margin-left: 1rem;
}
.contanier {
  width: 100%;
}
.box {
  width: 30%;
  text-align: left;
  margin: 0 auto;
  border: 2px solid #d3d3d3;
  border-radius: 0.6rem;
}
.text{
  margin: 1rem;
}
.title{
  font-size: 1.4rem;
  font-weight: bold;
}
.sub-title{
  font-size: 1.1rem;
  color: gray;
}
.icon{
  text-align: right;
  margin: 1rem;
}
.bottom-button {
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
.plus-button{
  margin-top: 2rem;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.6rem;
  border: 2px solid #d3d3d3;
  background-color: white;
}

</style>