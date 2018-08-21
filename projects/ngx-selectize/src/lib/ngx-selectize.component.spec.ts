import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectizeComponent } from './ngx-selectize.component';

describe('NgxSelectizeComponent', () => {
  let component: NgxSelectizeComponent;
  let fixture: ComponentFixture<NgxSelectizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
