<script context="module">
	// retain module scoped expansion state for each tree node
	const _expansionState = {
		/* treeNodeId: expanded <boolean> */
	}
</script>
<script>
//	import { slide } from 'svelte/transition'
	export let wmsLayer;
    export let onClick = null;
    export let capabilitiesUrl;
	let label = wmsLayer.name();
	let expanded = _expansionState[label] || false;
    let children = wmsLayer.layers();
    let display = '';
	const toggleExpansion = () => {
		expanded = _expansionState[label] = !expanded
        onClick(wmsLayer)
	}
	//$: arrowDown = expanded
    
</script>
<label on:click={toggleExpansion} class="flex-grow text-grey-darkest hover:bg-red truncate text-left text-xs" title="{wmsLayer.description()}">{wmsLayer.description()}</label>
{#if children && expanded}
    <ul><!-- transition:slide -->
        {#each children as child}
            <li><svelte:self wmsLayer={child} onClick={onClick} /></li>    
        {/each}
    </ul>
{/if}
<style>
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem; 
		user-select: none;
	}
	.no-arrow { padding-left: 1.0rem; }
	.arrow {
		cursor: pointer;
		display: inline-block;
		/* transition: transform 200ms; */
	}
	.arrowDown { transform: rotate(90deg); }
</style>
