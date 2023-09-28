import React from "react";
import CountyList from "./counties/CountyList";

const OhioSvg = ({ currentColor }) => {
  const svgStyles = {
    width: "45.03px",
    transform: "scale(16.3447)",
  };

  const svgContainer = {
    textAlign: "center",
  };

  return (
    <div style={svgContainer}>
      <svg
        xmlnsDc="http://purl.org/dc/elements/1.1/"
        xmlnsCc="http://creativecommons.org/ns#"
        xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlnsSvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.0"
        width="45.029999"
        height="50.889999"
        sodipodiVersion="0.32"
        inkscapeVersion="0.48.2 r9819"
        sodipodiDocname="oh.svg"
        inkscapeOutput_extension="org.inkscape.output.svg.inkscape"
        id="svg3081"
        viewBox="-30 10 100 30"
        preserveAspectRatio="xMidYMid meet"
        style={svgStyles}
      >
        <metadata id="metadata3083">
          <rdfRDF>
            <ccWork rdfAbout="">
              <dcFormat>image/svg+xml</dcFormat>
              <dcType rdfResource="http://purl.org/dc/dcmitype/StillImage" />
            </ccWork>
          </rdfRDF>
        </metadata>
        <sodipodiNamedview
          inkscapeWindow-height="1492"
          inkscapeWindow-width="2732"
          inkscapePageshadow="2"
          inkscapePageopacity="0.0"
          guidetolerance="10.0"
          gridtolerance="10.0"
          objecttolerance="10.0"
          borderopacity="1.0"
          bordercolor="#666666"
          pagecolor="#ffffff"
          inkscapeZoom="7.3693741"
          inkscapeCx="65.204949"
          inkscapeCy="22.564041"
          inkscapeWindow-x="-8"
          inkscapeWindow-y="-8"
          inkscapeCurrent-layer="svg3081"
          showguides="true"
          inkscapeGuide-bbox="true"
          fit-margin-top="0"
          fit-margin-left="0"
          fit-margin-right="0"
          fit-margin-bottom="0"
          inkscapeWindow-maximized="0"
          id="namedview3085"
          showgrid="false"
        />
        <defs id="defs3087" />
        <CountyList fillColor={currentColor} />
      </svg>
    </div>
  );
};

export default OhioSvg;
