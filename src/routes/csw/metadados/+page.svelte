<script>
    import CSWMetadataCard from '$lib/ogc/csw/CSWMetadataCard.svelte';
    import {postURL} from '$lib/store/storeMetadata';
    import { fetchDataByPost } from '$lib/request/requestDataByPost';
    import { textXml2Json } from '$lib/xml-json/xml2Json';
    import { onMount } from 'svelte';
    let  metadataObj  = {}
    let arrMetadataObj = []

    function metadataObjects() {
        let body = $postURL.body
        body.replace('maxRecords="1000000"', 'maxRecords="20"')
    }
    onMount(async () => {
       
        try {
            let res = await fetchDataByPost($postURL.url, $postURL.body,'application/xml')       
            
            
            let xmlText = await res.text()
            let xmlJsonObject = textXml2Json(xmlText)
            console.log(xmlJsonObject)
            metadataObj = xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["gmd:MD_Metadata"]
            //qtdMetadados = xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["@attributes"]["numberOfRecordsMatched"]
            
        } catch (error) {
            console.log("Erro na chamada da requisição")
            console.log(error, error.statusText, error.status)
        
        }
		
	});
</script>

<div class = "m-2 grid gap-2 md:grid-cols-3 grid-cols-1">
     
    {#each Object.entries(metadataObj) as arr}
        <CSWMetadataCard metadataJSON ={arr[1]} ></CSWMetadataCard>
    {/each}
          

</div>