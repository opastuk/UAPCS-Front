<template>
	<div class="page__wrapper">
		<header class="header">
			<ul class="header__list">
				<li class="header__item header__item--logo">
					<a class="header__link">ЕССПА</a>
				</li>
				<li class="header__item">
					<apply-button :is-doctor="isDoctor" />
				</li>
				<li class="header__item header__item--sign-in">
					<a class="header__link">{{ user.name }}</a>
				</li>
			</ul>
		</header>
		<div class="page__content">
      <div class="page__content_main">
        <div v-if="showSidebar" class="page__sidebar-container">
          <sidebar class="page__sidebar" :is-doctor="isDoctor" />
        </div>
			<div class="page__dash">
				<slot name="headline" />
				<slot name="content" />
			</div>
		</div>
		<footer class="footer">
			<ul class="footer__list">
				<li class="footer__list">
					<span class="footer__text">Octobuzz 2020</span>
				</li>
				<li class="footer__list">
					<a class="footer__link">
						<span class="visually-hidden">VirusHack</span>
					</a>
				</li>
			</ul>
		</footer>
    </div>
	</div>
</template>
<script>
import { Vue, Component} from 'vue-property-decorator';
import Sidebar from './Sidebar.vue';
import ApplyButton from "./ApplyButton.vue";

	@Component({
		components: {
		  'sidebar': Sidebar,
			'apply-button': ApplyButton,
		},
	})
export default class CommonPage extends Vue {
	  user = {};
	  showSidebar = true;

	  mounted() {
	    this.user = this.$store.getters["user/getUserInfo"];
	    if(this.$router.currentRoute.path === '/') {
	      this.showSidebar = false;
      }
	  }
	  get isDoctor() {
	    return this.user.role === 2;
	  }
	}
</script>

<style scoped lang="scss">
	.page{
		&__wrapper {
			height: 100%;
			display: flex;
      overflow: scroll;
			justify-content: space-between;
			flex-direction: column;
		}
		&__content {
      height: fit-content;
			display: flex;
			flex-direction: column;
      &_main {
        display: flex;
        flex-direction: row;
        padding: 120px 50px 30px;
      }
		}
		&__dash{
      height: fit-content;
      min-height: 70vh;
			padding: 50px;
			background-color: $white;
			width: 100%;
			border-radius: 10px;
		}
    &__sidebar {
     position: fixed;
    }
    &__sidebar-container{
      width: 25%;
      margin-right: 25px;
    }
	}
		.header {
      position: fixed;
			box-sizing: border-box;
			width: 100%;
			height: 80px;
			padding: 20px 50px;
			display: flex;
			background-color: $white;
			box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.08);
      z-index: 10;
			&__list {
				@include reset-list();
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			&__item {
				&--logo {
					padding-left: 70px;
					position: relative;
					font-size: 25px;
					font-weight: 600;
					&::before {
						content: "";
						width: 65px;
						height: 65px;
						position: absolute;
						top: -22px;
						left: -5px;
						border: 1px solid $green;
						border-radius: 50px;
					}
				}
				&--sign-in {
					padding: 15px 20px 15px 80px;
					position: relative;
					border: 1px solid $green;
					border-radius: 25px;
					&::before {
						content: "";
						width: 45px;
						height: 45px;
						position: absolute;
						top: 3px;
						left: 15px;
						border: 1px solid $green;
						border-radius: 50px;
					}
				}
				&:hover,
				&:focus {
					cursor: pointer;
					opacity: 0.9;
				}
				&:active {
					opacity: 0.8;
				}
			}
		}
		.footer {
			box-sizing: border-box;
			width: 100%;
			height: 100px;
			padding: 20px 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #111111;
			&__list {
				@include reset-list();
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			&__text {
				position: relative;
				padding-left: 80px;
				font-size: 20px;
				font-weight: 300;
				color: $white;
				text-transform: uppercase;
				&::before {
					content: "";
					width: 65px;
					height: 65px;
					position: absolute;
					top: -22px;
					left: 0;
					background-color: $white;
					border-radius: 50px;
				}
			}
		}

</style>
