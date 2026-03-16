<template>
  <div id="app">
    <JourneyBuilder />
  </div>
</template>

<script>
import JourneyBuilder from './components/JourneyBuilder.vue';

export default {
  name: 'App',
  components: {
    JourneyBuilder
  }
};
</script>

<style>
/* All @import statements must come first */
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/controls/dist/style.css';
@import '@vue-flow/minimap/dist/style.css';
@import '@vue-flow/node-resizer/dist/style.css';

/* Tailwind CSS v4 import */
@import "tailwindcss";

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  width: 100vw;
}

/* Custom VueFlow overrides */
.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.vue-flow__controls {
  bottom: 10px;
  left: 10px;
}

.vue-flow__background {
  background-color: #f8f9fa;
}

/* Custom handle styles */
.vue-flow__handle {
  width: 12px;
  height: 12px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 50%;
}

.vue-flow__handle-connecting,
.vue-flow__handle-valid {
  background: #4CAF50;
  border-color: #4CAF50;
}

/* Edge styles */
.vue-flow__edge-default {
  stroke: #b1b1b7;
  stroke-width: 2;
}

.vue-flow__edge-selected {
  stroke: #007bff;
  stroke-width: 3;
}

/* Selection styles */
.selected {
  box-shadow: 0 0 0 2px #007bff;
}
</style>