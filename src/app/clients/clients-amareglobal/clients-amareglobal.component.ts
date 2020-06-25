import { Component, OnInit } from '@angular/core';
import { ClientBase } from '../client-base';
import { ClientService } from '../client.service';
import { AMARE_GLOBAL } from '../clients.constants';

@Component({
  selector: 'app-clients-amareglobal',
  templateUrl: './clients-amareglobal.component.html',
  styleUrls: ['./clients-amareglobal.component.css']
})
export class ClientsAmareglobalComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, AMARE_GLOBAL);
  }
}
