import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../data/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) {
    loginService.logout().
      subscribe(data=>{
        this.router.navigateByUrl('/login');
      });
   }

  ngOnInit(): void {
  }

}
