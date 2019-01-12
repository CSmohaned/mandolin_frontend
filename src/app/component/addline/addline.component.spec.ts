import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlineComponent } from './addline.component';

describe('AddlineComponent', () => {
  let component: AddlineComponent;
  let fixture: ComponentFixture<AddlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
