
<script>
function touch(){
    document.getElementById("bubble").innerHTML = "pls don't touch me I doesn't like getting touched!";
 }
 </script>

<template>
  <header>
    
    <div class="wrapper">
      <nav>
      <RouterLink to="/"><button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;Nylo0&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;Nylo0&nbsp;</span>
      </button>
      </RouterLink>
     <div class="sozial-links"><a class="socials" href="https://github.com/nylo00"><img style="width: 50px;" src="./assets/svg/githubl.svg"></a></div>
      </nav>
      <nav>
        <RouterLink class="header-link" to="/">Home</RouterLink>
        <RouterLink class="header-link" to="/mySkills">my Skills</RouterLink>
        
      </nav>
    </div>
    
  </header>

  <RouterView />

 


  <div class="nerd-place">
    <p id="bubble">pls don't touch me I doesn't like getting touched! </p>
      
   <button style="background-color: transparent; border-color: transparent;" @click="touch()"><img class="nerd" src="./assets/svg/geekhead.png"></button>
    <button id="sorry" class="sorry" @click="sorry()">i'm Sorry</button>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';

function touch(){
    var bubble = document.getElementById("bubble");
    var sorry = document.getElementById("sorry");
    if(bubble.style.display != "none")
    {
      bubble.style.display = "block";
      sorry.style.display = "block";
    } 
 }
 function sorry(){
  var bubble = document.getElementById("bubble");
    var sorry = document.getElementById("sorry");
    if(bubble.style.display == "block")
    {
      bubble.style.display = "none";
      sorry.style.display = "none";
    } 
 }


  
 
</script>
<style scoped>

</style>
