<template>
	<div class="choose-user">
		<h1 class="visually-hidden">
			Выбор пользователя
		</h1>
		<h2 class="choose-user__headline">
			Выберите пользователя:
		</h2>
		<div class="choose-user__button-wrapper">
			<button class="choose-user__button">
				Я - врач
			</button>
			<button class="choose-user__button">
				Я - пациент
			</button>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

  @Component({})
export default class ChooseUser extends Vue {
  };
</script>

<style scoped lang="scss">
  .choose-user {
    &__button {
      box-sizing: border-box;
      width: 250px;
      height: 65px;
      padding: 20px 30px;
      font-size: 18px;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      background: #216ada;
      background:linear-gradient(to right top, #216ada, #76bc61);
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
      &:active {
        opacity: 0.8;
      }
    }
  }
</style>
