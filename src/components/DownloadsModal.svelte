<script>
  import { onMount } from 'svelte'
  import { closeModal } from 'svelte-modals'
  import { Icon } from 'svelte-materialdesign-icons'

  export let isOpen

  // Metadata for downloads
  const releases = {
    windows: { available: true },
    macos: { available: false },
    linux: { available: true }
  }

  let currentPlatform = ''

  // Function to determine the user's platform
  function determinePlatform() {
    const platform = navigator.userAgentData?.platform || navigator.platform
    currentPlatform = platform.includes('Win')
      ? 'windows'
      : platform.includes('Mac')
        ? 'macos'
        : platform.includes('Linux')
          ? 'linux'
          : 'unknown'
  }

  // Function to handle the download based on the platform
  async function handleDownload(platform) {
    if (!releases[platform].available) return

    try {
      switch (platform) {
        case 'windows':
          const OWNER = 'WilliamKarolDiCioccio'
          const REPO = 'open_local_ui'
          const response = await fetch(
            `https://api.github.com/repos/${OWNER}/${REPO}/releases`
          )

          if (!response.ok) throw new Error('Failed to fetch releases')

          const releasesData = await response.json()
          const release = releasesData.find(
            (release) => release.assets?.length > 0
          )
          if (!release) throw new Error('No releases with assets found')

          const windowsAsset = release.assets.find((asset) =>
            asset.name.toLowerCase().endsWith('.exe')
          )
          if (!windowsAsset) throw new Error('No Windows asset found')

          window.open(windowsAsset.browser_download_url, '_self')
          break

        case 'linux':
          window.open(
            'https://github.com/WilliamKarolDiCioccio/open_local_ui/releases',
            '_blank'
          )
          break

        case 'macos':
          console.log('macOS download not available')
          break

        default:
          console.log('Platform not supported')
      }
    } catch (error) {
      console.error(`Error downloading for ${platform}:`, error)
    }
  }

  onMount(() => determinePlatform())
</script>

{#if isOpen}
  <div
    role="dialog"
    class="fixed p-16 flex justify-center items-center bg-black bg-opacity-60 z-50 transition-opacity duration-300"
  >
    <div
      class="bg-stone-800 text-white rounded-lg p-8 max-w-lg w-full shadow-xl transform transition-transform duration-300"
    >
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center mb-6">Download OpenLocalUI</h2>

      <!-- Download Buttons -->
      <div class="flex flex-col gap-4 items-center mt-6">
        {#each Object.keys(releases) as os}
          <button
            type="button"
            class="w-full py-3 px-4 rounded-full transition duration-300 flex justify-between items-center
            {releases[os].available
              ? currentPlatform === os
                ? 'bg-white text-black'
                : 'bg-stone-700 hover:bg-stone-600'
              : 'bg-stone-400 cursor-not-allowed opacity-50'}"
            on:click={() => handleDownload(os)}
            disabled={!releases[os].available}
          >
            {os === 'windows'
              ? 'Download for Windows'
              : os === 'macos'
                ? 'Download for macOS'
                : 'Download for Linux'}
            <img
              src={`/icons/${os}.svg`}
              alt={os}
              width="25"
              height="25"
              class="transition-filter duration-300 {currentPlatform === os
                ? 'filter brightness-0'
                : ''}"
            />
          </button>
        {/each}

        <!-- Close Button -->
        <button
          class="bg-red-600 hover:bg-red-500 text-white mt-8 py-2 px-4 rounded-full transition duration-300"
          on:click={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  div[role='dialog'] {
    opacity: 1;
  }
</style>
