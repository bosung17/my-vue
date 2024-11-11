import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
  let id = 0

  // state
  const todos = ref([
    {id: id++, text: '잠자기', isDone: false},
    {id: id++, text: '밥먹기', isDone: false},
    {id: id++, text: '뷰 복습하기', isDone: false},
  ])

  // action
  const addTodo = function(todoText){
    todos.value.push({ // push : 맨 뒤에 붙이는 js 배열 메서드
      id: id++,
      text: todoText, // 만약 파라미터 명을 text로 했다면 es6 문법으로 text, 이렇게 써도 가능
      isDone: false,
    })
  }

  const deleteTodo = function(id){
    const idx = todos.value.findIndex((todo) => {
      return todo.id === id
    })

    todos.value.splice(idx, 1)
  }

  const updateTodo = function(id){
    todos.value = todos.value.map((todo)=>{
      if(todo.id == id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })
  }

  // getters
  const doneTodoCount = computed(()=>{
    return todos.value.filter((todo)=>{
      return todo.isDone
    }).length
  })
  const todoCount = computed(()=>{
    return todos.value.length
  })

  return { todos, addTodo, deleteTodo, updateTodo, doneTodoCount, todoCount }
}, {persist:true})