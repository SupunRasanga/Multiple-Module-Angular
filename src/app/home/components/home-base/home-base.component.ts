import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-base',
  // templateUrl: './home-base.component.html',
  template: '<router-outlet></router-outlet>'
})
export class HomeBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
