<template>
	<div class="patient-card">
    <button v-if="doctor" class="patient-card__button" type="button">Принять пациента</button>
    <button v-if="!doctor" class="patient-card__button" type="button">Просмотреть</button>
    <div class="patient-card__info">
      <span class="patient-card__date">25 декабря 2020</span>
      <p class="patient-card__name">Яблоневская Аделаида Рауф Александрова</p>
      <p class="patient-card__add-wrapper">
        <span class="patient-card__add">Дата роджения: 01.01.1965</span>
        <span class="patient-card__add">ОМС: 4578-4578-9854-9485</span>
        <span class="patient-card__add">Возраст: 55</span>
      </p>
    </div>
    <div class="patient-card__keywords">
      <div class="patient-card__tags">
        <span class="patient-card__tag-icon"></span>
        <span class="patient-card__tag-text">Тошнота</span>
      </div>
      <div class="patient-card__rate">
        <span class="patient-card__rate-key">Оценка состояния</span>
        <span class="patient-card__rate-value">4</span>
      </div>
    </div>
	</div>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

  @Component({})
export default class PatientCard extends Vue {

  }
</script>

<style scoped lang="scss">

</style>
