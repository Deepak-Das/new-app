import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visualization = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up the SVG container
    const svg = d3.select(svgRef.current);

    // Extract data from JSON
    const entities = data.entities;
    const connections = data.connections;

    // Create nodes and links for D3 force simulation
    const nodes = entities.map(entity => ({ id: entity.name }));
    const links = connections.map(connection => ({
      source: connection.Start,
      target: connection.End,
    }));

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
      .attr('stroke', 'red'); // Set the link color to red

    // Create nodes
    const node = svg
      .selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node');

    // Add circles to represent nodes
    node
      .append('circle')
      .attr('r', 10)
      .attr('fill', 'lightblue');

    // Add text labels to nodes
    node
      .append('text')
      .text(d => d.id)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.2em')
      .attr('fill', 'black');

    // // Add icons inside the circle nodes
    // node
    // .append('image')
    // .attr('xlink:href', d => d.iconUrl)
    // .attr('x', -16) // Adjust the x-position to center the icon
    // .attr('y', -16) // Adjust the y-position to center the icon
    // .attr('width', 32) // Set the icon width
    // .attr('height', 32); // Set the icon height


    // Add distances between nodes
    const distanceLines = svg
      .selectAll('.distance')
      .data(connections)
      .enter()
      .append('line')
      .attr('class', 'distance')
      .attr('stroke', 'gray') // Set the distance line color to gray
      .attr('stroke-dasharray', '10,10'); // Make the distance line dashed

    // Update node positions and distance line positions on each tick of the simulation
    simulation.on('tick', () => {
      node.attr('transform', d => `translate(${d.x},${d.y})`);
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      // Update the positions of distance lines
      distanceLines
        .attr('x1', d => simulation.nodes().find(node => node.id === d.Start).x)
        .attr('y1', d => simulation.nodes().find(node => node.id === d.Start).y)
        .attr('x2', d => simulation.nodes().find(node => node.id === d.End).x)
        .attr('y2', d => simulation.nodes().find(node => node.id === d.End).y);
    });
  }, [data]);

  return (
    <svg width="800" height="400" ref={svgRef}>
      {/* SVG container */}
    </svg>
  );
};

export default Visualization;
