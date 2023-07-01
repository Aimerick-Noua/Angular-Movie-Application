import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title="my app";

  isLoading: boolean = false;

  // Example function to simulate loading
  startLoading(): void {
    this.isLoading = true;

    // Simulate async operation
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
