<script>
  import tt from './elements/tt.json';
  import DeviceDetector from "svelte-device-detector";
  import Header from './elements/Header.svelte';
  import Footer from './elements/Footer.svelte';
  let now = new Date(),year, month, day;
  let dateString;
  dateString = (now.getMonth()+1)+'/'+(now.getDate());
  let texts = ['busky bime','you wasted electricity for me to tell you it\'s wednesday','duhh','hmm it\'s wednesday i wonder what TT it is','bro it\'s wednesday']
  function random(max){return Math.floor(Math.random() * max);}
  const ttt = random(5);
  let textActive = texts[ttt]; 
</script>
<style>
  .box{
    width:0.1px;
    height:70px;
    opacity:0.01;
  }
  :global(body){
    background-color: #9db6f8;
    margin:0;
    font-family: serif!important;
  }
  .boing{
    text-align: center;
    margin-top: 50px;
  }
  lg{font-size:100px;}
  m{font-size:large;}
  advise{font-size: 70px;}
  mobile{font-size: 50px;}
</style>
<main>
  <Header/>
  <div class="boing">
    {#if tt[dateString] != undefined}
      <br/>
      {dateString}<br/><br/>
      TODAY IS
      {#if tt[dateString].day == "B"}
          A
        {:else}
          AN
      {/if}<br/>
      <lg><b>{tt[dateString].day}</b><br/></lg>
      DAY<br/>
      AND IT'S TUSKY TIME<br/>
      {#if tt[dateString].TT == "Advisory"}
        <advise><b>{tt[dateString].TT}</b></advise><br/>
        <b><m>{textActive}</m></b>
        {:else}
        <lg><b>{tt[dateString].TT}</b></lg><br/>
      {/if}
      {:else}
      <DeviceDetector showInDevice="desktop">
        <lg><b>There is no school buffoon</b></lg><br/>
      </DeviceDetector>
      <DeviceDetector showInDevice="mobile">
        <mobile><b>There is no school buffoon</b></mobile><br/>
      </DeviceDetector>
      <img src="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg" width="400px" alt="you buffoon"/><br/>
      <m>(You rn)</m>
    {/if}
  </div>
  <DeviceDetector showInBrowser="chrome" showInDevice="desktop">
    <div class="box"></div>
  </DeviceDetector>
  <Footer/>
</main>