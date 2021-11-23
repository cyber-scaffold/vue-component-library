
<template>
  <div @click="handleClick">
    <slot></slot>
  </div>
</template>


<script>
/**
 * 这是自定义的按钮组件
 * @link https://github.com/cyber-scaffold/vue-component-library/tree/master/src/Layout/test-button
 * @displayName test-button
 * */
export default {
  name: "test-button",

  props: {
    /**
     * 按钮类型
     * @values primary,default
     * */
    buttonType: { type: String, default: "primary", required: true },
  },

  methods: {
    /**
     * 防重复点击的装饰器
     * @public
     * @param {Requester~requestCallback} callback 回调函数
     * @callback Requester~requestCallback
     * @param {string} param1 参数1
     * @param {string} param2 参数2
     */
    async handleClick(event) {
      alert("asddsadsada");
      // await this.$emit("click", event);
    },
  },
};
</script>