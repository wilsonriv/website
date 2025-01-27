import { Component, OnInit } from '@angular/core';
import { GroupClient } from 'src/app/clients/group-client.model';
import { ClientService } from 'src/app/clients/client.service';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  groupClients: GroupClient[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.groupClients = this.clientService.getByGroup(3);
  }
}
