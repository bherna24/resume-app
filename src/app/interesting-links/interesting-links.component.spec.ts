import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingLinksComponent } from './interesting-links.component';

describe('InterestingLinksComponent', () => {
  let component: InterestingLinksComponent;
  let fixture: ComponentFixture<InterestingLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
