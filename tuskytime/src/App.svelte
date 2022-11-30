<script>
  import tt from './elements/tt.json';
  import Header from './elements/Header.svelte';
  import Footer from './elements/Footer.svelte';
  let now = new Date(),year, month, day;
  let dateString;
  dateString = (now.getMonth()+1)+'/'+now.getDate();
</script>
<style>
  :global(body){
    background-color: #9db6f8;
    margin:0;
    font-family: serif!important;
  }
  .boing{
    text-align: center;
    margin-top: 50px;
  }
  lg{
    font-size:100px;
  }
  m{
    font-size:large;
  }
</style>
<main>
  <Header/>
  <div class="boing">
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
    <lg><b>{tt[dateString].TT}</b></lg><br/>
    {#if tt[dateString].TT == "Advisory"}
       <b><m>busky bime</m></b>
    {/if}
  </div>
  <Footer/>
</main>