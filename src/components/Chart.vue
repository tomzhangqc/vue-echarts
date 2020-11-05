<template>
    <div class="Echarts">
        <el-row>
            <el-button type="primary" @click="getData">主要按钮</el-button>
        </el-row>
        <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>
<script>
export default {
    name: 'Chart',
    data() {
        var text = 'ECharts 入门示例';
        var legendData = ['销量'];
        var xAxisData = [];
        var seriesData = []
        return {
            text,
            legendData,
            xAxisData,
            seriesData
        }
    },
    methods: {
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById('main'));
            var option = {
                title: {
                    text: this.text
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: "35px",
                    left: "50px",
                    right: "10px",
                    bottom: "50px"
                },
                legend: {
                    data: this.legendData
                },
                xAxis: {
                    data: this.xAxisData
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'line',
                    color: "green",
                    data: this.seriesData
                }]
            };
            myChart.setOption(option);
        },
        getData() {
            this.$axios.get('/getData')
                .then(response => {
                    this.xAxisData = response.data.xAxisData;
                    this.seriesData = response.data.seriesData;
                    this.myEcharts()
                })
                .catch(function(error) {
                    console.log(error);
                })
        }
    },
    mounted() {
        this.getData();
        const timer = setInterval(() => {
            this.getData();
        }, 1000)
        this.$once('hook:beforeDestroy', () => {
            clearInterval(timer)
        })
    }
}
</script>
<style>
</style>