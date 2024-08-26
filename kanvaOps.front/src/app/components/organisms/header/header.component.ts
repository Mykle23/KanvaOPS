import { Component } from '@angular/core';
import { ExpandableButtonComponent } from '../../atoms/expandable-button/expandable-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ExpandableButtonComponent],
  template: `
    <div class="menu">
      <div class="board-leftSide">
        <div class="test">🔲</div>
        <div class="test">🔲</div>
        <div class="board-menu">
          <!-- <button>Espacios de trabajo</button> -->
          <app-expandable-button >Espacios de trabajo</app-expandable-button>
          <button>Reciente</button>
          <button>Marcado</button>
          <button>Plantillas</button>
          <button>Crear</button>
          <div class="board-menu-spacing"></div>
        </div>
      </div>
      <div class="board-rightSide">
        <input placeholder="Buscar" />
        <button>N</button>
        <button>I</button>
        <button>ML</button>
      </div>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
