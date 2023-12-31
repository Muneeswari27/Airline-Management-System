import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {

  constructor(private router: Router,
    private authenti: AuthenticationService) { }

  ngOnInit(): void {
  }

  addScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/add']);
  }

  viewScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/show']);
  }

  searchScheduledFlight(): void{
      this.router.navigate(['scheduledFlight/search']);
  }

  modifyScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/modify']);
  }

  addFlight(): void{
    this.router.navigate(['addFlight']);
  }

  viewFlight(): void{
    this.router.navigate(['flights']);
  }

  addAirport(): void{
    this.router.navigate(['addAirport']);
  }

  viewAirport(): void{
    this.router.navigate(['airports']);
  }
  listBooking(): void {
    this.router.navigate(['/bookings']);
  }

  logout(): void {
    this.authenti.logOut();
    this.router.navigate(['/home']);
  }
  

}
