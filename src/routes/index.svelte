<script lang="ts">
  import { onMount } from "svelte";
  import ZuperZeeDraw, { visible } from "./../components/ZuperZeeDraw.svelte";

  // Reset the variable when switching between pages
  // visible.set(false);

  onMount(() => {
    visible.set(true);
  });
</script>

<style>
  @media (min-height: 500px) {
    .spacer {
      margin-bottom: 100px;
    }
  }
</style>

<svelte:head>
  <title>ZuperZee</title>
</svelte:head>

<div class="spacer" />

<ZuperZeeDraw />
