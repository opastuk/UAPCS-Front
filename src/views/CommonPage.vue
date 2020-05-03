<template>
	<div class="page__wrapper">
		<header class="header">
			<ul class="header__list">
				<li class="header__item">
					<a class="header__link">ЕССПА</a>
				</li>
				<li class="header__item">
					<a class="header__link">Обратиться к врачу</a>
				</li>
				<li class="header__item">
					<a class="header__link">активные обращения</a>
				</li>
				<li class="header__item">
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
		<footer class="common-page__footer">
			<ul class="footer__list">
				<li class="footer__list">
					<a class="footer__link"><span class="visually-hidden">Octobuzz</span></a>
					<a class="footer__link"><span class="visually-hidden">VirusHack</span></a>
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
.common-page {
	&__wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__content {
		display: flex;
		flex-direction: row;
	}
	 &__dash {
		 margin: 0 auto;
	 }
}
</style>
