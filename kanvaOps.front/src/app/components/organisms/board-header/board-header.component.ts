import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-header',
  standalone: true,
  imports: [],
  templateUrl: './board-header.component.html',
  styleUrl: './board-header.component.css'
})
export class BoardHeaderComponent {
  @Input() boardTitle: string = '';

  onTitleClick(titleComponent: HTMLHeadingElement, newTitle: HTMLInputElement) {
    newTitle.style.width = `${this.boardTitle.length + 2}ch`

    titleComponent.classList.add('hidden');
    newTitle.classList.remove('hidden')
    newTitle.focus();
    newTitle.value = ''
    newTitle.value = this.boardTitle
    newTitle.select();
  }

  onTitleBlur(titleComponent: HTMLHeadingElement, newTitle: HTMLInputElement) {
    if (!newTitle.value) {
      newTitle.value = this.boardTitle;
    }
    newTitle.classList.add('hidden');
    this.boardTitle = newTitle.value;
    titleComponent.classList.remove('hidden');
  }

  autoSize = (element: HTMLInputElement) => {
    element.style.width = '0';
    const { borderLeftWidth, borderRightWidth } = getComputedStyle(element);

    const numberPxToNumber = (numberPx: string) =>
      parseInt(numberPx.slice(0, -2));
    const borderWidth =
      numberPxToNumber(borderLeftWidth) + numberPxToNumber(borderRightWidth);
    // For some reason border is not included in scrollWidth
    element.style.width = `${element.scrollWidth + borderWidth}px`;
  };
}
