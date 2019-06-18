<template>
  <component :is="tag" @click.native="hideSidebar" v-bind="$attrs" tag="li">
    <a class="nav-link" v-bind="$attrs">
      <slot>
        <i v-if="link.icon" :class="link.icon"></i>
        <p>{{link.name}}</p>
      </slot>
    </a>
  </component>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";
@Component({
  name: "SidebarLink",
  provide: {
    autoClose: {
      default: true
    }
  }
})
export default class SidebarLink extends Vue {
  inheritAttrs!: false;
  @Prop({
    default: () => {
      return {
        name: "",
        path: "",
        icon: ""
      };
    }
  })
  link!: [String, Object];
  @Prop({ default: "router-link" }) tag!: String;
  @Inject({ default: true }) autoClose!: Boolean;

  hideSidebar() {
    if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
      this.$sidebar.displaySidebar(false);
    }
  }
}
</script>
