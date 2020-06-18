import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { VERTAFORE } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-vertafore',
  templateUrl: './clients-vertafore.component.html',
  styleUrls: ['./clients-vertafore.component.css']
})
export class ClientsVertaforeComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, VERTAFORE);
  }
}
