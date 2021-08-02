import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  data: any;
  product = new Product();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.dataService
      .getProduct(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.data = res;
        this.product = this.data;
      });
  }

  updateProduct() {
    this.dataService.updateProduct(this.route.snapshot.params.id, this.product).subscribe(res => {
      if(res) {
        this.router.navigate(['/'])
      } else {
        alert("error")
      }
    })
  }
}
