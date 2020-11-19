import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmetInputFormComponent } from './opmet-input-form.component';

describe('OpmetInputFormComponent', () => {
  let component: OpmetInputFormComponent;
  let fixture: ComponentFixture<OpmetInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmetInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmetInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
