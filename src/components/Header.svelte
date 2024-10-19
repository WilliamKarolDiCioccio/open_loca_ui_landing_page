<script>
  import { Icon } from 'svelte-materialdesign-icons'

  let isMenuOpen = false

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen
  }

  // Scroll progress functionality
  window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress')
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    scrollProgress.style.width = progress + '%'
  })
</script>

<header class="h-full w-full bg-stone-900 sticky top-0 z-50 shadow-2xl">
  <!-- Scroll Progress Bar -->
  <div class="h-1 w-full bg-gray-200">
    <div
      id="scroll-progress"
      class="h-full bg-gradient-to-r from-yellow-300 via-orange-500 to-purple-500 transition-all duration-100"
      style="width: 0%;"
    ></div>
  </div>

  <div
    class="container mx-auto px-6 py-4 flex justify-between items-center relative"
  >
    <!-- Logo -->
    <a href="/" class="text-2xl font-bold text-white flex items-center">
      <div class="mr-4">
        <img
          src="/images/logo.svg"
          alt="OpenLocalUI Logo"
          class="w-12 h-12 lg:w-16 lg:h-16 object-contain transition transform hover:rotate-6 hover:scale-110 duration-300"
        />
      </div>
      OpenLocalUI
    </a>

    <!-- Hamburger button (visible only on small screens) -->
    <button
      class="lg:hidden text-gray-300 focus:outline-none"
      on:click={toggleMenu}
      aria-label="Toggle Menu"
    >
      <Icon name="menu" class="w-8 h-8 transition transform hover:scale-110" />
    </button>

    <!-- Navigation links for Desktop -->
    <nav class="hidden lg:flex space-x-8 items-center">
      <ul class="flex space-x-6">
        <li>
          <a
            href="#cta"
            class="bg-gradient-to-r from-yellow-300 to-purple-500 inline-block bg-clip-text text-transparent font-extrabold hover:text-opacity-80 transition"
          >
            Get Started
          </a>
        </li>
        <li>
          <p
            class="cursor-not-allowed bg-gradient-to-r from-yellow-300 to-purple-500 inline-block bg-clip-text text-transparent font-extrabold opacity-70"
          >
            Docs
          </p>
        </li>
        <li>
          <div class="h-6 w-px bg-gray-300"></div>
        </li>
        <li>
          <a
            href="#about"
            class="text-gray-300 hover:text-white font-extrabold transition"
          >
            About
          </a>
        </li>
        <li>
          <a href="#roadmap" class="text-gray-300 hover:text-white transition">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#features" class="text-gray-300 hover:text-white transition">
            Features
          </a>
        </li>
        <li>
          <a
            href="#screenshots"
            class="text-gray-300 hover:text-white transition"
          >
            Screenshots
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu -->
    <nav
      class={`lg:hidden bg-stone-900 absolute inset-x-0 top-full transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <ul class="px-6 py-4 space-y-4 shadow-lg border-t border-stone-800">
        <li>
          <a
            href="#cta"
            class="bg-gradient-to-r from-yellow-300 to-purple-500 inline-block bg-clip-text text-transparent font-extrabold"
            on:click={toggleMenu}
          >
            Get Started
          </a>
        </li>
        <li>
          <p
            class="cursor-not-allowed bg-gradient-to-r from-yellow-300 to-purple-500 inline-block bg-clip-text text-transparent font-extrabold opacity-70"
          >
            Docs
          </p>
        </li>
        <li>
          <div class="h-px w-full bg-gray-300"></div>
        </li>
        <li>
          <a
            href="#about"
            class="text-gray-300 hover:text-white font-extrabold"
            on:click={toggleMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#roadmap"
            class="text-gray-300 hover:text-white"
            on:click={toggleMenu}
          >
            Roadmap
          </a>
        </li>
        <li>
          <a
            href="#features"
            class="text-gray-300 hover:text-white"
            on:click={toggleMenu}
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#screenshots"
            class="text-gray-300 hover:text-white"
            on:click={toggleMenu}
          >
            Screenshots
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
