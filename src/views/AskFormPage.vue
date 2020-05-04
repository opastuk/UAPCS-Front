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
    margin-bottom: 65px;
  }
  .ask-page__wrapper {
  height: 100%;
}
</style>
