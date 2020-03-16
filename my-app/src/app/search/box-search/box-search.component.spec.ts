import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSearchComponent } from './box-search.component';

describe('BoxSearchComponent', () => {
  let component: BoxSearchComponent;
  let fixture: ComponentFixture<BoxSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
