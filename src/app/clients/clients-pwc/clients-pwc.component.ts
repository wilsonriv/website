import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { PWC } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-pwc',
  templateUrl: './clients-pwc.component.html',
  styleUrls: ['./clients-pwc.component.css']
})
export class ClientsPwcComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, PWC);
  }
}
