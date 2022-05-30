<script lang="ts">
	import  * as prismicH from "@prismicio/helpers";
	import type { PrismicDocument } from "@prismicio/types"
	export let result: PrismicDocument<Record<string, any>, string, string> 
</script>

{@html prismicH.asText(result.data.title)}
{@html prismicH.asHTML(result.data.content)}
