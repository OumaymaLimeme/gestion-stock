import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCltComponent } from './page-clt.component';

describe('PageCltComponent', () => {
  let component: PageCltComponent;
  let fixture: ComponentFixture<PageCltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
