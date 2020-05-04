<template>
	<common-page>
		<template v-slot:headline>
			<h1 class="active-appeal__headline">
				Активные обращения
			</h1>
		</template>
		<template v-slot:content>
			<patient-card />
		</template>
	</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';
import PatientCard from '../components/PatientCard.vue';

  @Component({
  	components: {
  		'common-page': CommonPage,
  		'patient-card': PatientCard,
  	}
  })
export default class ActiveAppealPage extends Vue {
  }
</script>

<style scoped lang="scss">
  .active-appeal {
    &__headline {
      @include reset-text();
      margin-bottom: 50px;
    }
  }
</style>
