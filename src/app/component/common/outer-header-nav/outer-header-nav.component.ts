import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-outer-header-nav',
  standalone: true,
  imports: [MatToolbarModule,RouterModule,RouterLink],
  templateUrl: './outer-header-nav.component.html',
  styleUrl: './outer-header-nav.component.css'
})
export class OuterHeaderNavComponent {

}
