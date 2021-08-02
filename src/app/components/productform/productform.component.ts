import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  product = new Product();

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    return this.dataService.addProduct(this.product).subscribe(res => {
      this.router.navigate(['']);
    });
  }

}
