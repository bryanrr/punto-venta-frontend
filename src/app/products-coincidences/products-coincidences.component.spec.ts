import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCoincidencesComponent } from './products-coincidences.component';

describe('ProductsCoincidencesComponent', () => {
  let component: ProductsCoincidencesComponent;
  let fixture: ComponentFixture<ProductsCoincidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCoincidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCoincidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
