import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-outerfooter',
  standalone: true,
  imports: [MatToolbarModule,RouterModule,RouterLink],
  templateUrl: './outerfooter.component.html',
  styleUrl: './outerfooter.component.css'
})
export class OuterfooterComponent {

}
