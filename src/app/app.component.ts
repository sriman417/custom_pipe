
import { Component } from '@angular/core';
import { RoundNumberPipe } from './round-number.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RoundNumberPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'custom-pipes';
}
