import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedScreensComponent } from './consolidated-screens.component';

describe('ConsolidatedScreensComponent', () => {
  let component: ConsolidatedScreensComponent;
  let fixture: ComponentFixture<ConsolidatedScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
