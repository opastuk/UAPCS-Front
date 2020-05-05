<template>
	<common-page>
		<template v-slot:headline>
			<h1 class="memo__headline">
				Памятки оказания первой помощи
			</h1>
		</template>
		<template v-slot:content>
			<memo-card />
		</template>
	</common-page>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';
import CommonPage from '../components/CommonPage.vue';
import MemoCard from "../components/MemoCard";

  @Component({
  	components: {
  		'common-page': CommonPage,
  		'memo-card': MemoCard,
  	}
  })
export default class MemoPage extends Vue {

  }
</script>

<style scoped lang="scss">
  .memo {
    &__headline {
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
  }
</style>
