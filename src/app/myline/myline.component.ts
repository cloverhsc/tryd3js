import { Component, OnInit, Input, OnChanges,
    ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-myline',
  templateUrl: './myline.component.html',
  styleUrls: ['./myline.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MylineComponent implements OnInit {

    @ViewChild('myline') private element: ElementRef;
    private data: Array<any>;
    constructor() { }

    ngOnInit() {
        this.data = [];
        for (let i = 0; i < (Math.random() * 10); i++ ) {
            this.data.push({'x': Math.random() * 100, 'y': Math.random() * 100 } );
        }
        this.drawLine(this.data);
    }

    drawLine(pointAry: Array<any>) {
        let blk = this.element.nativeElement;
        let svg = d3.select(blk).append('svg')
                    .attr('width', 500 )
                    .attr('height', 500);
        let line = d3.line()
                    .x((d: Array<any>) => d['x'])
                    .y((d: Array<any>) => d['y]']);

        let xDomain = Array.from({length: 20}, (x, i) => i.toString());
        let x = d3.scaleBand().domain(xDomain).rangeRound([0, 500]);
        svg.append('g').attr('class', 'myline-axis-x').call(d3.axisBottom(x));

        /*svg.append('path').attr('d', line(pointAry))
                .attr('stroke', '#000')
                .attr('stroke-width', '5px')
                .attr('fill', 'none');*/
    }
}
