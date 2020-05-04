<template>
	<div class="registration">
		<h1 class="visually-hidden">
			Регистрация
		</h1>
		<div class="registration__wrapper">
			<h2 class="registration__headline">
				Зарегистрируйтесь:
			</h2>
			<div
				class="registration__form-wrapper"
			>
				<form
					class="registration__form"
					action="#"
				>
					<label
						class="registration__label"
						for="name"
					>ФИО:
						<input
							id="doctor-name"
							class="registration__input"
							type="text"
							name="name"
							placeholder="Иванов Иван Иванович"
							required
							v-model="userInfo.name"
						/>
					</label>
					<label
						class="registration__label"
						for="birthday"
					>Дата рождения:
						<input
							id="doctor-birthday"
							class="registration__input"
							type="date"
							name="birthday"
							placeholder="дд/мм/гггг"
							v-model="userInfo.birthday"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="id"
					>{{identifyType}}
						<input
							id="doctor-id"
							class="registration__input"
							type="text"
							name="id"
							v-mask="'####-####-####-####'"
							placeholder="0000-0000-0000-0000"
							v-model="userInfo.id"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
						v-if="!isDoctor"
					>Поликлиника:
						<input
							id="doctor-clinic"
							class="registration__input"
							type="select"
							name="clinic"
							v-model="hospitalId"
							required
							v-if="!isDoctor"
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Электронная почта:
						<input
							id="doctor-email"
							class="registration__input"
							type="email"
							name="email"
							v-model="userInfo.mail"
							placeholder="ivanov@gmail.com"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Телефон:
						<input
							id="doctor-phone"
							class="registration__input"
							type="tel"
							name="phone"
							v-mask="'+7 ### ### ## ##'"
							v-model="userInfo.phone"
							placeholder="+7 000 000 00 00"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Пароль:
						<input
							id="doctor-password"
							class="registration__input"
							type="password"
							name="password"
							v-model="userInfo.password"
							required
						/>
					</label>
					<button
						class="registration__button"
						type="submit"
						@click="send"
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component({})
export default class RegistrationPage extends Vue {
    userInfo = {
      id: null,
      name: '',
      birthDate: '',
			email: '',
			mobilePhone: '',
			password: '',
			role: this.role,
		};
    hospitalId = 0;
    hospitals = [];
    role = 'patient'

    mounted() {
      this.role = this.$router.currentRoute.params.role;
			if(!this.isDoctor) {
        this.$store.dispatch('receiveHospitals');
        this.hospitals = this.store.state.hospitals;
      }
    }


    get identifyType() {
			return (this.isDoctor ? 'Индивидуальный номер врача:' : 'Полис:');
		}

		get isDoctor() {
      return this.role === 'doctor';
		}

		send() {
			this.$store.dispatch('user/registration', this.userInfo).then(() => {
        this.$store.commit('setHospital', this.hospitalId);
			  this.$router.push('/asuth')
      })
		}
  };
</script>

<style scoped lang="scss">
.registration {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__headline {
    @include headline();
    margin-bottom: 55px;
    text-align: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  &__input {
    width: 450px;
    margin-bottom: 30px;
    @include input();
    &:last-of-type {
      margin-bottom: 45px;
    }
    &:hover,
    &:focus {
      border: 1px solid $black;
    }
  }
  &__button {
    width: 200px;
    padding: 15px;
    align-self: center;
    @include button();
  }
}
</style>
