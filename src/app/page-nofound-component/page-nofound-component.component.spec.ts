import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNofoundComponentComponent } from './page-nofound-component.component';

describe('PageNofoundComponentComponent', () => {
  let component: PageNofoundComponentComponent;
  let fixture: ComponentFixture<PageNofoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNofoundComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNofoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
