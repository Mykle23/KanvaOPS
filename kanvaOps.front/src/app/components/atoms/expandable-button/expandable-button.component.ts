import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-button',
  standalone: true,
  imports: [],
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './expandable-button.component.css',
})
export class ExpandableButtonComponent {
}
