import { Component } from '@angular/core';
import { HeaderComponent } from '../../organisms/header/header.component';

@Component({
  selector: 'app-members-boards-view',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="surface">
      <div class="menu"><app-header /></div>
      <div class="content">Content</div>
    </div>
  `,
  styleUrl: './members-boards-view.component.css',
})
export class MembersBoardsViewComponent {}
