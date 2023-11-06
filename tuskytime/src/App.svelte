<script>
  import tt from './elements/tt.json';
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
  function offsetR(){offset += 1;lelleR();date = new Date(Date.now() + offset * millisecondsInDay);dateString=getDate(date);}
  function offsetL(){offset -= 1;lelleL();date = new Date(Date.now() + offset * millisecondsInDay);dateString=getDate(date);}
  function getDate(gotDate) {
    var formattedDate = ('' + gotDate.getDate()).slice(-2);
    var formattedMonth = ('' + (gotDate.getMonth() + 1)).slice(-2);
    return formattedMonth + '/' + formattedDate
  }
  let datedateoffset=0;
  function lelleL(){
    datedateoffset--;
    if(datedateoffset < 0){
      datedateoffset = 6;
    }
  }
  function lelleR(){
    datedateoffset++;
    if(datedateoffset > 6){
      datedateoffset = 0;
    }
  }
  dateString = getDate(date)
  let ogdatefrfrfr = dateString;
  var arrayDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dd= new Date();
  let held = dd.getDay();
  let mobile = false;
  if(window.innerWidth < window.innerHeight){
    mobile = true;
  }
	let time = new Date();
  $: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
  let blocks = [ [{h:9,m:30},{h:10,m:53}], [{h:10,m:53},{h:11,m:36}], [{h:11,m:36},{h:13,m:36}],[{h:13,m:36},{h:14,m:57}],[{h:14,m:57},{h:16,m:18}]] 
  import { onMount } from 'svelte';
  let bloorkfr = "";
	onMount(() => {
		const interval = setInterval(() => {
      time = new Date();
      /* ALL BLORK 1 INSTANCES */
      if(hours == blocks[0][0].h&&minutes>=blocks[0][0].m){ bloorkfr = "Block 1, until 10:53"}
      if(hours == blocks[0][1].h&&minutes<=blocks[0][1].m){ bloorkfr = "Block 1, until 10:53"}
      /* ALL BLORK TT INSTANCES */
      if(hours == blocks[1][0].h&&minutes>=blocks[1][0].m){ bloorkfr = "Block TT, until 11:36"}
      if(hours == blocks[1][1].h&&minutes<=blocks[1][1].m){ bloorkfr = "Block TT, until 11:36"}
      /* ALL BLORK 2 INSTANCES */
      if(hours == blocks[2][0].h&&minutes>=blocks[2][0].m){ bloorkfr = "Block 2, until 1:36"}
      if(hours == blocks[2][0].h+1){ bloorkfr = "Block 2, until 1:36"}
      if(hours == blocks[2][1].h&&minutes<=blocks[2][1].m){ bloorkfr = "Block 2, until 1:36"}
      /* ALL BLORK 3 INSTANCES */
      if(hours == blocks[3][0].h&&minutes>=blocks[3][0].m){ bloorkfr = "Block 3, until 2:57"}
      if(hours == blocks[3][1].h&&minutes<=blocks[3][1].m){ bloorkfr = "Block 3, until 2:57"}
      /* ALL BLORK 4 INSTANCES */
      if(hours == blocks[4][0].h&&minutes>=blocks[4][0].m){ bloorkfr = "Block 4, until 4:18"}
      if(hours == blocks[4][0].h+1){ bloorkfr = "Block 4, until 4:18"}
      if(hours == blocks[4][1].h&&minutes<=blocks[4][1].m){ bloorkfr = "Block 4, until 4:18"}
      /* OUTSIDESCHOOL INSTANCES */
      if(hours <= blocks[0][0].h && minutes<=blocks[0][0].m){bloorkfr = "Schools Not Started Yet"}
      if(hours >= blocks[4][1].h && minutes>=blocks[4][1].m){bloorkfr = "Schools Out Dingus"}
      
    }, 1000);
		return () => {
			clearInterval(interval);
		}; 
	});
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
  #changedaymobile {
    height: 3rem;
    width: 3rem;
    background-color: var(--lighter-main);
    box-shadow: 0rem 0.3rem;
    color: var(--main);
    font-size: 1.5rem;
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
  {#if !mobile}<button id="changeday" on:click={offsetL}>&lt</button>{/if}
  <div class="boing">
    {#if tt[dateString] != undefined}
      <br/>
      {dateString}<br/><em>{#if arrayDay[held+datedateoffset]==undefined}{arrayDay[0]}{:else}{arrayDay[held+datedateoffset]}{/if}</em><br/><br/>
      {#if mobile}
        <button id="changedaymobile" on:click={offsetL}>&lt</button>
        <button id="changedaymobile" on:click={offsetR}>&gt</button><br/><br/>
      {/if}
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
      {#if dateString == ogdatefrfrfr}{bloorkfr}{/if}
      {:else}
      {dateString}<br/>
      {#if arrayDay[held+datedateoffset]==undefined}{arrayDay[0]}{:else}{arrayDay[held+datedateoffset]}{/if}<br/>
      {#if mobile}
        <button id="changedaymobile" on:click={offsetL}>&lt</button>
        <button id="changedaymobile" on:click={offsetR}>&gt</button><br/><br/>
      {/if}
      <buffoonDesktop><b>There is no school buffoon</b></buffoonDesktop><br/>
      <img src="https://ironon.github.io/static/media/baboon.b4aa7231a1f98ba4fd1e.jpg" width="400px" alt="you buffoon"/><br/>
      <m>(You rn)</m>
    {/if}
  </div>
  {#if !mobile}<button id="changeday" on:click={offsetR}>&gt</button>{/if}
</main>
  <div class="box"></div>
<Footer mobile={mobile}/>