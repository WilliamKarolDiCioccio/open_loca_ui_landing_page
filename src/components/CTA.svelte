<script>
  import { Icon } from 'svelte-materialdesign-icons'
  import { Modals, closeModal, openModal, modals } from 'svelte-modals'

  import Modal from './DownloadsModal.svelte'

  function handleOpen() {
    openModal(Modal, {})
  }
</script>

<section
  id="cta"
  class="bg-gradient-to-t from-cyan-500 to-stone-950 text-white py-20"
>
  <div class="container mx-auto px-6 text-center">
    <h2
      class="text-2xl md:text-4xl font-bold mb-4"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      Set it Up in A Few Clicks!
    </h2>
    <p class="text-xl md:text-xl mb-8" data-aos="fade-up" data-aos-delay="300">
      Have fun and enjoy the power of language models on your machine.
    </p>
    <button
      type="button"
      class="bg-white text-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 p-2 group"
      on:click={() => handleOpen()}
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div class="flex flex-row items-center">
        Download Now
        <div
          class="ml-0 w-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5"
        >
          <Icon class="w-5 h-5" name="download" />
        </div>
      </div>
    </button>
  </div>
</section>

<Modals></Modals>
