<template>
	<common-page />
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from "../components/CommonPage";

			@Component({
				components: {CommonPage}
			})
export default class Home extends Vue {

			}
</script>

<style scoped	lang="scss"	/>
