import { Component, Input } from '@angular/core';
import { ExpandableButtonComponent } from '../../atoms/expandable-button/expandable-button.component';
import { MatIconModule } from '@angular/material/icon';
import { InputSearchComponent } from '../../atoms/input-search/input-search.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ExpandableButtonComponent, MatIconModule, InputSearchComponent],
  template: `
    <div class="menu">
      <div class="board-leftSide">
        <button>
          <mat-icon fontIcon="apps"></mat-icon>
        </button>
        <button class="back-home">Trello</button>
        <div class="board-menu">
          <!-- <button>Espacios de trabajo</button> -->
          <app-expandable-button>
            <span> Espacio de trabajo</span>
          </app-expandable-button>
          <app-expandable-button>Reciente</app-expandable-button>
          <app-expandable-button>Marcado</app-expandable-button>
          <app-expandable-button>Plantillas</app-expandable-button>
          <app-expandable-button>Crear</app-expandable-button>
          <div class="board-menu-spacing"></div>
        </div>
      </div>
      <div class="board-rightSide">
        <app-input-search placeholder="Buscar" />
        <button>N</button>
        <button>I</button>
        <button>ML</button>
      </div>
    </div>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
