<template>
	<common-page>
		<template v-slot:headline>
			<h1 class="my-appeal__headline">
				Мои обращения
			</h1>
		</template>
		<template v-slot:content />
	</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';

  @Component({
  	components: {
  		'common-page': CommonPage,
  	}
  })
export default class MyAppealPage extends Vue {

  }
</script>

<style scoped lang="scss">
  .my-appeal {
    &__headline {
      @include reset-text();
      margin-bottom: 65px;
    }
  }
</style>
