<template>
     <div class="boxdiv">
            <router-view class="indexview"></router-view>
     </div>
</template>

<script>
export default {
    name:"",
    components: {},
    props: {},
    data() {
      return {

      };
    },
    
    methods: {

    },
   
};
</script>

<style lang="less" scoped>
.boxdiv{
  display: flex;
}
.indexview{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content:center;
  align-items:center
}
</style>
