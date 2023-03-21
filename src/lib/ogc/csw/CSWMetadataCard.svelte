<script>
    import {MDIdentification} from '$lib/ogc/csw/metadata/Iso19115/IdentificationInfo'
    import { onMount } from 'svelte';
    import { nodeValue } from '$lib/xml-json/utils'
    export let  metadataJSON;
    let identification = null;
    let status = ''
    let title = ''    
    let standardName = metadataJSON["gmd:metadataStandardName"]["gco:CharacterString"]
    //let status = metadataJSON["gmd:identificationInfo"]["srv:SV_ServiceIdentification"]["gmd:status"]["gmd:MD_ProgressCode"]
    

    $: if(identification){
        status = identification.status()
        title = identification.title()
    }
        
    onMount(async () => {
        identification = new MDIdentification (metadataJSON["gmd:identificationInfo"])
        console.log(identification)
        
    })

</script>
<div class= "p-2 text-sm text-left text-gray-800 bg-gray-200  rounded-md shadow-sm hover:shadow-md flex flex-col" >
    <h2 class="font-bold">{ title }</h2>
    <h2 class="font-semibold"> Padrão de metadados: { nodeValue(standardName) }</h2>
    <h2 class="font-semibold"> Status: {status} </h2>
</div>