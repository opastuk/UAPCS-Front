<template>
	<common-page>
		<template v-slot:headline>
			<div class="not-found">
				<h1 class="not-found__headline">
					404 <br />
					Страница не найдена
				</h1>
				<img
					class="not-found__img"
					src="../assets/img/404.svg"
					alt="404 Страница не найдена"
					height="700px"
				/>
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
    position: relative;
    &__headline {
      width: 100%;
      font-size: 70px;
      line-height: 150px;
      text-align: center;
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translate(-50%);
      @include reset-text();
    }
    &__img {
      display: block;
      margin: 0 auto;
    }
  }
</style>
