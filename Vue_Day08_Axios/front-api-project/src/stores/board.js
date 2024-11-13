import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_API_URL = `http://localhost:8080/api-board/board`

export const useBoardStore = defineStore('board', () => {

  const boardList = ref([]) // 게시글 목록을 스토어에서 관리하겠다

  const getBoardList = function() {
    axios.get(REST_API_URL)
    .then((response)=>{
      // console.log(response.data)
      boardList.value = response.data
    })
  }

  const createBoard = function(board){
    // console.log(board)
    axios({
      url: REST_API_URL,
      method: 'POST',
      // JSON 형태로 바꿔주지 않아도 application/json 알아서 이게 적용이 됨
      data: board,
    })
    .then(()=>{
      console.log("완료")
      router.push({name: 'boardList'})
    })
    .catch(()=>{
      console.log("실패")
    })
  }
  
  return { boardList, getBoardList, createBoard }
})
