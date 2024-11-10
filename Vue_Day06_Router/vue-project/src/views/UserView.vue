<template>
  <div>
    <h3>UserView</h3>
    <!-- 이렇게는 권장하지 X -->
    <p>{{ $route.params.id }}</p>
    <!-- 이렇게 하는 걸 권장 -->
    <p>{{ userId }}</p>
    <p>{{ userId2 }}</p>

    <button @click="goHome">홈으로</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

  const route = useRoute()
  const router = useRouter()

  const userId = ref(route.params.id)
  const userId2 = ref(route.params.id)

  watch(()=>route.params.id,(newId)=>{
    userId.value=newId
  })

  const goHome = function(){
    // 직접 url 경로를 작성할 수 있음
    // router.push('/')
    // 이름으로 호출도 가능
    router.push({name: 'about'})
    // router.replace({name: 'home'})
  }

  onBeforeRouteLeave(()=>{
    const answer = confirm("정말로 떠나실 건가요?")
    console.log(answer)
    return answer
  })

  onBeforeRouteUpdate((to)=>{
    userId2.value = to.params.id
  })

</script>
<style scoped>

</style>