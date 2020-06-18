import { ClientService } from './client.service';
import { Client } from './client.model';

export class ClientBase {
  client: Client;

  constructor(public clientService: ClientService, private clientId: string) {
    this.client = this.clientService.getById(clientId);
  }
}
