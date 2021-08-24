import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
})
export class ManageCategoryComponent implements OnInit {
  categoryList: Array<Category> = new Array<Category>();
  message: any;
  failedMessage: any;
  modelSuccess: any;
  modelError: any;
  modelCategory: any;
  category: Category = new Category();
  type: string = 'Save';
  modelValidate: any;
  id: any = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.modelSuccess = document.getElementById('modelSuccess') as HTMLElement;
    this.modelError = document.getElementById('dangerModel') as HTMLElement;
    this.modelCategory = document.getElementById(
      'categoryModel'
    ) as HTMLElement;
    this.modelValidate = document.getElementById(
      'validateModel'
    ) as HTMLElement;
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryList = new Array<Category>();
    this.categoryService.getAll().subscribe((res) => {
      this.categoryList = res;
    });
  }

  edit(category: Category) {
    this.category = category;
    this.type = 'Update';
    this.modelCategory.click();
  }

  deleteCategory(id: string) {
    if (this.id == '') {
      this.id = id;
      this.modelValidate.click();
    } else {
      this.categoryService.delete(this.id).subscribe(
        (res) => {
          this.id = '';
          this.message = 'Successfully Deleted';
          this.modelSuccess.click();
          this.getAllCategory();
        },
        (error) => {
          this.failedMessage = 'Failed to Delete';
          this.modelError.click();
        }
      );
    }
  }

  delete() {
    this.deleteCategory(this.id);
  }

  addNew() {
    this.type = 'Save';
    this.category = new Category();
    this.modelCategory.click();
  }

  save() {
    if (this.type == 'Update') {
      this.categoryService.update(this.category).subscribe(
        (res) => {
          this.message = 'Successfully Category Updated';
          this.modelSuccess.click();
        },
        (error) => {
          this.modelError = 'Failed Category updated';
          this.modelError.click();
        }
      );
    } else {
      this.categoryService.save(this.category).subscribe(
        (res) => {
          this.message = 'Successfully Category Added';
          this.modelSuccess.click();
        },
        (error) => {
          this.modelError = 'Failed Category Added';
          this.modelError.click();
        }
      );
    }
  }

  refresh() {
    this.getAllCategory();
  }
}
