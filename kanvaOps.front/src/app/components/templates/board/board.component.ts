import { Component } from '@angular/core';
import { BoardCardComponent } from '../../atoms/board-card/board-card.component';
import { BoardListComponent } from '../../atoms/board-list/board-list.component';
import { BoardHeaderComponent } from '../../organisms/board-header/board-header.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardCardComponent, BoardListComponent, BoardHeaderComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
