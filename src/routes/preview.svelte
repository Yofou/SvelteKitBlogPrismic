<script>
    import createClient from "$lib/prismic"
    import { goto } from "$app/navigation"
    import { onMount } from "svelte"

    onMount(async () => {
      const client = createClient(fetch)
      const redirect = await client.resolvePreviewURL({defaultURL: "/"})
      await goto(redirect) // This does a client-side redirect to that URL
    })
</script>
