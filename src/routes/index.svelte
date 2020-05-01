<style>
  h1, figure, p {
    @apply text-center mx-auto my-0;
  }

  h1 {
    @apply text-5xl uppercase font-bold mt-0 mx-0 mb-2;
  }

  figure {
    @apply mt-0 mx-0 mb-4;
  }

  img {
    @apply w-full max-w-sm mt-0 mx-0 mb-4;
  }

  p {
    @apply my-4 mx-auto;
  }

  @screen sm {
    h1 {
      @apply text-6xl;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt='Borat' src='great-success.png'>
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
