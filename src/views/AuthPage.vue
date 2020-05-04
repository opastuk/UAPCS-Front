<template>
	<div class="auth">
		<h1 class="visually-hidden">
			Вход
		</h1>
		<div class="auth__wrapper">
			<h2 class="auth__headline">
				Войдите:
			</h2>
			<form
				class="auth__form"
				action="#"
			>
				<label
					class="auth__label visually-hidden"
					for="login"
				>
					Логин:
				</label>
				<input
					id="login"
					class="auth__input"
					type="text"
					name="login"
					placeholder="Логин"
					required
					v-model="login"
				/>
				<label
					class="auth__label visually-hidden"
					for="login"
				>
					Пароль:
				</label>
				<input
					id="password"
					class="auth__input"
					type="password"
					name="password"
					placeholder="Пароль"
					required
					v-model="password"
				/>
				<button
					class="auth__button"
					type="submit"
					@click="enter"
				>
					Войти
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import LS from '../localStorage';

  @Component({})
export default class AuthPage extends Vue {
    login = '';
    password = '';

 	 enter() {
 	   this.$store.dispatch('user/auth', {login: this.login, password: this.password})
	 }

	 created() {
		 LS.setSecondEntry()
   }

  };
</script>

<style scoped lang="scss">
.auth {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    box-sizing: border-box;
    padding: 40px;
    border: 5px solid $green;
    border-radius: 15px;
  }
  &__headline {
    @include headline();
    margin-bottom: 45px;
    text-align: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__button {
    width: 150px;
    padding: 15px 20px;
    @include button();
    &:hover,
    &:focus {
      cursor: pointer;
      opacity: 0.9;
    }
    &:active {
      opacity: 0.8;
    }
  }
  &__input {
    width: 300px;
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
}
</style>
