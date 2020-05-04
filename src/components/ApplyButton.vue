<template>
	<div>
	<a v-if="!isDoctor" class="apply__link apply__link--button" @click="toAskForm">Обратиться к врачу</a>
	<a v-else class="apply__link apply__link--button">Активные обращения</a>
	</div>
</template>

<script>
	import { Vue, Component, Prop} from 'vue-property-decorator';

	@Component({})
  export default class ApplyButton extends Vue{
	  @Prop(Boolean) isDoctor

    toAskForm(){
	    this.$router.push('/ask-form');
    }
  }
</script>

<style scoped lang="scss">
	.apply {
		&__link {
			@include reset-link();
			color: $black;

			&--button {
				@include button();
				padding: 15px;
			}
		}
	}
</style>
