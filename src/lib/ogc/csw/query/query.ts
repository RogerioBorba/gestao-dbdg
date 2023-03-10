export let simpleText = `<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" version="2.0.2" resultType="results" startPosition="1" maxRecords="5" outputFormat="application/xml" outputSchema="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
<csw:Query typeNames="csw:Record">
  <csw:ElementSetName>brief</csw:ElementSetName>
  <csw:Constraint version="1.1.0">
    <ogc:Filter>
      <ogc:PropertyIsEqualTo>
          <ogc:PropertyName>csw:AnyText</ogc:PropertyName>
          <ogc:Literal>__csw_any_text__</ogc:Literal>
        </ogc:PropertyIsEqualTo>
    </ogc:Filter>
  </csw:Constraint>
</csw:Query>
</csw:GetRecords>`

export let anyTextWithWMSProtocol = `<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" version="2.0.2" resultType="results" startPosition="1" maxRecords="5" outputFormat="application/xml" outputSchema="http://www.opengis.net/cat/csw/2.0.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd">
<csw:Query typeNames="csw:Record">
  <csw:ElementSetName>brief</csw:ElementSetName>
  <csw:Constraint version="1.1.0">
    <ogc:Filter>
      <ogc:And>
        <ogc:PropertyIsEqualTo>
          <ogc:PropertyName>csw:AnyText</ogc:PropertyName>
          <ogc:Literal>__csw_any_text__</ogc:Literal>
        </ogc:PropertyIsEqualTo>
        <ogc:PropertyIsEqualTo>
            <ogc:PropertyName>OnlineResourceType</ogc:PropertyName>
            <ogc:Literal>OGC:WMS</ogc:Literal>
        </ogc:PropertyIsEqualTo>
      </ogc:And>
    </ogc:Filter>
  </csw:Constraint>
</csw:Query>
</csw:GetRecords>`