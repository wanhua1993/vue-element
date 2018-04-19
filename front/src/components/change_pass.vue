<template>
  
</template>

<script>
  export default {
    props: ["dialogFormVisible"],
    data() {
      return {
        form: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        formLabelWidth: "120px"
      };
    }
  };
</script>