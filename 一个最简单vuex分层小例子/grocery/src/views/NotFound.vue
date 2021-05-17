<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="backToHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name:'notFound404',
  methods:{
    backToHome(){
      this.$router.push('home');
    }
  }
};
</script>

<style scoped></style>
