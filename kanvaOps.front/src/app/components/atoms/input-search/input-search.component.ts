import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
})
export class InputSearchComponent {
  @Input() placeholder: string = '';
}
