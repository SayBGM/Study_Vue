<template>
    <div id="adfgh">
        <input type="text" v-model="asdf" placeholder="어떤 것이든 입력해보세요">
        <h1 v-html="asdf"></h1>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            asdf: ''
        }
    }
}
</script>

<style>
    h1{
        color: #41B883;
    }
</style>
