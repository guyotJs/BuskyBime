<script>
  import tt from './elements/tt.json';
  import DeviceDetector from "svelte-device-detector";
  import Header from './elements/Header.svelte';
  import Footer from './elements/Footer.svelte';
  let dateString;
  let offset = 0;
  const millisecondsInDay = 8.64e+7
  let date = new Date(Date.now() + offset * millisecondsInDay)
  let texts = ['busky bime','you wasted electricity for me to tell you it\'s wednesday','duhh','hmm it\'s wednesday i wonder what TT it is','bro it\'s wednesday']
  function random(max){return Math.floor(Math.random() * max);}
  let ttt = random(5);
  let textActive = texts[ttt]; 
  function offsetR(){offset += 1;date = new Date(Date.now() + offset * millisecondsInDay);dateString=getDate(date);}
  function offsetL(){offset -= 1;date = new Date(Date.now() + offset * millisecondsInDay);dateString=getDate(date);}
  function getDate(gotDate) {
    var formattedDate = ('' + gotDate.getDate()).slice(-2);
    var formattedMonth = ('' + (gotDate.getMonth() + 1)).slice(-2);
    return formattedMonth + '/' + formattedDate
  }
  dateString = getDate(date)
</script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
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
  buffoonDesktop{font-size: 70px;}
  #changeday {
    height: 3rem;
    width: 3rem;
    background-color: var(--lighter-main);
    box-shadow: 0rem 0.3rem;
    color: var(--main);
    font-size: 1.5rem;
    align-self: flex-start;
    margin: 100px;
  }
  main{    
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }
</style>
<Header/>
<main>
  <button id="changeday" on:click={offsetL}>&lt</button>
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
        <buffoonDesktop><b>There is no school buffoon</b></buffoonDesktop><br/>
      </DeviceDetector>
      <DeviceDetector showInDevice="mobile">
        <mobile><b>There is no school buffoon</b></mobile><br/>
      </DeviceDetector>
      <img src="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg" width="400px" alt="you buffoon"/><br/>
      <m>(You rn)</m>
    {/if}
  </div>
  <button id="changeday" on:click={offsetR}>&gt</button>
</main>
<DeviceDetector showInBrowser="chrome" showInDevice="desktop">
  <div class="box"></div>
</DeviceDetector>
<Footer/>