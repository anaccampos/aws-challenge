import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Services, ICategory } from '../../../services';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})

export class CategoryAddComponent implements OnInit {
  
  formCategory!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CategoryAddComponent>,
    private services: Services
  ) { }

  async ngOnInit() {
    this.formCategory = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(128)]],
    });
  }

  closeDialog() {
    this.dialogRef.close()
  }
  
  async saveCategory() {
    await this.services.createCategory({name: this.formCategory.value.name}).toPromise();
    location.reload();
  }
}
