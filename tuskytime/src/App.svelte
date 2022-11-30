<script>
  import tt from './elements/tt.json';
  import Header from './elements/Header.svelte';
  let now = new Date(),year, month, day;
  let dateString;
  dateString = (now.getMonth()+1)+'/'+now.getDate();
</script>
<style>
  :global(body){
    background-color: #9db6f8;
    margin:0;
  }
  .boing{
    text-align: center;
  }
</style>
<main>
  <Header/>
  <div class="boing">
    <br/>
    {dateString}<br/>
    TODAY IS
    {#if tt[dateString].day == "B"}
      A
    {:else}
      AN
    {/if}<br/>
    {tt[dateString].day}<br/>
    DAY<br/>
    AND IT'S TUSKY TIME<br/>
    {tt[dateString].TT}
  </div>
</main>