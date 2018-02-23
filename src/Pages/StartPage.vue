<template>
  <div>
    <div class="container mt-3" :class="{'d-none': isModeEdit}" v-html="HTML"></div>
    <vue-editor id="VueEditor" :editorToolbar="customToolbar" v-model="HTML" v-if="isModeEdit" />
  </div>
</template>

<script>
export default {
  name: "StartPage",
  data() {
    return {
      HTML: this.$store.getters.TextPage(this.$route.name),
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
        [{ header: 1 }, { header: 2 }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video", "formula"],
        [{ direction: "rtl" }],
        ["clean"]
      ]
    };
  },
  computed: {
    isModeEdit() {
      return this.$store.getters.isModeEdit;
    }
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>