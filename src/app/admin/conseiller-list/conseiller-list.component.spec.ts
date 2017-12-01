import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerListComponent } from './conseiller-list.component';

describe('ConseillerListComponent', () => {
  let component: ConseillerListComponent;
  let fixture: ComponentFixture<ConseillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
