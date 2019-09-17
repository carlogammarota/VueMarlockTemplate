<script>
    // MonthlyIncome.vue
    import { Line, Bar, Pie, Radar } from 'vue-chartjs'
    //ARREGLAR VUE CHART NO FUNCIONA DOUGHNUT
    export default {
        data(){
            return {
                             
            }
        },
        extends: Radar,
        mounted () {
            this.renderChart({
                 labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
                type: 'polarArea',
                datasets: [{
                    data: [20, 10, 400],
                    "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                } ],
            }
            , {responsive: true, maintainAspectRatio: false})
        }
    }
</script>

  