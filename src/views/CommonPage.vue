<template>
	<div class="common-page__wrapper">
		<div class="common-page__header">
			<slot name="header"></slot>
		</div>
		<div class="common-page__content">
			<div class="common-page__sidebar">
				<slot name="sidebar"></slot>
			</div>
			<div class="common-page__dash">
				<slot name="content"></slot>
			</div>
		</div>
		<div class="common-page__footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	import { Vue, Component} from 'vue-property-decorator'

	@Component({})
  export default class CommonPage extends Vue {

  }
</script>

<style scoped lang="scss">
.common-page {
	&__wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__content {
		display: flex;
		flex-direction: row;
	}
	 &__dash {
		 margin: 0 auto;
	 }
}
</style>
