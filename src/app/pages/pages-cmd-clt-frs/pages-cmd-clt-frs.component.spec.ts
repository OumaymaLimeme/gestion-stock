import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCmdCltFrsComponent } from './pages-cmd-clt-frs.component';

describe('PagesCmdCltFrsComponent', () => {
  let component: PagesCmdCltFrsComponent;
  let fixture: ComponentFixture<PagesCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesCmdCltFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
