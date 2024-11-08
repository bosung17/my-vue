<template>
  <div>
    <h4>자식 컴포넌트</h4>
		<p>{{ myMsg }}</p>
		<p v-text="myMsg"></p>
		<p>{{ dynamicName }}</p>
		<hr>
		<!-- 버튼 누를 때마다 부모에게 someEvent라는 요청 보냄 -->
		<button @click="$emit('someEvent')">부모전송</button>
		<button @click="buttonClick">부모전송2</button>
		<button @click="emitArgs">추가인자전달</button>
		<hr>
		<ParentGrandChild @update-name="updateName" :my-msg="myMsg"/>
  </div>
</template>

<script setup>
	// 부모로부터 받은 props 사용하기 위한 방법 2가지

	// 1.
	// defineProps(['myMsg'])

	// 2.
	// props = defineProps({
	// 	myMsg:String,
	// })

	// 얘는 props에 저장하는 거 까지
	const props = defineProps({
		myMsg: String,
		dynamicName: String,
	})
	console.log(props.myMsg)

	import ParentGrandChild from './ParentGrandChild.vue';

	// 이거 왜 있는거지..? 잘못들음
	const emit = defineEmits(["someEvent", "emitArgs" ,"updateName"])

	const buttonClick = function(){
		emit("someEvent")
	}

	const emitArgs = function(){
		emit("emitArgs", 1, 2, 3)
	}

	const updateName = function(name){
		console.log(name)
		emit("updateName", name)
	}
</script>

<style scoped>

</style>