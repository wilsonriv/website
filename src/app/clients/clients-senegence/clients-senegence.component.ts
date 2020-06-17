import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { SENEGENCE } from '../clients.constants';

@Component({
  selector: 'app-clients-senegence',
  templateUrl: './clients-senegence.component.html',
  styleUrls: ['./clients-senegence.component.css']
})
export class ClientsSenegenceComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById(SENEGENCE);
  }
}
