<script>
  import { closeModal } from "svelte-modals";

  export let isOpen;
  export let src;
  export let alt;
  export let caption;

  // Zoom level for the image
  let zoomLevel = 1;

  // Function to zoom in
  function zoomIn() {
    zoomLevel += 0.2; // Increase zoom by 0.2
  }

  // Function to zoom out
  function zoomOut() {
    if (zoomLevel > 0.5) {
      // Prevent zooming out too much
      zoomLevel -= 0.2;
    }
  }
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="bg-stone-900 text-white rounded-lg p-6 w-full max-w-6xl flex flex-col items-center"
    >
      <!-- Image container -->
      <div class="overflow-hidden flex justify-center items-center">
        <img
          {src}
          {alt}
          class="transform transition-transform duration-300"
          style="transform: scale({zoomLevel});"
        />
      </div>

      <!-- Caption -->
      <p class="text-center text-white mt-4">{caption}</p>

      <!-- Controls -->
      <div class="flex justify-between items-center gap-4 mt-6 w-full">
        <button
          class="bg-stone-700 hover:bg-stone-600 text-white py-2 px-4 rounded-md w-full transition duration-300"
          on:click={zoomOut}
        >
          Dezoom
        </button>
        <button
          class="bg-stone-700 hover:bg-stone-600 text-white py-2 px-4 rounded-md w-full transition duration-300"
          on:click={zoomIn}
        >
          Zoom
        </button>
        <button
          class="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md w-full transition duration-300"
          on:click={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}
