<template>
  <v-app>

    <v-navigation-drawer
      v-model="localDrawer"
      app
    >


      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

     <!-- <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/about">About</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>-->
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      flat
      app
    >
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>


        <v-switch
          v-model="switch1"
          dark
        ></v-switch>


      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Home extends Vue {
    items = [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ];
    right= null;
    switch1 = true;
    private _group = null;

    get group(): any {
      return this._group;
    }

    set group(value: any) {
      this._group = value;
    }

    get localDrawer(): any {
      return this.$store.state.drawer;
    }

    set localDrawer(value: any) {
      this.$store.state.drawer = value;
    }

    mounted() {
      console.log('mounted')
    }

    openDrawer() {
      this.$store.dispatch("openDrawer")
    }
  }
</script>
