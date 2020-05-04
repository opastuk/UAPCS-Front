<template>
    <common-page>
      <template v-slot:headline>
        <h1 class="ask__headline">Анкета обращения к врачу</h1>
      </template>
      <template v-slot:content>
        <div class="ask">
          <form class="ask-form" action="#">
            <div class="ask-form__category">
              <h2 class="ask-form__headline">Укажите причину(ы) обращения к врачу:</h2>
              <div class="ask-form__wrapper">
                <div class="ask-form__category-wrapper">
                  <input class="ask-form__input ask-form__input--category ask-form__input--pain" id="pain" name="pain" type="checkbox">
                  <label class="ask-form__label" for="pain">Боли в организме</label>
                </div>
                <div class="ask-form__category-wrapper">
                  <input class="ask-form__input ask-form__input--category ask-form__input--malaise" id="malaise" name="malaise" type="checkbox">
                  <label class="ask-form__label" for="pain">Общее недомогание</label>
                </div>
                <div class="ask-form__category-wrapper">
                  <input class="ask-form__input ask-form__input--category ask-form__input--temperature" id="temperature" name="temperature" type="checkbox">
                  <label class="ask-form__label" for="pain">Повышение температуры</label>
                </div>
                <div class="ask-form__category-wrapper">
                  <input class="ask-form__input ask-form__input--category ask-form__input--assignment" id="assignment" name="assignment" type="checkbox">
                  <label class="ask-form__label" for="pain">Получить справку или напрвление</label>
                </div>
                <div class="ask-form__category-wrapper">
                  <input class="ask-form__input ask-form__input--category ask-form__input--other" id="other" name="other" type="checkbox">
                  <label class="ask-form__label" for="pain">Другое</label>
                </div>
              </div>
            </div>
            <div class="ask-form__pain">
              <h2 class="ask-form__headline">Подробнее о боли:</h2>
              <div class="ask-form__wrapper">
                <div class="ask-form__pain-wrapper">
                  <label class="ask-form__label" for="pain">Оцените интенсивность боли (10 - невыносимая боль):</label>
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--pane-rate" id="pain-rate" name="pain-rate" type="number">
                </div>
                <h3 class="ask-form__headline">Укажите локализацию боли:</h3>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--head" id="head" name="head" type="checkbox">
                  <label class="ask-form__label" for="head">Голова</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--neck" id="neck" name="neck" type="checkbox">
                  <label class="ask-form__label" for="neck">Шея</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--chest" id="chest" name="chest" type="checkbox">
                  <label class="ask-form__label" for="chest">Грудь</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--back" id="back" name="back" type="checkbox">
                  <label class="ask-form__label" for="back">Спина</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--stomach" id="stomach" name="stomach" type="checkbox">
                  <label class="ask-form__label" for="stomach">Живот</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--legs" id="legs" name="legs" type="checkbox">
                  <label class="ask-form__label" for="legs">Ноги</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--hands" id="hands" name="hands" type="checkbox">
                  <label class="ask-form__label" for="hands">Руки</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-info ask-form__input--other-pain" id="other-pain" name="other-pain" type="checkbox">
                  <label class="ask-form__label" for="other-pain">Другое (укажите ниже) </label>
                </div>
                <h3 class="ask-form__headline">Укажите характер боли:</h3>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--dull" id="dull" name="dull" type="checkbox">
                  <label class="ask-form__label" for="dull">Ноющая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--dull" id="dull" name="dull" type="checkbox">
                  <label class="ask-form__label" for="dull">Ноющая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--pulse" id="pulse" name="pulse" type="checkbox">
                  <label class="ask-form__label" for="pulse">Простреливающая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--stitching" id="stitching" name="stitching" type="checkbox">
                  <label class="ask-form__label" for="stitching">Колющая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--cutting" id="cutting" name="cutting" type="checkbox">
                  <label class="ask-form__label" for="cutting">Режущая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--acute" id="acute" name="acute" type="checkbox">
                  <label class="ask-form__label" for="acute">Острая</label>
                </div>
                <div class="ask-form__pain-wrapper">
                  <input class="ask-form__input ask-form__input--pain-type ask-form__input--blunt" id="blunt" name="blunt" type="checkbox">
                  <label class="ask-form__label" for="blunt">Тупая</label>
                </div>
              </div>
            </div>
            <div class="ask-form__malaise">
              <h2 class="ask-form__headline">Подробнее о недомогании:</h2>
              <div class="ask-form__wrapper">
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--chills" id="chills" name="chills" type="checkbox">
                  <label class="ask-form__label" for="chills">Озноб</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--nausea" id="nausea" name="nausea" type="checkbox">
                  <label class="ask-form__label" for="nausea">Тошнота</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--vomit" id="vomit" name="vomit" type="checkbox">
                  <label class="ask-form__label" for="vomit">Рвота</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--dizziness" id="dizziness" name="dizziness" type="checkbox">
                  <label class="ask-form__label" for="dizziness">Головокружение</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--" id="weakness" name="weakness" type="checkbox">
                  <label class="ask-form__label" for="weakness">Слабость</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <input class="ask-form__input ask-form__input--malaise-info ask-form__input--malaise-other" id="malaise-other" name="malaise-other" type="checkbox">
                  <label class="ask-form__label" for="pain">Другое (укажите ниже)</label>
                </div>
                <div class="ask-form__malaise-wrapper">
                  <p class="ask-form__label">Подробнее расскажите о недомогании:</p>
                  <textarea class="ask-form__input ask-form__input--additional" id="malaise-add" name="malaise-add" cols="30" rows="10" placeholder="Какие еще симптомы вас беспокоят? Как давно?"></textarea>
                </div>
              </div>
            </div>
            <div class="ask-form__temperature">
              <h2 class="ask-form__headline">Подробнее о температуре:</h2>
              <div class="ask-form__wrapper">
                <label class="ask-form__label" for="temperature-info">Укажите максимальную температуру за последние двое суток:</label>
                <input class="ask-form__input ask-form__input--temperature-info" id="temperature-info" name="temperature-info"  type="number">
                <p class="ask-form__label">Дополнительная информация:</p>
                <textarea class="ask-form__input ask-form__input--temperature-info" name="temperature-add" id="temperature-add" cols="30" rows="10" placeholder="Опишите тяжесть состояния, чем сбивали температуру, все, что кажется вам важным"></textarea>
              </div>
            </div>
            <div class="ask-form__assignment">
              <h2 class="ask-form__headline">Укажите, что вам необходимо получить:</h2>
              <div class="ask-form__wrapper">
                <textarea class="ask-form__input ask-form__input--assignment-info" name="assignment-info" id="assignment-info" cols="30" rows="10" placeholder="Справка 086/у о профпригодности"></textarea>
              </div>
            </div>
            <div class="ask-form__other">
              <h2 class="ask-form__headline">Четко опишите вашу жалобу:</h2>
              <div class="ask-form__wrapper">
                <textarea class="ask-form__input ask-form__input--other-info" name="other-info" id="other-info" cols="30" rows="10" placeholder="Что вас беспокоит? Как давно? Как часто? Как сильно?"></textarea>
                <label class="ask-form__label" for="other-file">Прикрепите фото (если необходимо):</label>
                <input class="ask-form__input ask-form__input--other-file" id="other-file" name="other-file"  type="file">
              </div>
            </div>
            <div class="ask-form__additional">
              <h2 class="ask-form__headline">Дополнительная информация:</h2>
              <div class="ask-form__wrapper">
                <label class="ask-form__label" for="self-status">Оцените ваше общее состояние (1 - чувтсвуете себя прекрасно):</label>
                <input class="ask-form__input ask-form__input--additional" id="self-status" name="self-status"  type="number">
              </div>
              <div class="ask-form__wrapper">
                <p class="ask-form__label">Укажите ваши хронические заболевания (при наличии):</p>
                <textarea class="ask-form__input ask-form__input--additional" id="disease" name="disease" cols="30" rows="10" placeholder="Рассеянный склероз"></textarea>
              </div>
              <div class="ask-form__wrapper">
                <p class="ask-form__label">Укажите, на какие медикаменты у вас аллергия (при наличии):</p>
                <textarea class="ask-form__label ask-form__label--additional" name="allergy" id="allergy" cols="30" rows="10" placeholder="Пенициллин"></textarea>
              </div>
            </div>
            <div class="ask-form__doctor">
              <h2 class="ask-form__headline">Выберите врача для обращения:</h2>
              <div class="ask-form__wrapper">
                <label class="ask-form__label" for="doctor-pick">Врач:</label>
                <input class="ask-form__input ask-form__input--doctor" id="doctor-pick" name="doctor-pick"  type="text" required>
              </div>
            </div>
            <button class="ask-form__button" type="submit">Отправить</button>
          </form>
        </div>
      </template>
    </common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';

  @Component({
    components: {
      'common-page': CommonPage,
    }
  })
export default class AskFormPage extends Vue {

  }
</script>

<style scoped lang="scss">
.ask-page__wrapper {
  height: 100%;
}
</style>
