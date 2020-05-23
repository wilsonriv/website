import { Component, OnInit } from '@angular/core';
import { GroupClient } from 'src/app/clients/group-client.model';
import { ClientService } from 'src/app/clients/client.service';
import { Client } from 'src/app/clients/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  groupClients: GroupClient[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.initGroupClients();
  }

  private initGroupClients() {
    const clients = this.clientService.getAll();
    let groups = [] as Client[];
    let count = 0;

    clients.forEach((client, index) => {
      count = index + 1;
      groups.push(client);

      if (count % 3 === 0) {
        this.groupClients.push({ clients: groups });
        groups = [];
      }

      if (count === clients.length && groups.length) {
        this.groupClients.push({ clients: groups });
      }
    });
  }
}
