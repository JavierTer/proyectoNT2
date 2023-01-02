<template>
    <div>
        {{this.name}}
    </div>
</template>

<script>
import { useAppStore } from "../store";
import axios from "axios";

export default {
  setup() {
    const store = useAppStore();
    return { store };
  },
   data() {
 return {
        name: 'nombre'
    };
    },
   watch: {
   
  },  
  async created() {
   
  },
   methods : {
    
      
  }
  
};
</script>

<style>
    
</style>