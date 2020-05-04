<template>
	<div class="sidebar">
		<div v-if="!isDoctor" class="sidebar--patient">
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
		<div v-if="isDoctor" class="sidebar--doc">
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
</template>

<script>
	import { Vue, Component, Prop } from 'vue-property-decorator';

	@Component({})
  export default class Sidebar extends Vue {
	  @Prop(Boolean) isDoctor;
  }
</script>

<style scoped lang="scss">
	.sidebar {
		box-sizing: border-box;
		width: 18%;
		height: fit-content;
		padding: 30px;
		text-align: center;
		background-color: $white;
		border-radius: 10px;
		margin-top: 30px;
		margin-left: 50px;
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
</style>
