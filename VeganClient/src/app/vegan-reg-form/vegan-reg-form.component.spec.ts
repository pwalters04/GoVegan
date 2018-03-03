import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganRegFormComponent } from './vegan-reg-form.component';

describe('VeganRegFormComponent', () => {
  let component: VeganRegFormComponent;
  let fixture: ComponentFixture<VeganRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeganRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeganRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
