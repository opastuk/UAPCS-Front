<template>
    <common-page>
      <template v-slot:headline>
        <h1 class="ask__headline">Анкета обращения к врачу</h1>
      </template>
      <template v-slot:content>
        <ask-form/>
      </template>
    </common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';
import AskForm from '../components/AskForm.vue';

  @Component({
    components: {
      'common-page': CommonPage,
      'ask-form': AskForm,
    }
  })
export default class AskFormPage extends Vue {

  }
</script>

<style scoped lang="scss">
  .ask__headline {
    @include reset-text();
    padding-bottom: 30px;
    margin-bottom: 50px;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #888888;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .ask-page__wrapper {
  height: 100%;
}
</style>
