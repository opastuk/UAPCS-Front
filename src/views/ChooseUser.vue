<template>
	<div class="choose-user">
		<h1 class="visually-hidden">
			Выбор пользователя
		</h1>
		<div class="choose-user__wrapper">
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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__wrapper {
      width: 650px;
      box-sizing: border-box;
      padding: 60px 40px;
      border: 5px solid $green;
      border-radius: 15px;
    }
    &__button-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__headline {
      @include reset-text();
      @include headline();
      margin-bottom: 60px;
      text-align: center;
    }
    &__button {
      box-sizing: border-box;
      width: 250px;
      height: 65px;
      padding: 20px 30px;
      color: $white;
      border: none;
      border-radius: 5px;
      background: $blue;
      background:linear-gradient(to right top, $blue, $green);
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
