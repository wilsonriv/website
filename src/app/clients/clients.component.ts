import { Component, OnInit } from '@angular/core';
import { GroupClient } from 'src/app/clients/group-client.model';
import { ClientService } from 'src/app/clients/client.service';
import { Client } from 'src/app/clients/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
