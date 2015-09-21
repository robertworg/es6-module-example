import * as d3 from 'd3'

export class XYGrid {
    constructor(length, tickOffset) {
        this.length = length;
        this.tickOffset = tickOffset;
    }

    draw(tag) {
        var svg = d3.select(tag).append('svg')
            .attr('width', this.length)
            .attr('height', this.length)
            .attr('style', 'border: 1px solid grey');
        this.drawX(svg);
        this.drawY(svg);
        return svg;
    }

    drawX(svg) {
        var i = this.tickOffset;
        for (i; i <= this.length; i += this.tickOffset) {
            if (i == this.length / 2) {
                svg.append('line')
                    .style('stroke', 'black')
                    .style('stroke-width', '1px')
                    .attr('x1', 0)
                    .attr('y1', this.length / 2)
                    .attr('x2', this.length)
                    .attr('y2', this.length / 2);
            }
            else {
                svg.append('line')
                    .style('stroke', '#f5f5f5')
                    .style('stroke-width', '1px')
                    .attr('x1', 0)
                    .attr('y1', i)
                    .attr('x2', this.length)
                    .attr('y2', i);
            }
        }
    }

    drawY(svg) {
        var i = this.tickOffset;
        for (i; i <= this.length; i += this.tickOffset) {

            if (i == this.length / 2) {
                svg.append('line')
                    .style('stroke', 'black')
                    .style('stroke-width', '1px')
                    .attr('x1', this.length / 2)
                    .attr('y1', 0)
                    .attr('x2', this.length / 2)
                    .attr('y2', this.length);
            }
            else {
                svg.append('line')
                    .style('stroke', '#f5f5f5')
                    .style('stroke-width', '1px')
                    .attr('x1', i)
                    .attr('y1', 0)
                    .attr('x2', i)
                    .attr('y2', this.length);
            }
        }
    }
}
