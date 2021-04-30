<template>
    <button @click="isWorkingModalVisible = true">Open Modal (WORKING example)</button>
    <button @click="isBrokenModalVisible = true">Open Modal (BROKEN example)</button>
	<VueFinalModal
		v-model="isWorkingModalVisible"
		:esc-to-close="true"
		:ssr="true"
        :content-class="'modal-body'"
        transition="fade-up"
	>
		<template #default>
            Modal
		</template>
	</VueFinalModal>
    <VueFinalModal
		v-model="isBrokenModalVisible"
		:esc-to-close="true"
		:ssr="true"
        :content-class="['modal-body']"
        transition="fade-up"
	>
		<template #default>
            Modal
		</template>
	</VueFinalModal>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',

  setup() {
      const isWorkingModalVisible = ref(false);
      const isBrokenModalVisible = ref(false);

      return {
          isWorkingModalVisible,
          isBrokenModalVisible,
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.modal-body {
    background-color: white;
    padding: 64px;
    width: 200px;
    margin: 0 auto;
}

.fade-up-enter-active,
.fade-up-leave-active {
	transition: .3s;
}

.fade-up-enter-from,
.fade-up-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
</style>
