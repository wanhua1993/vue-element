<template>
    <div :id="id" style="width:100%;height:280px;margin-top:30px;">
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                myChart: null
            };
        },
        mounted() {
            this.myChart = echarts.init(document.getElementById(this.id));
            this.myChart.setOption(this.readyBin1Option(this.type));
        },
        props: ["id", "type"],
        methods: {
            readyBin1Option(type) {
                let text, legend_data, series_data;
                if (type == "ordertype") {
                    text = "保险公司人员";
                    legend_data = ["定损员", "物流员", "仓储员"];
                    series_data = [{
                            value: 335,
                            name: "定损员"
                        },
                        {
                            value: 310,
                            name: "物流员"
                        },
                        {
                            value: 600,
                            name: "仓储员"
                        }
                    ];
                } else if (type == "onetype") {
                    text = "保险公司人员";
                    legend_data = ["定损员", "物流员", "仓储员"];
                    series_data = [{
                            value: 335,
                            name: "定损员"
                        },
                        {
                            value: 310,
                            name: "物流员"
                        },
                        {
                            value: 600,
                            name: "仓储员"
                        }
                    ];
                } else {
                    text = "保险公司人员";
                    legend_data = ["定损员", "物流员", "仓储员"];
                    series_data = [{
                            value: 1000,
                            name: "定损员"
                        },
                        {
                            value: 310,
                            name: "物流员"
                        },
                        {
                            value: 234,
                            name: "仓储员"
                        }
                    ];
                }
                let data = {
                    title: {
                        text: text,
                        subtext: "纯属虚构",
                        x: "center"
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: "vertical",
                        left: "left",
                        data: legend_data
                    },
                    series: [{
                        name: "访问来源",
                        type: "pie",
                        radius: "50%",
                        center: ["50%", "60%"],
                        data: series_data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }]
                };
                return data;
            }
        },
        watch: {
            type: v => {
                this.readyBin1Option(v);
            }
        }
    };
</script>

<style scoped>

</style>
