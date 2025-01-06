import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, LoginComponent, SignupComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManagementSystem';
}
