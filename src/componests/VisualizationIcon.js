import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const VisualizationIcon = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up the SVG container
    const svg = d3.select(svgRef.current);

    // Extract data from JSON
    const entities = data.entities;
    const connections = data.connections;

    // Create nodes and links for D3 force simulation
    const nodes = entities.map(entity => ({
      id: entity.name,
      iconUrl: entity.iconUrl, // Add icon URL to the node data
    }));
    const links = connections.map(connection => ({
      source: connection.Start,
      target: connection.End,
    }));

    // Set an initial position for nodes to spread them out
    nodes.forEach((node, index) => {
      node.x = index * 100; // Adjust the multiplier for the desired horizontal spacing
      node.y = 200; // Keep nodes vertically centered
    });

    // Create a D3 force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-120))
      .force('center', d3.forceCenter(400, 200));

    // Create links
    const link = svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('stroke', 'red');

    // Create nodes
    const node = svg
      .selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`); // Set initial node positions

    // Add circles to represent nodes
    node
      .append('circle')
      .attr('r', 20)
      .attr('fill', 'lightblue');

    // Add icons inside the circle nodes
    node
      .append('image')
      .attr('xlink:href', d => d.iconUrl)
      .attr('x', -16) // Adjust the x-position to center the icon
      .attr('y', -16) // Adjust the y-position to center the icon
      .attr('width', 32) // Set the icon width
      .attr('height', 32); // Set the icon height

    // Update node positions and distance line positions on each tick of the simulation
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      // Update the positions of nodes and icons
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }, [data]);

  return (
    <svg width="800" height="400" ref={svgRef}>
      {/* SVG container */}
    </svg>
  );
};

export default VisualizationIcon;
