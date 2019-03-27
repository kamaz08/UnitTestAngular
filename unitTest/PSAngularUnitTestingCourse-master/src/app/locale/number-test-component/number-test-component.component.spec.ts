import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTestComponentComponent } from './number-test-component.component';

describe('NumberTestComponentComponent', () => {
  let component: NumberTestComponentComponent;
  let fixture: ComponentFixture<NumberTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
