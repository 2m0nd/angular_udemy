import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server wes created.';
  serverName = '';

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created with name - ' + this.serverName;
  }


  onUpdateServerName(event: any) {
    console.log( event.target.value);
    this.serverName = event.target.value;
  }

}
