import { Component } from '@angular/core';

@Component({
  selector: 'app-expandable-button',
  standalone: true,
  imports: [],
  template: `
    <button>
      <span>Espacio de trabajo</span>
      <span>></span>
    </button>
  `,
  styleUrl: './expandable-button.component.css',
  
})
export class ExpandableButtonComponent {}
