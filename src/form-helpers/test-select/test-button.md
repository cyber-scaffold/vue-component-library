```vue
<template>
  <test-button button-type="primary" @click="handleClick">点击触发</test-button>
</template>

<script>
  export default {
    methods:{
      handleClick(){
        alert("handleClick")
      }
    }
  }
</script>
```