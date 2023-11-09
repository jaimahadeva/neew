import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellproductsComponent } from './sellproducts.component';

describe('SellproductsComponent', () => {
  let component: SellproductsComponent;
  let fixture: ComponentFixture<SellproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
