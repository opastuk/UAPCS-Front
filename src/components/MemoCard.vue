<template>
	<div class="memo">
		<div
			class="memo__head"
			@click="openQuestionList"
		>
			<h2 class="memo__headline">
				Первая помощь при <br /> обморожении
			</h2>
		</div>
		<transition-group
			name="fade"
			tag="div"
		>
			<div
				v-if="showQuestions"
				:key="1"
				class="memo__body"
			>
				<ul
					:key="1"
					class="memo__list memo__list--main"
				>
					<li
						v-for="(question, index) in questions"
						:key="index"
						class="memo__item memo__item--main"
						@click="handleClick(index)"
					>
						<p class="memo__item--question">
							{{ question.question }}
						</p>
						<transition name="fade">
							<p
								v-if="currentActive.includes(index)"
								class="memo__main-text"
								v-html="question.answer"
							/>
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
		question: 'Что такое обморожение?',
		answer: 'Тестовый текст - поменяйте на что-то осмысленное',
	},
];

  @Component({})
export default class MemoCard extends Vue {
    currentActive = [];
    showQuestions = false

    openQuestionList(){
		  this.showQuestions = !this.showQuestions;
    }

    handleClick(id) {
    	if (this.currentActive.includes(id)) {
    		this.currentActive.splice(this.currentActive.indexOf(id), 1);
    	} else {
    		this.currentActive.push(id);
    	}
    }

    get questions() {
    	return QUESTIONS;
    }

  }
</script>

<style scoped lang="scss">
  .memo {
    &__head {
      box-sizing: border-box;
      min-width: 600px;
      max-width: 750px;
      height: 190px;
      padding: 30px 40px;
      display: flex;
      align-items: center;
      background-color: #3d336d;
      border-radius: 40px;
      position: relative;
			z-index: 1;
      &:hover {
        cursor: pointer;
      }
    }
    &__headline {
      @include reset-text();
      padding-left: 195px;
      color: $white;
      font-family: "Myriad pro",sans-serif;
      font-size: 40px;
      line-height: 50px;
      font-weight: 300;
      &::before {
        content: ""; /*сюда идет иконка памятки*/
        width: 150px;
        height: 150px;
        position: absolute;
        top: 20px;
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
      min-width: 600px;
      max-width: 750px;
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
      cursor: pointer;

			&--question{
				position: relative;
				margin: 0;
        padding-bottom: 10px;
				&::after {
					content: "";
					width: 100%;
					height: 1px;
					position: absolute;
					bottom: 0;
					left: 0;
					background-color: #888888;
				}
			}
    }
    &__main-text {
      @include reset-text();
			margin-top: 10px;
    }
  }

	@keyframes slideDown {
		0% {
			opacity: 0;
			transform: translateY(-70%);
		}
		100% {
			opacity: 1;
			transform: translateY(0%);
		}
	}

	@keyframes slideUp {
		0% {
			opacity: 1;
			transform: translateY(0%);
		}
		100% {
			opacity: 0;
			transform: translateY(-70%);
		}

	}
	.fade-enter-active, .fade-leave-active {
		animation-name: slideDown;
		animation-duration: .5s;
		animation-timing-function: ease-in-out;
		visibility: visible !important;
	}

	.fade-enter, .fade-leave-to {
		animation-name: slideUp;
		animation-duration: .5s;
		animation-timing-function: ease-in-out;
		visibility: visible !important;
	}
</style>
