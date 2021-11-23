
<template>
  <select>
    <option value="1">选项1</option>
    <option value="2">选项2</option>
  </select>
</template>


<script>
/**
 * 这是自定义的按钮组件
 * @displayName test-select
 * */
export default {
  name: "test-select",

  props: {
    /**
     * 按钮类型
     * @values primary,default
     * */
    value: { type: String, required: true },
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