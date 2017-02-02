import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

    public dd: Array<any> ;
    constructor() { }

    ngOnInit() {
        this.generateData();
    }

    generateData() {
    this.dd = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.dd.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
    console.log(this.dd);
  }
}
