import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css'
})
export class SearchEngineComponent {
  @Output() filterCriteria: EventEmitter<{ title: string, origin: string, size: string, type: string }> = new EventEmitter();

  title: string = '';
  image: string = '';
  price: number = 0;
  origin: string = '';
  size: string = '';
  type: string = '';

  origins: string[] = [];
  sizes: string[] = [];
  types: string[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log('Fetched products:', products); // Debug log
      this.origins = [...new Set(products.map(product => product.origin))];
      this.sizes = [...new Set(products.map(product => product.size))];
      this.types = [...new Set(products.map(product => product.type))];

      console.log('Origins:', this.origins); // Debug log
      console.log('Sizes:', this.sizes); // Debug log
      console.log('Types:', this.types); // Debug log
    }, error => {
      console.error('Error:', error);
    });
  }

  search() {
    this.filterCriteria.emit({ title: this.title, origin: this.origin, size: this.size, type: this.type });
  }

  reset() {
    this.title = '';
    this.origin = '';
    this.size = '';
    this.type = '';
    this.search();
  }
}
