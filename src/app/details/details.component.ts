import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
serviceId="hello";
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    
    this.route.params.subscribe( params => {
      console.log(params) 
     this.serviceId=params.id;
    });
  }
  back():void{
      this.router.navigate(['/home'])
  }

}
