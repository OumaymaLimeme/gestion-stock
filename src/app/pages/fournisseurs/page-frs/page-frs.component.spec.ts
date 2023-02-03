import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFrsComponent } from './page-frs.component';

describe('PageFrsComponent', () => {
  let component: PageFrsComponent;
  let fixture: ComponentFixture<PageFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
