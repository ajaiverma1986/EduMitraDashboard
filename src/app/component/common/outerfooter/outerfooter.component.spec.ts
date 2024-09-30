import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterfooterComponent } from './outerfooter.component';

describe('OuterfooterComponent', () => {
  let component: OuterfooterComponent;
  let fixture: ComponentFixture<OuterfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
