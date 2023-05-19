import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';

const WordCloud = ({ data, width = '100%', height = 200 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const drawWordCloud = () => {
      const layout = cloud()
        .size([width, height])
        .words(data)
        .padding(20)
        .rotate(0)
        .fontSize((d) => d.size)
        .on('end', draw);

      layout.start();

      function draw(words) {
        const svg = d3.select(svgRef.current);

        svg
          .attr('width', layout.size()[0])
          .attr('height', layout.size()[1])
          .append('g')
          .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .style('font-size', (d) => `${d.size}px`)
          .style('fill', () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
          .style('fill-opacity', (d) => (d.size / Math.max(...data.map((entry) => entry.size))))
          .attr('text-anchor', 'middle')
          .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
          .text((d) => d.text);
      }
    };

    drawWordCloud();
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
};

export default WordCloud;