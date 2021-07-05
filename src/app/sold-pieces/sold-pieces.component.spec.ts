import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldPiecesComponent } from './sold-pieces.component';

describe('SoldPiecesComponent', () => {
  let component: SoldPiecesComponent;
  let fixture: ComponentFixture<SoldPiecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldPiecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
