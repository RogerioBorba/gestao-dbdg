<script>
    import { onMount } from 'svelte';
  	import {map, currentBaseLayer} from '$lib/store/storeMap';
    import {osmTileLayer} from '$lib/component/baseTile/baseTiles'
    import { browser } from '$app/environment';
   	onMount( async() => {
      if(browser) { 
        const leaflet = await import('leaflet');

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
        link.onload = () => {

          map.set(leaflet.map('map', { zoomControl: false }).setView({lon: -60, lat: -15}, 4));
          if(!$currentBaseLayer)
              currentBaseLayer.set(osmTileLayer)
          $currentBaseLayer.addTo($map);
          // show the scale bar on the lower left corner
          L.control.scale({imperial: false, metric: true}).addTo($map);
          //show a marker on the map
         // L.marker({lon: -43, lat: -19}).bindPopup('The center of the world').addTo($map);
		  
        };
		     document.head.appendChild(link);	        	
      }
    });
</script>

<div id="map" class="fixed w-full h-full z-0"></div>


<style>
   /* @import 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';*/
</style>