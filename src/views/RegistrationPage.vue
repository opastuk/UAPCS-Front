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
							type="text"
							name="birthday"
							v-mask="'##-##-####'"
							placeholder="дд-мм-гггг"
							v-model="userInfo.birthDate"
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
							v-model="userInfo.hospitalId"
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
							v-model="userInfo.email"
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
							v-model="userInfo.mobilePhone"
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
					<div
						class="registration__button"
						@click="send"
					>
						Отправить
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import userRequests from '../api/userRequests.js'
import getRequest from "../api/getMethods";

  @Component({})
export default class RegistrationPage extends Vue {
    userInfo = {
      id: null,
      name: '',
      birthDate: '',
			email: '',
			mobilePhone: '',
			password: '',
			role: null,
      hospitalId: 0
		};
    hospitalsList = [];


    mounted() {
      this.userInfo.role = this.$router.currentRoute.params.role;
			if(!this.isDoctor) {
        getRequest.loadHospitals().then(response => {
          this.hospitalsList = response.data
        })
			}
    }


    get identifyType() {
			return (this.isDoctor ? 'Индивидуальный номер врача:' : 'Полис:');
		}

		get isDoctor() {
      return this.role === 2;
		}

		formatBeforeSend(payload) {
      const val = payload.replace( /-/g , "");
      return val;
		}

		send() {
      if(this.userInfo.id) {
        this.userInfo.id = this.formatBeforeSend(this.userInfo.id);
      }
      userRequests.registerUser(this.userInfo).then((response) => this.$router.push('/auth')).catch((e) => console.log(e.message))
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
		display: flex;
		justify-content: center;
    @include button();
  }
}
</style>
