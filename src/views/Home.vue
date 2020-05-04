<template>
	<common-page>
		<template v-slot:content>
			<div class="landing">
				<section class="landing__section landing__section--main">
					<h1 class="landing__headline">
						Единая система сбора предварительного анамнеза (ЕССПА) -
						<br /> мы дорожим вашим временем
					</h1>
					<img
						class="landing__img"
						src="../assets/img/main-image.jpg"
						alt="ЕССПА - мы дорожим вашим временем"
						width="600px"
					/>
					<button class="landing__button">
						Присоединиться
					</button>
				</section>
				<section class="landing__section landing__section--features">
					<h2 class="visually-hidden">
						Преимущества:
					</h2>
					<ul class="landing__list">
						<li class="landing__item">
							Получение консультаций от врачей, не выходя из дома
						</li>
						<li class="landing__item">
							Удобные памятки для оказания медицинской помощи
						</li>
						<li class="landing__item">
							Сокрщение очных приемов
						</li>
						<li class="landing__item">
							Разгрузка больниц
						</li>
						<li class="landing__item">
							Улучшение продуктивности работы врачей
						</li>
						<li class="landing__item">
							<b>«Мне только спросить» - спросите без очереди!</b>
						</li>
					</ul>
					<img
						class="landing__img"
						src="../assets/img/features.svg"
						alt="Наши преимущества"
						width="600px"
					/>
				</section>
				<h2 class="landing__heading">
					Заботимся о вас в трудное время <span class="landing__hashtag">#сидимдома</span>
				</h2>
				<section class="landing__section landing__section--isolation">
					<ul class="landing__list">
						<li class="landing__item">
							Исключение заражения в очередях
						</li>
						<li class="landing__item">
							Исключение заражения врач-пациент
						</li>
						<li class="landing__item">
							Возможность обратиться к врачу, не нарушая самоизоляцию
						</li>
						<li class="landing__item">
							<b>Публикация актуальных памяток о коронавирусе</b>
						</li>
					</ul>
					<img
						class="landing__img"
						src="../assets/img/isolate.png"
						alt="Самоизоляция"
						width="700px"
					/>
				</section>
			</div>
		</template>
	</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from "../components/CommonPage";

			@Component({
				components: {CommonPage}
			})
export default class Home extends Vue {

			}
</script>

<style scoped	lang="scss">
  .landing{
    &__headline {
      min-width: 500px;
      max-width: 800px;
      margin: 30px 0 100px 30px;
      font-size: 45px;
      line-height: 65px;
    }
    &__section {
      margin-bottom: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 25px;
      position: relative;
      &--features {
        background-color: #edf7f7;
        padding: 10px;
      }
      &--isolation {
        padding: 30px;
        flex-direction: row-reverse;
        border: 2px solid red;
      }
      &--main {
        justify-content: space-between;
      }
    }
    &__heading {
      @include reset-text();
      font-size: 30px;
      margin-bottom: 70px;
      text-align: center;
    }
    &__list {
      padding: 0;
      margin: 0 0 0 50px;
    }
    &__item {
      font-size: 20px;
      padding: 10px;
    }
    &__hashtag {
      color: $blue;
    }
    &__button {
      @include button();
      display: block;
      padding: 20px 40px;
      margin: 0 auto;
      position: absolute;
      left: 30px;
      bottom: 30px;
      &:hover,
      &:focus {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
</style>
