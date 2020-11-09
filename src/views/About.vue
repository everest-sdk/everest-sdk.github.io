<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from "@/components/HelloWorld.vue";
  import {mapState} from "vuex";

  @Component({
    components: {
      HelloWorld,
    },
    computed: mapState([
      'drawer'
    ])
  })
  export default class About extends Vue {

  }
</script>
