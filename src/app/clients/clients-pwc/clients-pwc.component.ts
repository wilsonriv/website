import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { PWC } from '../clients.constants';

@Component({
  selector: 'app-clients-pwc',
  templateUrl: './clients-pwc.component.html',
  styleUrls: ['./clients-pwc.component.css']
})
export class ClientsPwcComponent implements OnInit {
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.client = this.clientService.getById(PWC);
  }
}
