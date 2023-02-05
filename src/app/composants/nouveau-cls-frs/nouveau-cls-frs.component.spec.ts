import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauClsFrsComponent } from './nouveau-cls-frs.component';

describe('NouveauClsFrsComponent', () => {
  let component: NouveauClsFrsComponent;
  let fixture: ComponentFixture<NouveauClsFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauClsFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauClsFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
