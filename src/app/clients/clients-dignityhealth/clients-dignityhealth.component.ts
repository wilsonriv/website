import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientBase } from '../client-base';
import { DIGNITY_HEALTH } from '../clients.constants';

@Component({
  selector: 'app-clients-dignityhealth',
  templateUrl: './clients-dignityhealth.component.html',
  styleUrls: ['./clients-dignityhealth.component.css']
})
export class ClientsDignityhealthComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, DIGNITY_HEALTH);
  }
}
