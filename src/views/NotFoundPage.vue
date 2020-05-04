<template>
		<common-page>
			<template v-slot:headline>
				<div class="not-found">
					<h1 class="visually-hidden">
						Страница не найдена
					</h1>
				</div>
			</template>
		</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from "../components/CommonPage";

  @Component({
  	components: {CommonPage}
  })
export default class NotFoundPage extends Vue {

  }
</script>

<style scoped	lang="scss">
  .not-found {
    width: 100%;
    background-image: url("../assets/img/404.jpg");
    background-size: cover;
  }
</style>
