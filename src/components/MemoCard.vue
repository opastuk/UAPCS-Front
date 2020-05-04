<template>
	<div class="memo">
		<div class="memo__head">
			<h2 class="memo__headline">
				Первая помощь при <br/> обморожении
			</h2>
		</div>
		<div class="memo__body">
			<ul class="memo__list memo__list--main">
				<li class="memo__item memo__item--main">
					Что такое обморожение?
					<p class="memo__main-text" />
				</li>
				<li class="memo__item memo__item--main">
					Причины и признаки обморожения
					<p class="memo__main-text" />
				</li>
				<li class="memo__item memo__item--main">
					Что можно делать при обморожении?
					<p class="memo__main-text" />
				</li>
				<li class="memo__item memo__item--main">
					Что нельзя делать при обморожении?
					<p class="memo__main-text" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

  @Component({})
export default class MemoCard extends Vue {

  }
</script>

<style scoped lang="scss">
  .memo {
    &__head {
      box-sizing: border-box;
      min-width: 800px;
      max-width: 865px;
      height: 220px;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      background-color: #3d336d;
      border-radius: 40px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
    }
    &__headline {
      @include reset-text();
      padding-left: 195px;
      color: $white;
      font-family: "Myriad pro",sans-serif;
      font-size: 48px;
      line-height: 58px;
      font-weight: 300;
      &::before {
        content: ""; /*сюда идет иконка памятки*/
        width: 160px;
        height: 160px;
        position: absolute;
        top: 30px;
        left: 40px;
        background-color: $white;
        border-radius: 100px;
      }
      &::after {
        content: ""; /*сюда идет иконка вниз*/
        width: 60px;
        height: 50px;
        position: absolute;
        top: 80px;
        right: 40px;
      }
    }
    &__body {
      box-sizing: border-box;
      min-width: 800px;
      max-width: 865px;
      height: 280px;
      padding: 40px 40px 25px 40px;
      margin-top: -35px;
      border: 1px solid #888888;
      border-radius: 0 0 40px 40px;
    }
    &__list {
      @include reset-list();
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__item {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        background-color: #888888;
      }
    }
    &__main-text {
      @include reset-text();
    }
  }
</style>
