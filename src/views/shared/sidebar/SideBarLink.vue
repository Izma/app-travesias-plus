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
  name: "side-bar-link",
  inheritAttrs: false
})
export default class SideBarLink extends Vue {
  @Inject({ default: true, from: "autoClose" }) autoClose!: Boolean;
  @Prop({default:()=>{name:'',}})
  constructor() {
    super();
  }
}
</script>

