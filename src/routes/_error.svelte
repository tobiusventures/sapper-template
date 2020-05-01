<script>
  export let status;
  export let error;
  const dev = process.env.NODE_ENV === 'development';
</script>

<style>
  h1, p {
    @apply mx-auto my-0;
  }

  h1 {
    @apply mt-0 mx-0 mb-2 text-5xl font-bold;
  }

  p {
    @apply mx-auto my-4;
  }

  @screen sm {
    h1 {
      @apply text-6xl;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
