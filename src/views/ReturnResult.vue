<template>
    <div id="r-return">
        <div>Run number：{{runnumber}}</div>
        <div>result：{{result}}</div>
        <div v-show="qnumber">Question number：{{questionnumber}}</div>
        <div v-show="qnumber"><img src="../assets/result_right.png"></div>
    </div>
</template>
<script>
export default {
    data:function() {
        return {
                runnumber:1,
                result:"wrong",
                qnumber:true,
                questionnumber:10001,
            };
    }
}
</script>