import { Component, OnInit } from '@angular/core';
import { ClientBase } from '../client-base';
import { ClientService } from '../client.service';
import { WIND_TELECOM } from '../clients.constants';

@Component({
  selector: 'app-clients-windtelecom',
  templateUrl: './clients-windtelecom.component.html',
  styleUrls: ['./clients-windtelecom.component.css']
})
export class ClientsWindtelecomComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, WIND_TELECOM);
  }
}
