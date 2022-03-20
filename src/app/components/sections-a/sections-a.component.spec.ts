import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsAComponent } from './sections-a.component';

describe('SectionsAComponent', () => {
  let component: SectionsAComponent;
  let fixture: ComponentFixture<SectionsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
