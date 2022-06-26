import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      mainImg:'/assets/img/max-trust.svg',
      name:'Max Trust',
      about:'We host your account in an RBI-licensed bank',
      secondImg:[
        '/assets/img/federal.svg'
      ]
    },
    {
      mainImg:'assets/img/max-security.svg',
      name:'Max Security',
      about:'Which means bank-grade security and ISO and PCI compliant',
      secondImg:[
        '/assets/img/pci-dss.svg',
        '/assets/img/gms.svg',
      ]
    },
    {
      mainImg:'/assets/img/max-safety.svg',
      name:'Max Safety',
      about:'Your money is insured up to ₹5,00,000',
      secondImg:[

      ]
    },
  ]

}
