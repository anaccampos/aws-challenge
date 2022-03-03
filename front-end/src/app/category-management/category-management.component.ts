import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from './category-add/category-add.component';
import { Services } from '../../services';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  dataSource = [] as any;
  displayedColumns = [] as any;

  constructor(
    public dialog: MatDialog,
    private services: Services
  ) { }

  async ngOnInit() {
    this.dataSource = await this.services.getAllCategories().toPromise();
    this.displayedColumns = ['name', 'action'];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryAddComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async deleteCategory(id: Number) {
    await this.services.deleteCategory(id).toPromise();
    location.reload();
  }
}
