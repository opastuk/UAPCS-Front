<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
  body, html {
		overflow: hidden;
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: "Roboto regular", sans-serif;
    font-size: 18px;
    line-height: 24px;
    background-color: #eeeeee;
  }

  .visually-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  @font-face {
    font-family: "Roboto regular";
    src: url("/assets/fonts/Roboto-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Roboto Bold";
    src: url("/assets/fonts/Roboto-Bold.ttf");
    font-weight: 500;
  }
</style>
