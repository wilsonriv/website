import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { GroupClient } from './group-client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Array<Client> = [
    {
      id: 'oc',
      name: 'Option Care Health',
      title: 'Option Care Health - Remote',
      logoUrl: '../../assets/logos/optioncare.jpeg',
      websiteUrl: 'https://optioncarehealth.com',
      description: `The largest independent provider of home and alternate-site infusion services in the United States.`
    },
    {
      id: 'wm',
      name: 'West Monroe',
      title: 'West Monroe - Remote',
      logoUrl: '../../assets/logos/wm.jpg',
      websiteUrl: 'https://www.westmonroe.com/',
      description: `A digital consulting firm that pairs business strategy with technology to drive transformation.`
    },
    {
      id: 'coned',
      name: 'Con Edison',
      title: 'Con Edison - Remote',
      logoUrl: '../../assets/logos/coned.jpg',
      websiteUrl: 'https://coned.com',
      description: `One of the largest energy-delivery utilities in the U.S., serving the New York City region.`
    },
    {
      id: 'verys',
      name: 'Verys',
      title: 'Verys - Remote',
      logoUrl: '../../assets/logos/verys.png',
      websiteUrl: 'https://verys.com',
      description: `An onshore software engineering consultancy specializing in custom web and mobile product development.`
    },
    {
      id: 'pwc',
      name: 'PwC',
      title: 'PwC [Contract]',
      logoUrl: '../../assets/logos/pwc.jpeg',
      websiteUrl: 'https://www.pwc.com/gx/en',
      description: `A global professional-services network providing assurance, tax, and consulting in 150+ countries.`
    },
    {
      id: 'vertafore',
      name: 'Vertafore',
      title: 'Vertafore [Contract]',
      logoUrl: '../../assets/logos/vertafore.jpeg',
      websiteUrl: 'https://www.vertafore.com',
      description: `A leading provider of modern software and technology for the insurance industry.`
    },
    {
      id: 'senegence',
      name: 'SeneGence International',
      title: 'SeneGence International',
      logoUrl: '../../assets/logos/senegence.png',
      websiteUrl: 'https://senegence.com',
      description: `A global direct-selling beauty company known for long-lasting cosmetics and skin care.`
    },
    {
      id: 'technossus',
      name: 'Technossus',
      title: 'Technossus',
      logoUrl: '../../assets/logos/technossus.jpeg',
      websiteUrl: 'http://www.technossus.com',
      description: `A technology consulting firm delivering custom software and digital-transformation solutions.`
    },
    {
      id: 'biorad',
      name: 'Bio-Rad Laboratories',
      title: 'Bio-Rad Laboratories [Contract]',
      logoUrl: '../../assets/logos/biorad.png',
      websiteUrl: 'http://www.bio-rad.com',
      description: `A global leader in life-science research and clinical-diagnostic products.`
    },
    {
      id: 'amareglobal',
      name: 'Amare Global',
      title: 'Amare Global [Contract]',
      logoUrl: '../../assets/logos/amareglobal.png',
      websiteUrl: 'http://www.amareglobal.com',
      description: `"The Mental Wellness Company" — wellness products built around gut-brain axis nutrition.`
    },
    {
      id: 'dignityhealth',
      name: 'Dignity Health',
      title: 'Dignity Health [Contract]',
      logoUrl: '../../assets/logos/dignityhealth.png',
      websiteUrl: 'http://www.dignityhealth.org',
      description: `A major healthcare provider operating hospitals and care centers across California, Arizona, and Nevada.`
    },
    {
      id: 'glidewell',
      name: 'Glidewell Dental',
      title: 'Glidewell Dental [Contract]',
      logoUrl: '../../assets/logos/glidewell.png',
      websiteUrl: 'http://www.glidewelldental.com',
      description: `One of the world's largest dental labs and a manufacturer of restorative dental products.`
    },
    {
      id: 'tegatechnologies',
      name: 'Tega Technologies',
      title: 'Tega Technologies',
      logoUrl: '../../assets/logos/tega-technologies.jpg',
      websiteUrl: 'https://tegatechnologies.com',
      description: `A digital marketing company specializing in automated text and email campaigns for retail.`
    },
    {
      id: 'windtelecom',
      name: 'WIND telecom',
      title: 'WIND telecom',
      logoUrl: '../../assets/logos/wind-telecom.jpeg',
      websiteUrl: 'http://www.wind.com.do',
      description: `A Dominican telecom provider delivering voice, television, and internet over IP and wireless networks.`
    },
    {
      id: 'integuer',
      name: 'Integuer',
      title: 'Integuer',
      logoUrl: '../../assets/logos/integuer_brand.png',
      websiteUrl: 'https://www.integuer.do',
      description: `A Dominican software company building business-management solutions for public and private clients.`
    },
    {
      id: 'hbrgroup',
      name: 'HBR Group',
      title: 'HBR Group',
      logoUrl: '../../assets/logos/logo-site.png',
      websiteUrl: 'http://hbrgroup.com.do',
      description: `A Dominican consulting firm specializing in software solutions for banks and the financial sector.`
    },
    {
      id: 'hidden',
      name: 'HBR Group',
      title: 'HBR Group',
      logoUrl: '../../assets/logos/logo-site.png',
      websiteUrl: 'http://hbrgroup.com.do',
      description: `HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level.

      Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.

      Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.

      The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.

      As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward.`
    },
    {
      id: 'hidden',
      name: 'HBR Group',
      title: 'HBR Group',
      logoUrl: '../../assets/logos/logo-site.png',
      websiteUrl: 'http://hbrgroup.com.do',
      description: `HBR Group is a company of continuously trained Dominican professionals specializing in consulting services and vertical or custom development for banks and financial-sector companies at both the national and international level.

      Its main strength is a highly specialized team with broad and deep expertise in developing banking products, one that adapts to the working style of its different clients. It is backed by a management team with vast banking experience whose entrepreneurial initiative has been dedicated exclusively to the financial and banking sector.

      Its value proposition adds an important edge for companies in this space: the use of new technologies and thorough up-front analysis, together with a deep understanding of the challenges banks face today.

      The company has particular strengths in Consulting, Project Management, and Vertical Application Development, made possible by a staff that is well suited to and aligned with its clients' needs.

      As a services company, HBR Group understands its clients' essential needs, having worked across a variety of banking institutions. This gives it practical experience built over time through the delivery of major projects in the sector its products and services are oriented toward.`
    },

  ];

  constructor() { }

  getAll(): Array<Client> {
    return this.clients;
  }

  getById(id: string): Client {
    return this.clients.find(client => client.id === id);
  }

  getByGroup(groupOf: number) {
    const groupClients: GroupClient[] = [];
    let groups = [] as Client[];
    let count = 0;

    this.clients.forEach((client, index) => {
      count = index + 1;
      groups.push(client);

      if (count % 3 === 0) {
        groupClients.push({ clients: groups });
        groups = [];
      }

      if (count === this.clients.length && groups.length) {
        groupClients.push({ clients: groups });
      }
    });

    return groupClients;
  }
}
