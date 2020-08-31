import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithEditPage } from './list-with-edit.page';

describe('ListWithEditPage', () => {
  let component: ListWithEditPage;
  let fixture: ComponentFixture<ListWithEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});