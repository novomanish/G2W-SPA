<style lang="scss" scoped>
  .bold {
    font-weight:bold;

    .sub {
      color:red;
    }
  }
</style>

<template>
  <div>
    From template static data
    <h1 class="bold">{{message}}
    <span class="sub">Red</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Stage",

  data() {
    return {
      message: 'Dynamic data'
    };
  },

  computed: {},

  watch: {},

  components: {},

  methods: {},

  created() {

  }
};
</script>