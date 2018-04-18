import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   inventories=[
     {
       serviceId:'123456789546-C',
       priority:'HIGH',
       date:{day:12,month:'JAN',year:2018},
       distance:3.02

  },
  {
    serviceId:'123456789547-C',
    priority:'HIGH',
    date:{day:15,month:'FEB',year:2018},
    distance:3.02

},
{
  serviceId:'123456789548-C',
  priority:'MEDIUM',
  date:{day:18,month:'MAR',year:2018},
  distance:4.02

},
{
  serviceId:'123456789549-C',
  priority:'HIGH',
  date:{day:20,month:'MAR',year:2018},
  distance:8.02

},
{
  serviceId:'123456789550-C',
  priority:'LOW',
  date:{day:15,month:'APR',year:2018},
  distance:10.00

},
]

  ngOnInit() {
  }
  openNav():void{
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav():void{
    document.getElementById("mySidenav").style.width = "0px";
  }
  detail(serviceId):void{
    console.log(serviceId)
  }
  getColor(priority):string{
    if(priority==='LOW')
    return '#00e64d'
    else if(priority==='HIGH')
    return '#ff6666'
    else
    return '#ffad33'
  }
}
