export default {
  created() {
    // eslint-disable-next-line no-undef
    this.$store.dispatch(getParts);
  },
  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
