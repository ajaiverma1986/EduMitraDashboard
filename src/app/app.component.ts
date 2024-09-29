import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OuterHeaderNavComponent } from "./component/common/outer-header-nav/outer-header-nav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OuterHeaderNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EduMitra';
}
