import { Component, OnInit } from '@angular/core';
import { ClientBase } from '../client-base';
import { ClientService } from '../client.service';
import { INTEGUER } from '../clients.constants';

@Component({
  selector: 'app-clients-integuer',
  templateUrl: './clients-integuer.component.html',
  styleUrls: ['./clients-integuer.component.css']
})
export class ClientsInteguerComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, INTEGUER);
  }
}
