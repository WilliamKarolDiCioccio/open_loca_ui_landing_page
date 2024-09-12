<script>
  import { Icon } from "svelte-materialdesign-icons";
  import { Modals, closeModal, openModal, modals } from "svelte-modals";
  import Modal from "./ImageModal.svelte";

  // Modal funcionality
  function handleOpen(src, alt, caption) {
    openModal(Modal, {
      src: src,
      alt: alt,
      caption: caption,
      onOpenAnother: () => {
        handleOpen();
      },
    });
  }

  let screenshots = [
    {
      src: "/images/chat_page_light_theme.png",
      alt: "Chat Page",
      caption:
        "From the chat page, you can communicate with your favorite models. You can embed images, videos, and more.",
    },
    {
      src: "/images/models_page_light_theme.png",
      alt: "Models Management Page",
      caption:
        "This picture shows the models management page. From here, you can pull, push, create, and delete models.",
    },
    {
      src: "/images/model_settings_light_theme.png",
      alt: "Settings Page",
      caption:
        "In the settings page, you can find all you need to tweak OpenLocalUI to your liking.",
    },
  ];
</script>

<section id="screenshots" class="bg-stone-950 py-20">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-white text-center mb-12">Screenshots</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each screenshots as screenshot}
        <div
          class="relative overflow-hidden rounded-lg shadow-lg group transition-all hover:scale-105"
          data-aos="fade-up"
          data-aos-delay={screenshots.indexOf(screenshot) * 150}
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            class="w-full h-auto transform transition-transform duration-700 group-hover:scale-150"
          />

          <div
            class="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-300"
          >
            <!-- Fullscreen Button -->
            <button
              class="flex items-center px-4 py-2 text-black bg-white rounded-full space-x-2 hover:bg-gray-200 transition"
              on:click={() =>
                handleOpen(screenshot.src, screenshot.alt, screenshot.caption)}
            >
              <span>Fullscreen</span>
              <Icon name="fullscreen" class="w-8 h-8" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<Modals></Modals>
