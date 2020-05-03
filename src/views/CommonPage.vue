<template>
	<div class="page__wrapper">
		<header class="header">
			<ul class="header__list">
				<li class="header__item header__item--logo">
					<a class="header__link">ЕССПА</a>
				</li>
				<li class="header__item">
					<a class="header__link header__link--button">Обратиться к врачу</a>
				</li>
				<li class="header__item">
					<a class="header__link header__link--button">Активные обращения</a>
				</li>
				<li class="header__item header__item--sign-in">
					<a class="header__link">Войти</a>
				</li>
			</ul>
		</header>
		<div class="page__content">
			<div class="sidebar">
				<div class="sidebar--patient">
					<ul class="sidebar__list">
						<li class="sidebar__item">
							<a class="sidebar__link">Памятки</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Мои обращения</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Сообщения</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Настройки</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Помощь</a>
						</li>
					</ul>
				</div>
				<div class="sidebar--doc">
					<ul class="sidebar__list">
						<li class="sidebar__item">
							<a class="sidebar__link">Активные обращения</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Мои пациенты</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Сообщения</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Настройки</a>
						</li>
						<li class="sidebar__item">
							<a class="sidebar__link">Помощь</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="page__dash">
				<slot name="content" />
			</div>
		</div>
		<footer class="footer">
			<ul class="footer__list">
				<li class="footer__list">
					<span class="footer__text">Octobuzz 2020</span>
				</li>
				<li class="footer__list">
					<a class="footer__link">
						<span class="visually-hidden">VirusHack</span>
					</a>
				</li>
			</ul>
		</footer>
	</div>
</template>
<script>
import { Vue, Component} from 'vue-property-decorator';

	@Component({})
export default class CommonPage extends Vue {

	}
</script>

<style scoped lang="scss">
  .header {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    padding: 20px 50px;
    display: flex;
    background-color: $white;
    box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
    //position: fixed;
    &__list {
      @include reset-list();
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__item {
      &--logo {
        padding-left: 70px;
        position: relative;
        font-size: 25px;
        font-weight: 600;
        &::before {
          content: "";
          width: 65px;
          height: 65px;
          position: absolute;
          top: -22px;
          left: -5px;
          border: 1px solid $green;
          border-radius: 50px;
        }
      }
      &--sign-in {
        padding: 15px 20px 15px 80px;
        position: relative;
        border: 1px solid $green;
        border-radius: 25px;
        &::before {
          content: "";
          width: 45px;
          height: 45px;
          position: absolute;
          top: 3px;
          left: 15px;
          border: 1px solid $green;
          border-radius: 50px;
        }
      }
      &:hover,
      &:focus {
        cursor: pointer;
        opacity: 0.9;
      }
      &:active {
        opacity: 0.8;
      }
    }
    &__link {
      @include reset-link();
      color: $black;
      &--button {
        @include button();
        padding: 15px;
      }
    }
  }
  .sidebar {
    box-sizing: border-box;
    width: 300px;
    padding: 30px;
    text-align: center;
    background-color: $white;
    border-radius: 10px;
    &__list {
      @include reset-list();
    }
    &__item {
      padding: 20px 0;
    }
    &__link {
      display: block;
      width: 100%;
      @include reset-link();
      color: $black;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111111;
    position: absolute;
    bottom: 0;
    &__list {
      @include reset-list();
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      position: relative;
      padding-left: 80px;
      font-size: 35px;
      font-weight: 300;
      color: $white;
      text-transform: uppercase;
      &::before {
        content: "";
        width: 65px;
        height: 65px;
        position: absolute;
        top: -22px;
        left: 0;
        background-color: $white;
        border-radius: 50px;
      }
    }
  }

</style>
