<template>
	<input type="checkbox" value="foo" v-model="isChecked">
</template>

<script>
	import { Vue, Component} from 'vue-property-decorator';

	@Component({})
  export default class Checkbox extends Vue {
	  isChecked
  }
</script>

<style scoped>

</style>
