<script>
  import { closeModal } from 'svelte-modals'

  export let isOpen
  export let src
  export let alt
  export let caption

  let zoomLevel = 1
  let isDragging = false
  let startX, startY
  let translateX = 0
  let translateY = 0

  function zoomIn() {
    zoomLevel += 0.2
  }

  function zoomOut() {
    if (zoomLevel > 0.5) {
      zoomLevel -= 0.2
    }
  }

  function startPan(event) {
    isDragging = true
    startX = event.clientX - translateX
    startY = event.clientY - translateY
  }

  function pan(event) {
    if (isDragging) {
      translateX = event.clientX - startX
      translateY = event.clientY - startY
    }
  }

  function stopPan() {
    isDragging = false
  }
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed inset-0 p-16 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="bg-stone-900 text-white rounded-lg p-6 w-full max-w-6xl flex flex-col items-center"
    >
      <!-- Image container -->
      <div
        role="presentation"
        class="overflow-hidden flex justify-center items-center"
        on:mousedown={startPan}
        on:mousemove={pan}
        on:mouseup={stopPan}
        on:mouseleave={stopPan}
      >
        <img
          {src}
          {alt}
          class="transform transition-transform duration-300 cursor-move"
          style="transform: scale({zoomLevel}) translate({translateX}px, {translateY}px);"
          draggable="false"
        />
      </div>

      <!-- Caption -->
      <p class="text-center text-white mt-4">{caption}</p>

      <!-- Controls -->
      <div class="flex justify-between items-center gap-4 mt-6 w-full">
        <button
          class="bg-stone-700 hover:bg-stone-600 text-white py-2 px-4 rounded-full w-full transition duration-300"
          on:click={zoomOut}
        >
          Dezoom
        </button>
        <button
          class="bg-stone-700 hover:bg-stone-600 text-white py-2 px-4 rounded-full w-full transition duration-300"
          on:click={zoomIn}
        >
          Zoom
        </button>
        <button
          class="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-full w-full transition duration-300"
          on:click={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}
