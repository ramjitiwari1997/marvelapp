import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private router:Router) { }
  private isLogin=false;
  ngOnInit() {
    if(this.isLogin){
    this.router.navigate(["/home"]);
    }
    else
    {
    this.router.navigate(["/login"]);
    }
  }
}
