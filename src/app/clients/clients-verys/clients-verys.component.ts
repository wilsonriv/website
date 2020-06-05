import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients-verys',
  templateUrl: './clients-verys.component.html',
  styleUrls: ['./clients-verys.component.css']
})
export class ClientsVerysComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById('verys');
  }

}
