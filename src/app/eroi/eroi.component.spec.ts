import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EroiComponent } from './eroi.component';

describe('EroiComponent', () => {
  let component: EroiComponent;
  let fixture: ComponentFixture<EroiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EroiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
