import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegansComponent } from './vegans.component';

describe('VegansComponent', () => {
  let component: VegansComponent;
  let fixture: ComponentFixture<VegansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
