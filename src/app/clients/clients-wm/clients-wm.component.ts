import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { WEST_MONROE } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-wm',
  templateUrl: './clients-wm.component.html',
  styleUrls: ['./clients-wm.component.css']
})
export class ClientsWmComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, WEST_MONROE);
  }
}
