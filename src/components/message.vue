<template>
   <div>
     <ul>
       <li v-for="m in message">
         <router-link :to="`/about/message/mdetail/${m.id}`">{{m.name}}</router-link>
       </li>
     </ul>
         <router-view></router-view>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                message:[]
            }
        },
      created () {
           setTimeout(() =>{
             this.message=[
               {id:1,name:'message001'},
               {id:2,name:'message002'},
               {id:3,name:'message003'},
               {id:4,name:'message004'}
             ]
           },1000)
      }
    }
</script>
<style>

</style>
