<template>
    <div class="wh_sys_user">
        <wh-table :tableData='tableData' :value='value'></wh-table>
    </div>
</template>

<script>
import whTable from "@/components/table.vue";
export default {
  components: {
    whTable
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      value: [
        {
          name: "日期",
          key: "date"
        },
        {
          name: "姓名",
          key: "name"
        },
        {
          name: "省份",
          key: "province"
        },
        {
          name: "城市",
          key: "city"
        },
        {
          name: "地址",
          key: "address"
        },
        {
          name: "区号",
          key: "zip"
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "001",
          number: 1
        },
        {
          date: "2016-05-03",
          name: "爱吃",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "002",
          number: 2
        },
        {
          date: "2016-05-03",
          name: "西红柿",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "003",
          number: 3
        },
        {
          date: "2016-05-03",
          name: "番茄",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "004",
          number: 4
        },
        {
          date: "2016-05-03",
          name: "土豆",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "005",
          number: 5
        },
        {
          date: "2016-05-03",
          name: "佐助",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          id: "006",
          number: 6
        },
      ]
    };
  }
};
</script>
<style scoped>
.wh_sys_user {
  margin: 20px;
  padding: 10px;
}
</style>
