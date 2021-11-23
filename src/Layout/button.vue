
<template>
  <div>this is Button</div>
</template>

<script>
/**
 * @group layouts
 * 按钮组件
 * */
export default {
  props: {
    /**
     * 按钮类型
     * */
    buttonType: {
      /** `primary`/`default` */
      type: String,
      default: "primary",
      required: true,
    },
    /**
     * 点击事件
     * */
    onClick: { type: Function, default: () => {}, required: true },
  },
  methods: {
    /**
     * @vuese
     * 只点击一次的装饰方法
     *
     * */
    once(callback) {},
  },
};
</script>
