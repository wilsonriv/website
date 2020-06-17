import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { OPTION_CARE } from '../clients.constants';

@Component({
  selector: 'app-clients-optioncare',
  templateUrl: './clients-optioncare.component.html',
  styleUrls: ['./clients-optioncare.component.css']
})
export class ClientsOptioncareComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById(OPTION_CARE);
  }
}
