import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { VERYS } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-verys',
  templateUrl: './clients-verys.component.html',
  styleUrls: ['./clients-verys.component.css']
})
export class ClientsVerysComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, VERYS);
  }
}
