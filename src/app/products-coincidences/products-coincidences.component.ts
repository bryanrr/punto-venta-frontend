import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductosService } from '../data/productos.service';

@Component({
  selector: 'app-products-coincidences',
  templateUrl: './products-coincidences.component.html',
  styleUrls: ['./products-coincidences.component.css']
})
export class ProductsCoincidencesComponent implements OnInit {

  private coincidenceString:string;
  productosObservable:Subject<Object>=new Subject();

  constructor(private route:ActivatedRoute,private productosService:ProductosService) {
    route.params.subscribe(params=>this.coincidenceString=params['coincidenceString']);
    productosService.getProductsCoincidences(this.coincidenceString,this.productosObservable);
  }

	public get $coincidenceString(): string {
		return this.coincidenceString;
	}


  ngOnInit(): void {
  }

}
