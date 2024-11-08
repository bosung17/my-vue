<template>
  <div>
    <h3>부모 컴포넌트</h3>
		<ParentChild @update-name="updateName" @some-event="soemCallback" @emit-args="getNumber"
    my-msg="message" :dynamic-name="name"/>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
	import ParentChild from './ParentChild.vue';
  const name = ref("Kim")
  const soemCallback = function(){
    console.log("어떠한 이벤트가 발생했습니다.")
  }
  const getNumber= function(...args){
    console.log(args)
  }
  const updateName = function(newName){
    name.value = newName;
  }
  // 오늘 여기는 읽으면 좋다!
  // vuejs -> 컴포넌트 심화 -> Props 읽어보기
</script>

<style scoped>

</style>