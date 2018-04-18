import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isValid=false;
  @Input() uname:string;
  @Input() pwd:string;

  constructor(private router:Router) { 

  }

  ngOnInit() {

  }
  login():void{
   if(this.uname===this.pwd)
   {
     this.router.navigate(['/home'])
     this.isValid=false;
   }
   else{
        this.uname=""
        this.pwd=""
        this.isValid=true;
   }
  }

}
