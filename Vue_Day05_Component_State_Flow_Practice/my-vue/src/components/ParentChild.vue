<template>
  <div>
    <h3>자식컴포넌트입니다</h3>
    {{ myMsg }}
    <!-- <button @click="$emit('sendMom')">click</button> -->
  </div>
</template>

<script setup>
  defineProps({
    myMsg:String,
  })
</script>

<style scoped>

</style>