import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cold',
  templateUrl: './cold.component.html',
  styleUrls: ['./cold.component.css']
})

export class ColdComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}

