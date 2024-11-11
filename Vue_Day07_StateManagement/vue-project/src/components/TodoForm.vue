<template>
  <div>
    <h4>TodoForm</h4>
    <!-- trim: model 내 메서드로 빈 칸 없애주기, 아래에 써도 되는데 model에 있으니까 쓰기 -->
    <!-- @keyup.enter: 엔터 눌러도 메서드 실행할 수 있게 함 -->
    <input type="text" v-model.trim="todoText" @keyup.enter="createTodo">
    <button @click="createTodo">등록</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTodosStore } from '@/stores/todos';

  const todoText = ref("")
  const store = useTodosStore()

  const createTodo = function() {
    if (todoText.value){
      store.addTodo(todoText.value)
      todoText.value=''
    }
    else{
      alert('공백 불가')
    }
  }
</script>

<style scoped>

</style>