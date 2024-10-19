<script>
  import { Icon } from 'svelte-materialdesign-icons'
  import { Modals, closeModal, openModal, modals } from 'svelte-modals'

  import Modal from './DownloadsModal.svelte'

  function handleOpen() {
    openModal(Modal, {})
  }
</script>

<section id="about" class="py-20">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="text-center">
      <h2
        class="text-2xl md:text-4xl font-bold mb-12"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        About OpenLocalUI
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Card 1 -->
        <div
          class="p-6 rounded-lg bg-gradient-to-br from-gray-800 via-stone-900 to-gray-700 bg-opacity-10 backdrop-blur-md border border-gray-100 border-opacity-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="text-3xl mb-4">🤖</div>
          <h3 class="text-xl font-semibold mb-2">Open Source & Free</h3>
          <p class="text-gray-300 text-sm md:text-base">
            <strong>OpenLocalUI</strong> is an open-source project by
            <strong>William Karol Di Cioccio</strong>. Our goal is to make
            interacting with large language models (LLMs) locally accessible to
            everyone, without any cost. 🆓
          </p>
        </div>
        <!-- Card 2 -->
        <div
          class="p-6 rounded-lg bg-gradient-to-br from-gray-800 via-stone-900 to-gray-700 bg-opacity-10 backdrop-blur-md border border-gray-100 border-opacity-20"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="text-3xl mb-4">🔒</div>
          <h3 class="text-xl font-semibold mb-2">Privacy & Security</h3>
          <p class="text-gray-300 text-sm md:text-base">
            We prioritize your privacy and community needs, allowing users to
            harness powerful AI tools without compromising their data. Our
            commitment is to high-quality, secure software. 💪
          </p>
        </div>
        <!-- Card 3 -->
        <div
          class="p-6 rounded-lg bg-gradient-to-br from-gray-800 via-stone-900 to-gray-700 bg-opacity-10 backdrop-blur-md border border-gray-100 border-opacity-20"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div class="text-3xl mb-4">⭐️</div>
          <h3 class="text-xl font-semibold mb-2">Support & Contribution</h3>
          <p class="text-gray-300 text-sm md:text-base">
            Your support is invaluable! For us GitHub stars are on par with
            financial donations, so don't hesitate to visit the
            <a
              href="https://github.com/WilliamKarolDiCioccio/open_local_ui"
              class="text-purple-500 underline hover:text-purple-300 transition"
            >
              Official Repository</a
            >.
          </p>
        </div>
      </div>

      <!-- Call to Action Button -->
      <div class="mt-12" data-aos="fade-up" data-aos-delay="900">
        <button
          type="button"
          class="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-500 transition-all duration-300 p-2 group"
          on:click={() => handleOpen()}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="flex flex-row items-center">
            Download the Installer

            <!-- Alpha Version Warning -->
            <div
              class="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded-full"
            >
              Alpha
            </div>

            <div
              class="ml-0 w-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5"
            >
              <Icon class="w-5 h-5" name="download" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</section>
