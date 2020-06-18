import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { TECHNOSSUS } from '../clients.constants';

@Component({
  selector: 'app-clients-technossus',
  templateUrl: './clients-technossus.component.html',
  styleUrls: ['./clients-technossus.component.css']
})
export class ClientsTechnossusComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById(TECHNOSSUS);
  }

}
