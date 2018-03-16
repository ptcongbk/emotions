import { Component, OnInit, NgZone, ElementRef, Input } from '@angular/core';
import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';
import { $ } from 'protractor';

@Component({
  selector: 'app-mytree',
  template: '',
  styleUrls: ['./mytree.component.css']
})


export class MytreeComponent implements OnInit {

  @Input() data: any;

  svg: any;

  // Init D3 variable
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnChanges () {
    this.render();
  }

  ngOnInit() {
    // this.render();
  }

  render() {
    let self = this;
    let d3 = this.d3;
    let d3ParentElement: any;
    
    let tree = d3.tree()
          .size([500, 500]);
    let padding = 25;
    let width = 650;
    let height = 500;
    if (this.parentNativeElement !== null) {
      if (this.svg) {
        this.svg.selectAll('*').remove();
      } else {
        this.svg = d3.select(this.parentNativeElement)
        .append('svg')        // create an <svg> element
        .attr('width', width) // set its dimensions
        .attr('height', height);
      }
      let g = this.svg.append('g');
      let nodes = d3.hierarchy(this.data.tree);
      nodes = tree(nodes);
      // console.log(nodes);
      let link = g.selectAll('.link')
          .data(nodes.descendants().slice(1))
          .enter()
          .append('path')
            .attr('class', 'link')
            .attr('d', (d) => {
              // console.log(d);
              return 'M' + d.y + ',' + d.x
                + 'C' + (d.y + d.parent.y)  / 2 + ','  + d.x
                + ' ' + (d.y + d.parent.y) / 2 + ',' + d.parent.x
                + ' ' + d.parent.y + ',' + d.parent.x;
            })
            .attr('fill', 'none')
            .attr('stroke', function(d){
              if (d.data.active) {
                return 'rgb(33, 150, 243)';
              } else {
                return 'orange';
              }
            })
            .style('opacity', function(d){
              if (d.data.active) {
                return 1;
              } else {
                return 0.1;
              }
            })
            .attr('stroke-width', 2);
      // adds each node as a group
      let node = g.selectAll('.node')
          .data(nodes.descendants())
          .enter()
          .append('g')
          .attr('class', (d) => {
          return 'node' +
          (d.children ? ' node--internal' : ' node--leaf'); })
          .attr('transform', (d) => 'translate(' + d.y + ',' + d.x + ')' );
      // adds the circle to the node
      node.append('circle')
      .attr('r', (d) => {
        // if (d.)
        if (d.data.active ) {
          return 12;
        } else {
          return 3;
        }
      })
      .attr('stroke', '#333')
      .attr('stroke-width', 2)
      .style('opacity', function(d){
        if (d.data.active ) {
          return 1;
        } else {
          return 0.5;
        }
      })
      .attr('fill', function(d){
        if (d.data.active ) {
          return 'rgb(33, 150, 243)';
        } else {
          return '#000';
        }
      });
      // node.append('circle').attr('r', 4.5);
      node.append('text').attr('dx', function(d) {
        return d.children ? -8 : 8
      })
      .attr('dy', 3).attr('text-anchor', function(d) {
          return d.children ? 'end' : 'start'
      })
      .style('opacity', function(d){
        if (d.data.active ) {
          return 1;
        } else {
          return 0.5;
        }
      })
      .text(function(d) {
          return d.data.name;
      });
      // adds the text to the node
      // node.append('text')
      //     .attr('dx', 3)
      //     .attr('x', (d) => d.children ? -40 : 0 )
      //     .style('text-anchor', (d) =>  d.children ? 'end' : 'start' )
      //     .text((d) => d.data.name );
    } else {
      // console.log('ssss');
    }
  }
}
