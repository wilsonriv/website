import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { OPTION_CARE } from '../clients.constants';
import { ClientBase } from '../client-base';

@Component({
  selector: 'app-clients-optioncare',
  templateUrl: './clients-optioncare.component.html',
  styleUrls: ['./clients-optioncare.component.css']
})
export class ClientsOptioncareComponent extends ClientBase {

  constructor(public clientService: ClientService) {
    super(clientService, OPTION_CARE);
  }
}
