import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmetTableComponent } from './opmet-table.component';

describe('OpmetTableComponent', () => {
  let component: OpmetTableComponent;
  let fixture: ComponentFixture<OpmetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
