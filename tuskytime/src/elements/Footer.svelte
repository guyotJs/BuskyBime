<script>
    export let mobile;
</script>
<style>
    .foot{
        position:fixed;
        bottom:0;
        left:50%;
        transform:translate(-50%);
        margin:0;
    }
    p{
        color: #6882d3;
    }
    .boot{
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
<main>
    <p class:foot={!mobile} class:boot={mobile}>Not affiliated with LCPS, An improved version of <a href="https://tuskytime.org">Tuskytime.org</a> by, Weston Schnee in <em>Svelte</em></p>
</main>