<template>
	<common-page>
		<template v-slot:headline>
			<h1 class="my-appeal__headline">
				Мои обращения
			</h1>
      <div class="my-appeal__sort">
        <button class="my-appeal__sort-button">Актвные</button>
        <button class="my-appeal__sort-button">Архив</button>
      </div>
		</template>
    <template v-slot:content>
      <patient-card/>
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
export default class MyAppealPage extends Vue {

  }
</script>

<style scoped lang="scss">
  .my-appeal {
    &__headline {
      @include reset-text();
      margin-bottom: 50px;
    }
    &__sort {
      margin-bottom: 35px;
    }
    &__sort-button {
      width: 100px;
      padding: 10px;
      margin-right: 15px;
      border: 1px solid $blue;
      border-radius: 25px;
      background-color: transparent;
      box-shadow: none;
      outline: none;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover,
      &:focus {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
</style>
