import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { HBR_GROUP } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-hbrgroup',
  templateUrl: './clients-hbrgroup.component.html',
  styleUrls: ['./clients-hbrgroup.component.css']
})
export class ClientsHbrgroupComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, HBR_GROUP);
  }
}
