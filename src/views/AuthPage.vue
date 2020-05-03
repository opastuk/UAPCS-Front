<template>
	<div class="auth">
		<h1 class="visually-hidden">
			Вход
		</h1>
		<h2 class="auth__headline">
			Войдите:
		</h2>
		<div class="auth__wrapper">
			<form
				class="auth__form"
				action="#"
			>
				<label
					class="auth__label"
					for="login"
				>Логин:
					<input
						id="login"
						class="auth__input"
						type="text"
						name="login"
						placeholder="ivanov@gmail.com"
						required
					/>
				</label>
				<label
					class="auth__label"
					for="login"
				>Пароль:
					<input
						id="password"
						class="auth__input"
						type="password"
						name="password"
						required
					/>
				</label>
			</form>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component({})
export default class AuthPage extends Vue {
  };
</script>

<style scoped>

</style>
