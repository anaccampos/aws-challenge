import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Services, IDevice } from '../../../services';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  formDevice!: FormGroup;
  categories = [] as any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DeviceAddComponent>,
    private services: Services
  ) { }

  async ngOnInit() {
    this.formDevice = this.fb.group({
      categoryId: ['', [Validators.required]],
      color: ['', [Validators.required, Validators.maxLength(16)]],
      partNumber: ['', [Validators.required, Validators.min(0)]]
    });

    this.categories = await this.services.getAllCategories().toPromise();
  }

  async saveDevice() {
    const devicePayload: IDevice = {};
    devicePayload.categoryId = this.formDevice.value.categoryId;
    devicePayload.color = this.formDevice.value.color;
    devicePayload.partNumber = this.formDevice.value.partNumber;

    await this.services.createDevice(devicePayload).toPromise();
    location.reload();
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
