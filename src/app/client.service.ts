import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients = [
    {
      name: 'Verys',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGHRg2CHTyrZw/company-logo_200_200/0?e=1597276800&v=beta&t=0aMUXTXkw_ciZK7bIvQGCBrpJCPMF-1HyM6ZkfQ4t1I',
      websiteUrl: 'https://verys.com',
      description: `We provide end-to-end design and technology web and mobile services utilizing a local, onshore delivery model.`
    }
  ];

  constructor() { }
}
