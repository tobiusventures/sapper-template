<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style global>
  @tailwind 'base';
  @tailwind 'components';
  @tailwind 'utilities';
  @tailwind 'screens';

  :global(body) {
    @apply m-0 font-sans leading-normal text-gray-800;
    margin: 0;
  }

  :global(main) {
    @apply relative max-w-4xl bg-white p-8 my-0 mx-auto box-border;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    @apply mt-0 mx-0 mb-2 font-normal leading-tight;
  }

  :global(a) {
    color: inherit;
  }

  :global(code) {
    @apply font-mono text-sm text-gray-700 bg-gray-100 py-1 px-2 rounded-sm;
  }

  @screen sm {
    :global(body) {
      @apply text-lg;
    }
  }
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>
