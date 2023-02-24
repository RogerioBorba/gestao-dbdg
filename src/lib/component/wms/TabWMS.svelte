<script>
    import {  Tabs, TabItem} from 'flowbite-svelte';
   // import WMSSearchByNTK from './WMSSearchByNTK.svelte'
    import BaseWMS from './BaseWMS.svelte'  
</script>
    
<Tabs style="underline">
    <TabItem open title='Por instituição'>
        <BaseWMS></BaseWMS>
        
    </TabItem>
    <TabItem title='Por nome ou título ou palavra chave'>
        <!--<WMSSearchByNTK></WMSSearchByNTK>-->
    </TabItem>
</Tabs>