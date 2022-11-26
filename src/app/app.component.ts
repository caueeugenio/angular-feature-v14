import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderComponent]
})
export class AppComponent {
  title = 'angular-feature-v14';
}
