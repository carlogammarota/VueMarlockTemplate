<script>
    // MonthlyIncome.vue
    import { Line, Bar, Pie } from 'vue-chartjs'
    //ARREGLAR VUE CHART NO FUNCIONA DOUGHNUT
    export default {
        data(){
            return {
                             
            }
        },
        extends: Pie,
        mounted () {
            this.renderChart({
                
                datasets: [{
                    "data": [300, 50, 100],
                    "type": "doughnut",
                    "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                } ],
                "labels": ["P1", "P2", "P3"],
                
            }
            , {responsive: true, maintainAspectRatio: false})
        }
    }
</script>

  