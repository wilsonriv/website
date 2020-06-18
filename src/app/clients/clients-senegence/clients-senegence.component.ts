import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { SENEGENCE } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-senegence',
  templateUrl: './clients-senegence.component.html',
  styleUrls: ['./clients-senegence.component.css']
})
export class ClientsSenegenceComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, SENEGENCE);
  }
}
