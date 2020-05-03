<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: "Roboto regular";
    src: url("/assets/fonts/Roboto-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Roboto Bold";
    src: url("/assets/fonts/Roboto-Bold.ttf");
    font-weight: 900;
  }
</style>
