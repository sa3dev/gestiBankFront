import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerComponent } from './conseiller.component';

describe('ConseillerComponent', () => {
  let component: ConseillerComponent;
  let fixture: ComponentFixture<ConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
