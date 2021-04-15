import { GroceryCrudService } from './shared/services/grocery-crud.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from './shared/models/Grocery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mysql-crud-app';

  groceryForm: FormGroup | any;

  groceries$!: Observable<Grocery[]> ;

  constructor(private groceryCrudService: GroceryCrudService) { }

  ngOnInit(): void {
    //Creating a grocery form
    this.groceryForm = new FormGroup({
      'groceryItemName': new FormControl(null, Validators.required)
    });

    //Displaying grocery items
    this.groceries$ = this.groceryCrudService.fetchAll();
  }

  post(): void {
    const item = this.groceryForm.value.groceryItemName
    this.groceries$ = this.groceryCrudService.post({ item })
      .pipe(tap(() => {
        this.groceries$ = this.groceryCrudService.fetchAll()
      })
    );
    console.log(item);
  }

  update(id: number, item: string): void{
    const newItem: Grocery = {
      id: id,
      item: item
    }
    this.groceries$ = this.groceryCrudService.update(newItem)
      .pipe(tap(() => {
        this.groceries$ = this.groceryCrudService.fetchAll();
    }))
  }

  delete(id: number): void {
    this.groceries$ = this.groceryCrudService.delete(id)
      .pipe(tap(() => {
        this.groceries$ = this.groceryCrudService.fetchAll();
    }))
  }

}
