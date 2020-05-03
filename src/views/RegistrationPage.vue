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
				v-if="doctor"
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
							required
						/>
					</label>
					<label
						class="registration__label"
						for="id"
					>Индивидуальный номер врача:
						<input
							id="doctor-id"
							class="registration__input"
							type="text"
							name="id"
							placeholder="0000-0000-0000-0000"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Поликлиника:
						<input
							id="doctor-clinic"
							class="registration__input"
							type="select"
							name="clinic"
							required
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
							required
						/>
					</label>
					<button
						class="registration__button"
						type="submit"
					>
						Отправить
					</button>
				</form>
			</div>
			<div
				v-if="!doctor"
				class="registration_-wrapper"
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
							id="name"
							class="registration__input"
							type="text"
							name="name"
							placeholder="Иванов Иван Иванович"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="birthday"
					>Дата рождения:
						<input
							id="birthday"
							class="registration__input"
							type="date"
							placeholder="дд/мм/гггг"
							name="birthday"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="id"
					>Полис:
						<input
							id="id"
							class="registration__input"
							type="text"
							name="id"
							placeholder="0000-0000-0000-0000"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Адрес:
						<input
							id="address"
							class="registration__input"
							type="text"
							name="address"
							placeholder="г.Москва, ул. Маршала Жукова, д. 5, кв. 50"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Поликлиника:
						<input
							id="clinic"
							class="registration__input"
							type="select"
							name="clinic"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Электронная почта:
						<input
							id="email"
							class="registration__input"
							type="email"
							name="email"
							placeholder="ivanov@gmail.com"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Телефон:
						<input
							id="phone"
							class="registration__input"
							type="tel"
							name="phone"
							placeholder="+7 000 000 00 00"
							required
						/>
					</label>
					<label
						class="registration__label"
						for="name"
					>Пароль:
						<input
							id="password"
							class="registration__input"
							type="password"
							name="password"
							required
						/>
					</label>
					<button
						class="registration__button"
						type="submit"
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
