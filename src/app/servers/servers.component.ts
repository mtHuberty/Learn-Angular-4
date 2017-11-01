import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server>', //Template or templateUrl is required in any component
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit() {
  }

}
