/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NestedTableComponent } from './nested-table.component';

describe('NestedTableComponent', () => {
  let component: NestedTableComponent;
  let fixture: ComponentFixture<NestedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
