<template>
	<div class="patient-card">
    <button v-if="isDoctor" class="patient-card__button" type="button">Принять пациента</button>
    <button v-else class="patient-card__button" type="button">Просмотреть назначения</button>
    <div class="patient-card__info">
      <span class="patient-card__date">25 декабря 2020</span>
      <p class="patient-card__name">Яблоневская Аделаида Рауф Александрова</p>
      <p class="patient-card__add-wrapper">
        <span class="patient-card__add">Дата рождения: 01.01.1965</span>
        <span class="patient-card__add">ОМС: 4578-4578-9854-9485</span>
        <span class="patient-card__add">Возраст: 55</span>
      </p>
    </div>
    <div class="patient-card__keywords">
      <div class="patient-card__tags">
        <span class="patient-card__tag-icon"></span>
        <span class="patient-card__tag-text">Температура: 41</span>
      </div>
      <div class="patient-card__rate">
        <span class="patient-card__rate-key">Оценка состояния</span>
        <span class="patient-card__rate-value">4</span>
      </div>
    </div>
	</div>
</template>

<script>
import { Vue, Component, Prop} from 'vue-property-decorator';

  @Component({})
export default class PatientCard extends Vue {
    @Prop(Boolean) isDoctor;
    @Prop(Object) apply;

  }
</script>

<style scoped lang="scss">
  .patient-card {
    box-sizing: border-box;
    min-width: 750px;
    max-width: 865px;
    min-height: 220px;
    padding: 20px 35px;
    background-color: $white;
    border-radius: 15px;
    position: relative;
    box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.25);
    &:hover {
      box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.5);
      cursor: pointer;
    }
    &__button {
      box-sizing: border-box;
      min-width: 200px;
      height: 45px;
      padding: 10px;
      border: 1px solid $blue;
      position: absolute;
      right: 35px;
      font-size: 16px;
      color: $blue;
      border-radius: 20px;
      outline: none;
      &:hover,
      &:focus {
        cursor: pointer;
        color: $green;
        border: 1px solid $green;
      }
      &:active {
        border: 1px solid $blue;
      }
    }
    &__info {
      margin-bottom: 10px;
    }
    &__date {
      display: inline-block;
      margin-bottom: 10px;
      font-size: 16px;
      color: #7c7c7c;
    }
    &__name {
      max-width: 550px;
      @include reset-text();
      margin-bottom: 10px;
      font-size: 22px;
      line-height: 25px;
    }
    &__add-wrapper {
      @include reset-text();
      margin-bottom: 15px;
      color: #646363;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -15px;
        left: 0;
        background-color: #dcdcdc;
      }
    }
    &__add {
      margin-right: 25px;
      &:last-of-type {
        margin-right: 0;
      }
    }
    &__keywords {
      width: 100%;
      height: 50px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__tags {
      display: flex;
      align-items: center;
    }
    &__tag-icon {
      box-sizing: border-box;
      display: inline-block;
      height: 50px;
      width: 50px;
      margin-right: 10px;
      border: 1px solid $blue;
      border-radius: 50px;
    }
    &__tag-text {
      box-sizing: border-box;
      display: inline-block;
      max-width: 185px;
      height: 50px;
      padding: 10px 20px;
      margin-right: 10px;
      border: 1px solid $blue;
      border-radius: 25px;
    }
    &__rate {
      display: flex;
      align-items: center;
    }
    &__rate-key {
      color: $blue;
      margin-right: 10px;
    }
    &__rate-value {
      box-sizing: border-box;
      display: inline-block;
      height: 50px;
      width: 50px;
      margin-right: 10px;
      padding: 10px 0;
      border: 1px solid $blue;
      border-radius: 50px;
      font-size: 35px;
      line-height: 28px;
      text-align: center;
    }
  }
</style>
