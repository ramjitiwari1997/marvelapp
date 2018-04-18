import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
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
isDisable:boolean;
jq:$;

  ngOnInit() {
  
  this.jq=$(document);
  this.jq.ready(function(){
    
  })
  
  }
  openNav():void{
    document.getElementById("mySidenav").style.width = "250px";
  
    var div = $("#content");  
    $('.datarow').css('pointer-events','none');
    div.css('opacity', '0.5');
    div.css( 'background',' ##1a1a1a');
    $('.calrow2').css( 'background',' ##1a1a1a');
  }
  closeNav():void{
    document.getElementById("mySidenav").style.width = "0px";
    var div = $("#content");  
    $('.datarow').css('pointer-events','');
    div.css('opacity', '1.0');
    div.css( 'background','white');
    $('.calrow2').css( 'background','white');
  }
  detail(serviceId):void{
    console.log(serviceId);
    this.router.navigate(['/details/'+serviceId])
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
