function nodeValue(node) {
    return node['#text'] || node['#cdata-section']
}

export class MDIdentification {
    constructor(metadataObject) {
        this.metadataObject = metadataObject
    }
    
    identification() {
        return this.metadataObject["gmd:MD_DataIdentification"] || this.metadataObject["srv:SV_ServiceIdentification"]
    }

    title() {
        return this.identification()["gmd:citation"]["gmd:CI_Citation"]["gmd:title"]["gco:CharacterString"]["#text"]
        
    }

    status() {
        return this.identification()["gmd:status"]["gmd:MD_ProgressCode"]["@attributes"].codeListValue

    }
}
    
