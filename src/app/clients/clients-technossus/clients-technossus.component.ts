import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { TECHNOSSUS } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-technossus',
  templateUrl: './clients-technossus.component.html',
  styleUrls: ['./clients-technossus.component.css']
})
export class ClientsTechnossusComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, TECHNOSSUS);
  }
}
