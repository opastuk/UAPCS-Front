<template>
	<div class="sidebar">
		<div
			v-if="!isDoctor"
			class="sidebar--patient"
		>
			<ul class="sidebar__list">
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/docs.svg" height="43px" width="43px" alt="appeal">
					<router-link class="sidebar__link" to="/memo">Памятки</router-link>
				</li>
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/appeal.svg" height="43px" width="43px" alt="appeal">
					<router-link class="sidebar__link" to="/my-appeal">Мои обращения</router-link>
				</li>
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/message.svg" height="43px" width="43px" alt="appeal">
					<a class="sidebar__link">Сообщения</a>
				</li>
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/settings.svg" height="43px" width="43px" alt="appeal">
					<a class="sidebar__link">Настройки</a>
				</li>
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/close.svg" height="43px" width="43px" alt="appeal">
					<a class="sidebar__link">Выйти</a>
				</li>
			</ul>
		</div>
		<div
			v-if="isDoctor"
			class="sidebar--doc"
		>
			<ul class="sidebar__list">
				<li class="sidebar__item">
					<img class="appeal-icon" src="../../public/img/icons/appeal.svg" height="43px" width="43px" alt="appeal">
					<router-link class="sidebar__link" to="/active-appeal">Активные обращения</router-link>
				</li>
				<li class="sidebar__item">
					<img class="icon" src="../../public/img/icons/patient.svg" height="43px" width="43px" alt="patients">
					<router-link class="sidebar__link" to="/user-dash">Мои пациенты</router-link>
				</li>
				<li class="sidebar__item">
					<img class="icon" src="../../public/img/icons/message.svg" height="43px" width="43px" alt="patients">
					<a class="sidebar__link">Сообщения</a>
				</li>
				<li class="sidebar__item">
					<img class="icon" src="../../public/img/icons/settings.svg" height="43px" width="43px" alt="patients">
					<a class="sidebar__link">Настройки</a>
				</li>
				<li class="sidebar__item">
					<img class="logout-icon" src="../../public/img/icons/close.svg" height="43px" width="43px" alt="patients">
					<a class="sidebar__link">Выйти</a>
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
		min-width: 200px;
		height: fit-content;
		padding: 20px;
		text-align: left;
		background-color: $white;
		border-radius: 10px;

	&__list {
	 @include reset-list();
	 }
	&__item {
    padding: 20px 20px 20px 70px;
    position: relative;
    &:before {
      content: "";
      width: 50px;
      height: 50px;
      position: absolute;
      top: 5px;
      left: 0;
      background-color: #eeeeee;
      border-radius: 50px;
    }
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
	.appeal-icon {
		position: absolute;
		top: 0;
		left: 15px;
	}
	.icon {
		position: absolute;
		left: 4px;
		bottom: 14px;
	}

	.appeal-icon {
		position: absolute;
		left: 4px;
		top: 8px;
	}

	.logout-icon {
		position: absolute;
		left: 4px;
		bottom: 13px;
	}
</style>
