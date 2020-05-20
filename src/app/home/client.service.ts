import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Array<{name: string, logoUrl: string, websiteUrl: string, description: string}> = [
    {
      name: 'Verys',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQGHRg2CHTyrZw/company-logo_200_200/0?e=1597276800&v=beta&t=0aMUXTXkw_ciZK7bIvQGCBrpJCPMF-1HyM6ZkfQ4t1I',
      websiteUrl: 'https://verys.com',
      description: `We provide end-to-end design and technology web and mobile services utilizing a local, onshore delivery model.`
    },
    {
      name: 'Vertafore',
      logoUrl: 'https://www.vertafore.com/themes/custom/themekit/logo.svg',
      websiteUrl: 'https://www.vertafore.com',
      description: `Vertafore is the leader in creating modern insurance technology. Every day thousands of insurance agencies, carriers and states use a breadth of Vertafore solutions to grow their businesses, process claims for their customers and much more. Click on the Careers tab to learn more about opportunities with us!`
    },
    {
      name: 'PwC',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFR46llmlEDrw/company-logo_200_200/0?e=1597881600&v=beta&t=SL5TW5bFo41EWs6WEWrveSz7jNA5S6QfqtmyhFvJH5k',
      websiteUrl: 'https://www.pwc.com/gx/en',
      description: `PwC helps organizations and individuals create the value they're looking for. We're a network of firms in 157 countries with more than 276,000 people.

      PwC refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity. Please see www.pwc.com/structure for further details. The firms that make up the PwC network are committed to working together to provide quality service offerings for clients throughout the world. Firms in the PwC network are members in, or have other connections to, PricewaterhouseCoopers International Limited (PwCIL), an English private company limited by guarantee. PwCIL does not practise accountancy or provide services to clients.`
    },
    {
      name: 'SeneGence International',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQESV6Y9cW0XHA/company-logo_200_200/0?e=1597276800&v=beta&t=7IW1jE2teurtEwO6lS-qHUyzNVBIDo0LMkB2fyTrz0Q',
      websiteUrl: 'https://senegence.com',
      description: `SeneGence International allows beauty lovers from all walks of life to choose to live life in love and abundance...And then work for it!

      Founded in 1999 by Joni Rogers-Kante, SeneGence International sprung onto the direct-selling scene with its premier product, LipSense. This long-lasting lip color was a big hit among busy, hard-working women on the go. Years later, our product line and global reach continues to expand, as we empower individuals to be successful business owners. We started with a team of one Distributor, and now, we are a proud family of hundreds of thousands.

      We pride ourselves on being on the cutting edge of anti-aging skin care, nourishing hair care, and long-lasting color technology with our original, patented, and proprietary product formulations. Our products are formulated with no animal byproducts, in compliance with FDA regulations, and made in the United States for tight quality control.

      Our vision is to offer superior products and an opportunity for individuals to be independent and successful in business regardless of age, background, or education. We are committed to making a positive contribution to beauty enthusiasts everywhere. Strong practices around being environmentally sensitive include use of naturally reoccurring ingredients, refraining from any animal testing, and omitting external product packaging to keep the company environmentally conscientious and ecologically responsible.

      Our nonprofit organization, The Make Sense Foundation®, regularly raises and contributes funds for women and children in need.

      At SeneGence, you’ll join a growing network of Distributors and have the chance to live the beautiful, abundant lifestyle you’ve always wanted.
      `
    },
    {
      name: 'Technossus',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQFR0gAmfCZMVg/company-logo_200_200/0?e=1597276800&v=beta&t=WPzxBPypEKYpevoaxzzWzio_vmvPfEQFKVoxRB-8kGY',
      websiteUrl: 'http://www.technossus.com',
      description: `Technossus enables business acceleration and transformation for companies in the Healthcare, Financial Services, and Bio-Sciences Industries; thru a range of solutions around Outcome-based Roadmaps, Cloud Strategy & Transformation, and Technology Platform Optimization.

      Founded in 2008, Technossus is a privately-held technology consulting firm headquartered in Irvine, CA. Since its inception, Technossus has become one of the fastest-growing technology consultancies in the nation, having earned Inc.’s 5000™ Fastest-Growing Privately-Held Companies for multiple years.
      Technossus operates in a class of its own, with a consultative approach to do what’s best for its clients’ businesses. The firm is committed to a model that focuses on high-quality outcomes through a deep understanding of client issues, both seen and unseen —transforming businesses to stay relevant in an increasingly digital world.

      Great technology starts with great human capital. Technossus prides itself on maintaining a roster of the most dedicated & passionate professionals in the market. It has been awarded “Best Places to Work” multiple years. It maintains that the highest-quality team will always produce the highest-quality results.
      Technossus professionals collaborate with clients to strategize, modernize, innovate, and drive value through all business functions, across dozens of industries.  Technossus is committed to a model that focuses on outcomes —enabling businesses to remain cutting-edge, painlessly.

      As a committed leader, folks at Technossus spearhead efforts to give back to the local community through affiliations with The Boys and Girls Club of America and The OC Food Bank.`
    },
    {
      name: 'Glidewell Dental',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQEuJ-fK_Ny7pA/company-logo_200_200/0?e=1597276800&v=beta&t=bFCNS-i-TY83f3pE4U6rxr7BLpCa1c2Dd0bZTu7qHJs',
      websiteUrl: 'http://www.glidewelldental.com',
      description: `Glidewell Dental's mission is to drive down restorative costs and expand patient access to affordable dentistry.  Glidewell Dental offers dental products and services in partnership with dentists, dental laboratories and manufacturers to promote and restore clinical health. One of the largest dental labs in the world and a medical device manufacturer, the company operates from four locations worldwide.

      Glidewell Dental is a dental industry leader thanks to its innovative dental technology, resourceful R&D department, and dedication to providing free clinical and technical education to promote dental industry growth. As new advancements continue to redefine dental technology, Glidewell Dental remains dedicated to improved CAD/CAM processes and development. The lab has made great strides in case-to-case consistency using this technology, which allows digital impressions to be sent electronically, reducing costs and improving turnaround time.`
    },
    {
      name: 'Bio-Rad Laboratories',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHhlNN99A20IA/company-logo_200_200/0?e=1597276800&v=beta&t=oJ5uuzk7qSZrUnutobotcGDjTDuGJcQzGp0ww1OY-ic',
      websiteUrl: 'http://www.bio-rad.com',
      description: `Since Bio-Rad was founded over six decades ago, we have continued to provide the healthcare industry with innovative and useful products that help life science researchers accelerate the discovery process and medical diagnostic labs obtain faster, better results. Throughout our existence, we have built long-lasting customer relationships that help advance our research and development efforts in the introduction of new products and solutions. Today, Bio-Rad is a global leader, with a team of over 8,000 employees and a global network of operations that serves our life science research and clinical diagnostics customers, helping people live longer, healthier lives.`
    },
    {
      name: 'Dignity Health',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQG1OtNHbC7pBA/company-logo_200_200/0?e=1597276800&v=beta&t=CU5L7cxud2ufFqfbN29WxUjyqlNybviAY8Sa8cyHPr0',
      websiteUrl: 'http://www.dignityhealth.org',
      description: `We provide quality, compassionate health care at more than 40 hospitals and care centers that are serving communities across California, Arizona and Nevada every minute of every day. And while not everyone may live near a major medical facility, Dignity Health is making health care more accessible by bringing resources closer to where people live and work.

      In urban and rural communities alike, residents of all ages and backgrounds have access to primary care, preventive treatment, clinical support, chronic disease management, trauma services, and a host of medical and therapeutic specializations.

      With several different ways to activate your search, let us help you to quickly and easily find an affordable, quality medical facility located close to where you need it, when you need it.`
    },
    {
      name: 'Amare Global',
      logoUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQE_yxGZvFnXgw/company-logo_200_200/0?e=1597276800&v=beta&t=Q5hBi9EVQ8Srg1_PrzpWgBpenBgFozPZnBtPRb5wL5Y',
      websiteUrl: 'http://www.amareglobal.com',
      description: `Amare Global creates a holistic mental wellness platform that connects a purpose-driven community of passionate people. Our vision is to lead the mental wellness revolution.

      Founder and CEO of Amare Global, Hiep Tran, began his entrepreneurial journey at 23 when he decided that medical school was not for him. He started working for a payments processing company.

      “For the next 5 years, I surrounded myself with the most successful people I knew, in order to grow and learn from them. Eventually that payments company I was working for was sold.  I reached an important crossroads: stay comfortable in my current position or build something for myself. In 2008, together with a partner, we invested all of our savings and co-founded a new company: Meritus Payment Solutions. We started from humble beginnings with five employees in 2008 and surged to over 100 employees by 2014 when we were acquired by Optimal Payments.  During those 6 years, I fell in love with helping people achieve their own life-changing success.  However, work always came first, family second, and personal health a distant third. I took my health for granted until the consequences became real.  Thankfully, I pulled through instead of succumbing to these challenges. I channeled the experience positively, to change my life and learn as much as I could about health and nutrition. The result was a newfound passion.”

      Thus, Amare Global was created. We focus on the excellence and integrity throughout our product development, people development, and the customer experience. Ultimately, we strive to create products that will inspire people to become better versions of themselves. Amare means "To Love"​ in Latin and we believe in promoting Love for one's self, as well as a powerful connection with others. By empowering people to connect through our innovative products and platform, we will grow together and reach beyond our limits.`
    },
    {
      name: 'Tega Technologies',
      logoUrl: 'https://yt3.ggpht.com/a/AATXAJxNau80N6Pua7QgVx9VlwTTRNSmP0wHyBpdTw=s100-c-k-c0xffffffff-no-rj-mo',
      websiteUrl: 'https://tegatechnologies.com',
      description: `In 2018, Helm Technologies acquired Tega Technologies, which was founded in 2005.  Helm Technologies has rapidly evolved by embracing advanced technology and marketing expertise to form solutions for businesses and organizations that want to communicate more effectively with their customers and members.

      Helm leads the mobile marketing industry in innovation by automating on-demand marketing campaigns based on specific customer and member behaviors and interests for most industry verticals with specific emphasis on retail sales and automotive dealerships.`
    }
  ];

  constructor() { }
}
