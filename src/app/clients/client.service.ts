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
      description: `On August 7, 2019, Option Care and BioScrip merged to become one national team, solely dedicated to infusion care. Option Care Health, Inc. is the largest independent home and alternate site infusion services provider in the United States. With over 6,000 teammates, including 2,900 clinicians, the company works compassionately to elevate standards of care for patients with acute and chronic conditions across all 50 states. Through its clinical leadership, expertise, and national scale, Option Care Health is reimagining the infusion care experience for patients, customers, and employees.`
    },
    {
      id: 'wm',
      name: 'WM',
      title: 'West Monroe - Remote',
      logoUrl: '../../assets/logos/wm.jpg',
      websiteUrl: 'https://www.westmonroe.com/',
      description: `Consulting Company`
    },
    {
      id: 'coned',
      name: 'Coned',
      title: 'Coned - Remote',
      logoUrl: '../../assets/logos/coned.jpg',
      websiteUrl: 'https://coned.com',
      description: `Utility Provider`
    },
    {
      id: 'verys',
      name: 'Verys',
      title: 'Verys - Remote',
      logoUrl: '../../assets/logos/verys.png',
      websiteUrl: 'https://verys.com',
      description: `Verys provides end-to-end design and technology web and mobile services utilizing a local, onshore delivery model.`
    },
    {
      id: 'pwc',
      name: 'PwC',
      title: 'PwC [Contract]',
      logoUrl: '../../assets/logos/pwc.jpeg',
      websiteUrl: 'https://www.pwc.com/gx/en',
      description: `PwC helps organizations and individuals create the value they are looking for. It is a network of firms in 157 countries with more than 276,000 people.

      PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. The firms that make up the PwC network are committed to working together to provide quality service offerings for clients throughout the world. Firms in the PwC network are members of, or have other connections to, PricewaterhouseCoopers International Limited (PwCIL), an English private company limited by guarantee. PwCIL does not practice accountancy or provide services to clients.`
    },
    {
      id: 'vertafore',
      name: 'Vertafore',
      title: 'Vertafore [Contract]',
      logoUrl: '../../assets/logos/vertafore.jpeg',
      websiteUrl: 'https://www.vertafore.com',
      description: `Vertafore is the leader in creating modern insurance technology. Every day, thousands of insurance agencies, carriers, and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers, and much more.`
    },
    {
      id: 'senegence',
      name: 'SeneGence International',
      title: 'SeneGence International',
      logoUrl: '../../assets/logos/senegence.png',
      websiteUrl: 'https://senegence.com',
      description: `SeneGence International allows beauty lovers from all walks of life to choose to live life in love and abundance.

      Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, its product line and global reach continue to expand as the company empowers individuals to become successful business owners. SeneGence started with a team of one Distributor and is now a proud family of hundreds of thousands.

      The company prides itself on being on the cutting edge of anti-aging skin care, nourishing hair care, and long-lasting color technology with its original, patented, and proprietary product formulations. Its products are formulated with no animal byproducts, in compliance with FDA regulations, and made in the United States for tight quality control.

      SeneGence's vision is to offer superior products and an opportunity for individuals to be independent and successful in business regardless of age, background, or education. The company is committed to making a positive contribution to beauty enthusiasts everywhere. Its environmentally sensitive practices include using naturally reoccurring ingredients, refraining from any animal testing, and omitting external product packaging to remain environmentally conscientious and ecologically responsible.

      Its nonprofit organization, The Make Sense Foundation®, regularly raises and contributes funds for women and children in need.`
    },
    {
      id: 'technossus',
      name: 'Technossus',
      title: 'Technossus',
      logoUrl: '../../assets/logos/technossus.jpeg',
      websiteUrl: 'http://www.technossus.com',
      description: `Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; through a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization.

      Founded in 2008, Technossus is a privately-held technology consulting firm headquartered in Irvine, CA. Since its inception, Technossus has become one of the fastest-growing technology consultancies in the nation, having earned Inc.’s 5000™ Fastest-Growing Privately-Held Companies for multiple years.
      Technossus operates in a class of its own, with a consultative approach to do what’s best for its clients’ businesses. The firm is committed to a model that focuses on high-quality outcomes through a deep understanding of client issues, both seen and unseen —transforming businesses to stay relevant in an increasingly digital world.

      Great technology starts with great human capital. Technossus prides itself on maintaining a roster of the most dedicated & passionate professionals in the market. It has been awarded “Best Places to Work” multiple years. It maintains that the highest-quality team will always produce the highest-quality results.
      Technossus professionals collaborate with clients to strategize, modernize, innovate, and drive value through all business functions, across dozens of industries.  Technossus is committed to a model that focuses on outcomes —enabling businesses to remain cutting-edge, painlessly.

      As a committed leader, folks at Technossus spearhead efforts to give back to the local community through affiliations with The Boys and Girls Club of America and The OC Food Bank.`
    },
    {
      id: 'biorad',
      name: 'Bio-Rad Laboratories',
      title: 'Bio-Rad Laboratories [Contract]',
      logoUrl: '../../assets/logos/biorad.png',
      websiteUrl: 'http://www.bio-rad.com',
      description: `Since Bio-Rad was founded over six decades ago, it has continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout its existence, the company has built long-lasting customer relationships that help advance its research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves its life science research and clinical diagnostics customers, helping people live longer, healthier lives.`
    },
    {
      id: 'amareglobal',
      name: 'Amare Global',
      title: 'Amare Global [Contract]',
      logoUrl: '../../assets/logos/amareglobal.png',
      websiteUrl: 'http://www.amareglobal.com',
      description: `Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Its vision is to lead the mental wellness revolution.

      Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company.

      “For the next 5 years, I surrounded myself with the most successful people I knew, in order to grow and learn from them. Eventually that payments company I was working for was sold.  I reached an important crossroads: stay comfortable in my current position or build something for myself. In 2008, together with a partner, we invested all of our savings and co-founded a new company: Meritus Payment Solutions. We started from humble beginnings with five employees in 2008 and surged to over 100 employees by 2014 when we were acquired by Optimal Payments.  During those 6 years, I fell in love with helping people achieve their own life-changing success.  However, work always came first, family second, and personal health a distant third. I took my health for granted until the consequences became real.  Thankfully, I pulled through instead of succumbing to these challenges. I channeled the experience positively, to change my life and learn as much as I could about health and nutrition. The result was a newfound passion.”

      Thus, Amare Global was created. The company focuses on excellence and integrity throughout its product development, people development, and the customer experience. Ultimately, it strives to create products that inspire people to become better versions of themselves. Amare means "To Love" in Latin, and the company believes in promoting love for one's self, as well as a powerful connection with others. By empowering people to connect through its innovative products and platform, Amare Global aims to grow together and reach beyond its limits.`
    },
    {
      id: 'dignityhealth',
      name: 'Dignity Health',
      title: 'Dignity Health [Contract]',
      logoUrl: '../../assets/logos/dignityhealth.png',
      websiteUrl: 'http://www.dignityhealth.org',
      description: `Dignity Health provides quality, compassionate health care at more than 40 hospitals and care centers serving communities across California, Arizona, and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work.

      In urban and rural communities alike, residents of all ages and backgrounds have access to primary care, preventive treatment, clinical support, chronic disease management, trauma services, and a host of medical and therapeutic specializations.`
    },
    {
      id: 'glidewell',
      name: 'Glidewell Dental',
      title: 'Glidewell Dental [Contract]',
      logoUrl: '../../assets/logos/glidewell.png',
      websiteUrl: 'http://www.glidewelldental.com',
      description: `Glidewell Dental's mission is to drive down restorative costs and expand patient access to affordable dentistry.  Glidewell Dental offers dental products and services in partnership with dentists, dental laboratories and manufacturers to promote and restore clinical health. One of the largest dental labs in the world and a medical device manufacturer, the company operates from four locations worldwide.

      Glidewell Dental is a dental industry leader thanks to its innovative dental technology, resourceful R&D department, and dedication to providing free clinical and technical education to promote dental industry growth. As new advancements continue to redefine dental technology, Glidewell Dental remains dedicated to improved CAD/CAM processes and development. The lab has made great strides in case-to-case consistency using this technology, which allows digital impressions to be sent electronically, reducing costs and improving turnaround time.`
    },
    {
      id: 'tegatechnologies',
      name: 'Tega Technologies',
      title: 'Tega Technologies',
      logoUrl: '../../assets/logos/tega-technologies.jpg',
      websiteUrl: 'https://tegatechnologies.com',
      description: `In 2018, Helm Technologies acquired Tega Technologies, which was founded in 2005.  Helm Technologies has rapidly evolved by embracing advanced technology and marketing expertise to form solutions for businesses and organizations that want to communicate more effectively with their customers and members.

      Helm leads the mobile marketing industry in innovation by automating on-demand marketing campaigns based on specific customer and member behaviors and interests for most industry verticals with specific emphasis on retail sales and automotive dealerships.`
    },
    {
      id: 'windtelecom',
      name: 'WIND telecom',
      title: 'WIND telecom',
      logoUrl: '../../assets/logos/wind-telecom.jpeg',
      websiteUrl: 'http://www.wind.com.do',
      description: `WIND TELECOM, S. A. is a telecommunications company in the Dominican Republic focused on delivering integrated Voice, Digital Television, and Internet services to residential customers, as well as specialized services to businesses, institutions, and other service providers, guaranteeing quality, cost, and delivery. Its voice and data network is fully IP-based and relies primarily on WiMax technology, supported by point-to-point microwave links and fiber-optic networks for transporting large volumes of information. Its video network is based on MMDS (Multichannel Multipoint Distribution System).

      Its purpose is to be the preferred provider of connectivity, information content, and entertainment solutions across the residential, business, and institutional markets, meeting customer expectations for quality, cost, and delivery while directly supporting education in the Dominican Republic.`
    },
    {
      id: 'integuer',
      name: 'Integuer',
      title: 'Integuer',
      logoUrl: '../../assets/logos/integuer_brand.png',
      websiteUrl: 'https://www.integuer.do',
      description: `Integuer S.R.L. was founded in 2010 as a venture by its current President, Eng. Martín José Santos Casado, upon his return to the country after an 18-year professional and personal journey across Europe. The company is positioned around "Software and solutions for business management," and Integuer has delivered a range of projects for prominent organizations in both the public and private sectors.`
    },
    {
      id: 'hbrgroup',
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
