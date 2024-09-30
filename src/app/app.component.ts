import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OuterHeaderNavComponent } from "./component/common/outer-header-nav/outer-header-nav.component";
import { OuterfooterComponent } from "./component/common/outerfooter/outerfooter.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OuterHeaderNavComponent, OuterfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduMitra';
}
