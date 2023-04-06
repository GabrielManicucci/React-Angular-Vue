import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() msg: String | undefined
  legenda: String = "i'am in the Angular"

  constructor() { }

  ngOnInit(): void {
    
  }
}
