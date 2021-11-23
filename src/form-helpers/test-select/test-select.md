```md
<template>
  <test-select button-type="primary" @click="handleClick">点击触发</test-select>
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