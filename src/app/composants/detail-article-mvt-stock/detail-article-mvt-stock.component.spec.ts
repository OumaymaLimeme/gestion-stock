import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleMvtStockComponent } from './detail-article-mvt-stock.component';

describe('DetailArticleMvtStockComponent', () => {
  let component: DetailArticleMvtStockComponent;
  let fixture: ComponentFixture<DetailArticleMvtStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleMvtStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArticleMvtStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
