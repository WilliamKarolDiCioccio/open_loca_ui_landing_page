<script>
  import { Icon } from "svelte-materialdesign-icons";

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  // Scroll progress functionality
  window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scroll-progress");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = progress + "%";
  });
</script>

<header class="h-full w-full bg-stone-900 sticky top-0 z-50 shadow-2xl">
  <!-- Scroll Progress Bar -->
  <div class="h-1 w-full bg-gray-200">
    <div
      id="scroll-progress"
      class="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-100"
      style="width: 0%;"
    ></div>
  </div>

  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-2xl font-bold text-white">
      <div class="flex items-center">
        <div class="mr-6 flex-shrink-0">
          <img
            src="/images/logo.svg"
            alt="OpenLocalUI Logo"
            class="w-16 h-16 lg:w-16 lg:h-16 object-contain"
          />
        </div>
        OpenLocalUI
      </div>
    </a>

    <!-- Hamburger button (visible only on small screens) -->
    <button
      class="lg:hidden text-gray-300 focus:outline-none"
      on:click={toggleMenu}
      aria-label="Toggle Menu"
    >
      <Icon name="menu" class="w-8 h-8" />
    </button>

    <!-- Navigation links -->
    <nav class="hidden lg:block">
      <ul class="flex space-x-6">
        <li>
          <a
            href="#roadmap"
            class="text-underline-animation text-gray-300 hover:text-white"
            >Roadmap</a
          >
        </li>
        <li>
          <a
            href="#features"
            class="text-underline-animation text-gray-300 hover:text-white"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#screenshots"
            class="text-underline-animation text-gray-300 hover:text-white"
            >Screenshots</a
          >
        </li>
        <li>
          <a
            href="#cta"
            class="text-underline-animation text-gray-300 hover:text-white"
            >Get Started</a
          >
        </li>
      </ul>
    </nav>
  </div>

  <!-- Mobile Menu (opens towards the bottom) -->
  <nav
    class={`lg:hidden bg-stone-900 transition-all absolute inset-x-0 ${isMenuOpen ? "block" : "hidden"}`}
    style="top: 100%; left: 0; right: 0;"
  >
    <ul class="px-6 py-4 space-y-4 shadow-lg border-t border-stone-800">
      <li>
        <a
          href="#roadmap"
          class="text-underline-animation block text-gray-300 hover:text-white"
          >Roadmap</a
        >
      </li>
      <li>
        <a
          href="#features"
          class="text-underline-animation block text-gray-300 hover:text-white"
          >Features</a
        >
      </li>
      <li>
        <a
          href="#screenshots"
          class="text-underline-animation block text-gray-300 hover:text-white"
          >Screenshots</a
        >
      </li>
      <li>
        <a
          href="#cta"
          class="text-underline-animation block text-gray-300 hover:text-white"
          >Get Started</a
        >
      </li>
    </ul>
  </nav>
</header>
