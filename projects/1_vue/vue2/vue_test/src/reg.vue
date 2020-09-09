<template>
<div>
    <cmpHead/>
        <form action="http://localhost:8081/reg" method="post">
            <input type="text" name="" id=""><br>
            <input type="password" name="" id=""><br>
            <input type="submit" value="注册">
            <a href="#/">go to login</a>
        </form>
    <cmpFoot/>
</div>
</template>

<script>
import cmpHead from '@/components/cmp-head'
import cmpFoot from '@/components/cmp-foot'
export default {
  components: {cmpHead, cmpFoot}
}

</script>

<style lang="css">

</style>
