import { Component, OnInit } from '@angular/core';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-scheduled-flight',
  templateUrl: './search-scheduled-flight.component.html',
  styleUrls: ['./search-scheduled-flight.component.css']
})
export class SearchScheduledFlightComponent implements OnInit {
    scheduleFlight: any;
    scheduleFlightId: number = 0;
    show: boolean = false;

    constructor(private service: ScheduledFlightService, private router: Router) { }

    ngOnInit(): void {
        this.scheduleFlight = new ScheduledFlight();
    }
    searchScheduleFlight(scheduleFlightId: number): any {
        this.show = true;
        console.log(scheduleFlightId);
        this.service.searchScheduledFlight(scheduleFlightId).subscribe((scheduleFlight: any) => { this.scheduleFlight = scheduleFlight }, error => {
            if (error?.error?.error === "Not Found") {
                alert("Enterd Flight number not found");
                this.scheduleFlight = new ScheduledFlight();
            }
        });
    }
    idValid: boolean = false;
    validateId() {
        if (this.scheduleFlightId > 999) {
            this.idValid = true;
        }
        else if (this.scheduleFlightId < 1) {
            this.idValid = true;
        } else {
            this.idValid = false;
        }
    }
    add() {
        this.router.navigate(['/scheduledFlight/add']);
    }
    view() {
        this.router.navigate(['/scheduledFlight/show']);
    }
    search() {
        this.router.navigate(['/scheduledFlight/search']);
    }
}