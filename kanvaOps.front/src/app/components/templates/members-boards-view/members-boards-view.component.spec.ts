import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersBoardsViewComponent } from './members-boards-view.component';

describe('MembersBoardsViewComponent', () => {
  let component: MembersBoardsViewComponent;
  let fixture: ComponentFixture<MembersBoardsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersBoardsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersBoardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
