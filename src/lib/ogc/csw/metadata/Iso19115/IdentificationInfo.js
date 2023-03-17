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

    status() {
        return nodeValue(this.identification()["gmd:status"]["gmd:MD_ProgressCode"])

    }
}
    
