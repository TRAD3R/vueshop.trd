<template>
<div>
    <v-navigation-drawer app temporary v-model="sideNav">
        <v-list>
            <v-list-tile
                v-for="(link, index) in links"
                :key="index"
                :to="link.url"
            >
                <v-list-tile-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="link.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
        <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-lg-and-up"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Online Store</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-md-and-down">
        <v-btn flat
            v-for="(link, index) in links"
            :key="index"
            :to="link.url"
        >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
        </v-btn>
        </div>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
</div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        sideNav: false,
        links: [
          {title: 'Login', icon: 'account_box', url: '/login'},
          {title: 'Register', icon: 'face', url: '/register'},
          {title: 'Cart', icon: 'shopping_cart', url: '/checkout'},
          {title: 'New product', icon: 'add', url: '/new'},
          {title: 'My products', icon: 'list', url: '/list'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>