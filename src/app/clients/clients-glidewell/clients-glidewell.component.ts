import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { GLIDEWELL } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-glidewell',
  templateUrl: './clients-glidewell.component.html',
  styleUrls: ['./clients-glidewell.component.css']
})
export class ClientsGlidewellComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, GLIDEWELL);
  }
}
