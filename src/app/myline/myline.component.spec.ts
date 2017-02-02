/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MylineComponent } from './myline.component';

describe('MylineComponent', () => {
  let component: MylineComponent;
  let fixture: ComponentFixture<MylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
