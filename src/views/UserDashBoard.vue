<template>
	<common-page>
		<template v-slot:headline>
			<h1 v-if="isDoctor" class="current-patients__headline">
				Мои пациенты
			</h1>
			<h1 v-else class="current-patients__headline">
				Мои Обращения
			</h1>
      <div class="current-patients__sort">
        <button class="current-patients__sort-button">Активные</button>
        <button class="current-patients__sort-button">Архив</button>
      </div>
		</template>
		<template v-slot:content>
			<patient-card class="patient-card" :is-doctor="isDoctor"/>
			<patient-card v-for="(apply, index) in cards" class="patient-card" :is-doctor="isDoctor" :apply="apply" :key="index"/>
		</template>
	</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';
import PatientCard from '../components/PatientCard.vue';
import getRequest from '../api/getMethods'
import {mapGetters, mapState} from 'vuex';

  @Component({
  	components: {
  		'common-page': CommonPage,
  		'patient-card': PatientCard,
  	},
		computed: {
  	  ...mapGetters('user', ['isDoctor']),
			...mapState('user', {
			  user: state => state.userInfo
			})
		}
  })
export default class UserDashBoard extends Vue {
		cards = [];
		mounted() {
		  if(!this.isDoctor) {
        getRequest.loadCardsByPatient(this.user.id).then((response) => this.cards = response.data)
      } else {
				getRequest.loadsCardsByDoctor(this.user.id).then((response) => this.cards = response.data)
			}
    }
  }
</script>

<style scoped lang="scss">
  .current-patients {
    &__headline {
      @include reset-text();
      padding-bottom: 30px;
      margin-bottom: 30px;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #888888;
        position: absolute;
        bottom: 0;
        left: 0;
      }
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
      }
    }
  }

	.patient-card{
		margin-bottom: 10px;
	}
</style>
