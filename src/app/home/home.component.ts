import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { GroupClient } from './group-client.model';
import { Client } from './client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  groupClients: GroupClient[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.initGroupClients();

    console.log(this.groupClients);
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
