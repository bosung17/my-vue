<template>
  <div>
    <h2>Parent.vue입니다.</h2>
    <ParentChild @send-mom="doSomething" my-msg="나는 부모다"/>
  </div>
</template>

<script setup>
import ParentChild from './ParentChild.vue';
const doSomething = function() {
  console.log("하이")
}
</script>

<style scoped>

</style>