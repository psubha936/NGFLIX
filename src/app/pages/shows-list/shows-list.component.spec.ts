import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListComponent } from './shows-list.component';

describe('ShowsListComponent', () => {
  let component: ShowsListComponent;
  let fixture: ComponentFixture<ShowsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsListComponent]
    });
    fixture = TestBed.createComponent(ShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
