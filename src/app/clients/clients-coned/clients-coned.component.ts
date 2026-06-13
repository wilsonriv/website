import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { CON_EDISON } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-coned',
  templateUrl: './clients-coned.component.html',
  styleUrls: ['./clients-coned.component.css']
})
export class ClientsConedComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, CON_EDISON);
  }
}
