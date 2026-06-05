import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client.model';
import { ClientService } from 'src/app/clients/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  allClients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.allClients = this.clientService.getAll();
  }
}
