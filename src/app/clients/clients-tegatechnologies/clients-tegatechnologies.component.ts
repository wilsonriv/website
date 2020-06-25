import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { TEGA_TECHNOLOGIES } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-tegatechnologies',
  templateUrl: './clients-tegatechnologies.component.html',
  styleUrls: ['./clients-tegatechnologies.component.css']
})
export class ClientsTegatechnologiesComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, TEGA_TECHNOLOGIES);
  }
}
