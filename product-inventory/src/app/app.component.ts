import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,RouterModule,CopyrightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-inventory';
}
