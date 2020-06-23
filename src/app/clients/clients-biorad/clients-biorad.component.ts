import { Component, OnInit } from '@angular/core';
import { ClientBase } from '../client-base';
import { ClientService } from '../client.service';
import { BIORAD } from '../clients.constants';

@Component({
  selector: 'app-clients-biorad',
  templateUrl: './clients-biorad.component.html',
  styleUrls: ['./clients-biorad.component.css']
})
export class ClientsBioradComponent extends ClientBase {
  constructor(public clientService: ClientService) {
    super(clientService, BIORAD);
  }
}
