import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDepatureComponent } from './next-depature.component';

describe('NextDepatureComponent', () => {
  let component: NextDepatureComponent;
  let fixture: ComponentFixture<NextDepatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDepatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDepatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
