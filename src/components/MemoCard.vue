<template>
	<div class="memo">
		<div class="memo__head" @click="openQuestionList">
			<h2 class="memo__headline">
				Первая помощь при <br/> обморожении
			</h2>
		</div>
		<transition-group name="fade" tag="div">
		<div v-if="showQuestions" class="memo__body" :key="1">
			<ul class="memo__list memo__list--main" :key="1">
				<li class="memo__item memo__item--main" v-for="(question, index) in questions" :key="index"	@click="handleClick(index)" >
					Что такое обморожение?
					<transition name="fade">
						<p v-if="currentActive.includes(index)" class="memo__main-text" v-html="question.answer" />
					</transition>
				</li>
			</ul>
		</div>
		</transition-group>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

const QUESTIONS = [
  {
    question: 'Как оформить заказ?',
    answer: 'Тестовый текст - поменяйте на что-то осмысленное',
  },
];
  @Component({})
export default class MemoCard extends Vue {
    currentActive = [];
    showQuestions = false

		openQuestionList(){
		  this.showQuestions = !this.showQuestions
		}

    handleClick(id) {
      if (this.currentActive.includes(id)) {
        this.currentActive.splice(this.currentActive.indexOf(id), 1);
      } else {
        this.currentActive.push(id);
      }
    }

    get questions() {
      return QUESTIONS
    }


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
      min-height: 280px;
			height: fit-content;
      padding: 40px 40px 25px 40px;
      margin-top: -35px;
      border: 1px solid #888888;
			border-top: none;
      border-radius: 0 0 40px 40px;
    }
    &__list {
      @include reset-list();
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__item {
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
			padding: 10px;
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
			margin-top: 10px;
    }
  }

	.fade-enter-active, .fade-leave-active {
		transition: opacity .2s ease-in-out;
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
