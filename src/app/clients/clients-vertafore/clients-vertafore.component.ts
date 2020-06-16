import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { VERTAFORE } from '../clients.constants';

@Component({
  selector: 'app-clients-vertafore',
  templateUrl: './clients-vertafore.component.html',
  styleUrls: ['./clients-vertafore.component.css']
})
export class ClientsVertaforeComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById(VERTAFORE);
  }
}
