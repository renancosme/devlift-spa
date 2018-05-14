import { Component, OnInit } from '@angular/core';

declare var Materialize: any;
declare let $: any;

@Component({
  selector: 'devlift-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    $(document).ready(
      () => Materialize.updateTextFields()
    );    
  }

}
