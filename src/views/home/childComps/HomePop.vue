<template>
    <div>
        <img :src="pop" alt="">
    </div>
</template>
<script>
export default {
    name:'HomePop',
    props:{
        pop:{
            type:String          
        }
    }
    
}
</script>
<style>
    
</style>