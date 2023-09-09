import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visualization = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!data || data.entities.length === 0 || !svgRef.current) return;

    const svg = d3.select(svgRef.current);

    // Define a tooltip div
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // Create circles for entities
    const circles = svg
      .selectAll('circle')
      .data(data.entities)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => i * 200 + 100)
      .attr('cy', 200)
      .attr('r', 20)
      .style('fill', 'blue');

    // Create lines for connections
    svg
      .selectAll('line')
      .data(data.connections)
      .enter()
      .append('line')
      .attr('x1', (d) => {
        const startEntity = data.entities.find((entity) => entity.name === d.Start);
        return startEntity ? data.entities.indexOf(startEntity) * 200 + 100 : 0;
      })
      .attr('y1', 200)
      .attr('x2', (d) => {
        const endEntity = data.entities.find((entity) => entity.name === d.End);
        return endEntity ? data.entities.indexOf(endEntity) * 200 + 100 : 0;
      })
      .attr('y2', 200)
      .style('stroke', 'red');

    // Add tooltips on hover
    circles
      .on('mouseover', (event, d) => {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html(`<strong>${d.name}</strong><br />${JSON.stringify(d.properties, null, 2)}`)
          .style('left', d3.pointer(event)[0] + 'px')
          .style('top', d3.pointer(event)[1] - 28 + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition().duration(1000).style('opacity', 0);
      });

    // Additional D3 logic for your visualization

  }, [data]);

  return (
    <svg ref={svgRef} width={800} height={300}>
      {/* SVG container */}
    </svg>
  );
};

export default Visualization;
