import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterHeaderNavComponent } from './outer-header-nav.component';

describe('OuterHeaderNavComponent', () => {
  let component: OuterHeaderNavComponent;
  let fixture: ComponentFixture<OuterHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuterHeaderNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
