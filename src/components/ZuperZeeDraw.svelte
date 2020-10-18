<script context="module" lang="ts">
  // Make it possible to toggle the visibility outisde the component
  // by using writable https://svelte.dev/docs#writable
  const visible = writable(false);

  function toggleVisible() {
    visible.set(!get(visible));
  }

  export { visible };
</script>

<script lang="ts">
  import { writable, get } from "svelte/store";
  import { draw } from "svelte/transition";
  import { linear } from "svelte/easing";

  const ZUPERZEE_DRAW_PARAMS = [
    { duration: 1000, easing: linear },
    { delay: 200, duration: 900, easing: linear },
    { delay: 400, duration: 800, easing: linear },
  ];
</script>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 638.2 130.7"
  on:click={toggleVisible}>
  {#if $visible}
    <g fill="none" stroke="#656769" stroke-width="3" aria-label="ZuperZee">
      <g aria-label="Z">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M44.4,78.5H79v22H28L44.4,78.5z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M1.5,79.4l37.2-50.1h34.8l-53,71.3h-19V79.4z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[2]}
          d="M3.1,1.5H79v20.4l-1.2,1.6H3.1V1.5z" />
      </g>
      <g aria-label="u">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M134.3,27.1h26.6v73.4h-26.6V27.1z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M96.1,93.7c-1.3-2.3-2.3-5.1-2.7-8.4c-0.5-3.3-0.7-7.4-0.7-12.2V27.1h26.6v34.7c0,5.1,0,8.4,0.1,10.1c0.2,2.4,0.5,4.1,0.9,5.2c0.4,1.1,1,1.7,1.9,1.9c0.9,0.2,2.4,0.4,4.6,0.4h1.4v18c-3.7,2.8-8.6,4.2-14.7,4.2C104.9,101.6,99.1,98.9,96.1,93.7z" />
      </g>
      <g aria-label="p">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M216.2,100.8c-2.2-0.5-4.3-1.6-6.2-3.1V79.4h1.6c2.1,0,3.6-0.1,4.5-0.4c0.9-0.2,1.6-0.8,2.1-1.7c0.5-1.1,0.8-2.6,0.9-4.6c0.1-1.4,0.1-4.4,0.1-8.9c0-4.5,0-7.5-0.1-8.9c-0.1-2.1-0.4-3.6-0.8-4.6c-0.4-1-1.2-1.5-2.2-1.7c-1.3-0.2-2.8-0.3-4.5-0.3H210V30c1.9-1.4,4.1-2.4,6.4-3c2.4-0.6,5.1-0.9,8.3-0.9c3.8,0,7.1,0.6,9.9,1.9c2.7,1.2,5,3.3,6.7,6c3.4,5.6,5,15.4,5,29.5c0,14-1.7,23.9-5,29.7c-3.4,5.6-8.9,8.4-16.6,8.4C221.2,101.6,218.4,101.3,216.2,100.8z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M177.3,27.1H204v102.1h-26.6V27.1z" />
      </g>
      <g aria-label="e">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M290.9,56.7H301c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V26h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.7z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M275,99.6c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6v18.6c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C287,101.9,280.1,101.1,275,99.6z" />
      </g>
      <g aria-label="r">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M373.5,31.3c2-1.9,4.4-3.3,7.1-4.1c2.7-0.8,6.1-1.2,10.2-1.2v24c-4.3,0-7.8,0.3-10.6,0.9c-2.7,0.6-5,1.6-6.7,3V31.3z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M340.8,27.1h26.6v73.4h-26.6V27.1z" />
      </g>
      <g aria-label="Z">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M442.4,78.5H477v22h-51L442.4,78.5z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M399.5,79.4l37.2-50.1h34.8l-53,71.3h-19V79.4z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[2]}
          d="M401.1,1.5H477v20.4l-1.2,1.6h-74.7V1.5z" />
      </g>
      <g aria-label="e">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M521.3,56.5h10.1c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V25.8h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.5z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M505.4,99.5c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6V99c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C517.4,101.7,510.5,101,505.4,99.5z" />
      </g>
      <g aria-label="e">
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[0]}
          d="M601.5,56.5h10.1c0-5.4-0.5-8.8-1.6-10.4c-0.6-0.9-1.3-1.4-2.3-1.7c-1-0.2-2.4-0.4-4.2-0.4h-2V25.8h2c8.3,0,14.6,0.7,19.1,2c4.5,1.3,7.8,3.6,9.9,6.6c1.9,2.7,3.1,6.1,3.5,10.4c0.4,4.2,0.6,10.6,0.6,19v5.8h-35.1V56.5z" />
        <path
          transition:draw|local={ZUPERZEE_DRAW_PARAMS[1]}
          d="M585.6,99.5c-5-1.5-8.8-3.9-11.3-7.1c-2.2-2.9-3.6-6.5-4.3-10.7c-0.7-4.3-1-10.2-1-17.6c0-6.9,0.2-12.4,0.7-16.5c0.5-4.1,1.5-7.6,3-10.4c1.7-3.2,4.4-5.6,8-7.4c3.6-1.8,8.5-2.9,14.8-3.4v43.5c0,3.3,0.1,5.6,0.4,7c0.3,1.4,1,2.4,2,3.1c1.2,0.8,2.9,1.2,5.3,1.3c3.1,0.2,6.3,0.3,9.8,0.3c6.1,0,10.6-0.1,13.4-0.4l7.3-0.6V99c-3.8,1.2-9.1,1.9-15.8,2.3c-3.3,0.3-7.1,0.4-11.5,0.4C597.6,101.7,590.7,101,585.6,99.5z" />
      </g>
    </g>
  {/if}
</svg>
