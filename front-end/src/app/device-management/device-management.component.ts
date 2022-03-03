import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceAddComponent } from './device-add/device-add.component';
import { Services } from '../../services';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {
  
  dataSource = [] as any;
  displayedColumns = [] as any;

  constructor(
    public dialog: MatDialog,
    private services: Services
  ) { }

  async ngOnInit() {
    this.dataSource = await this.services.getAllDevices().toPromise();
    this.displayedColumns = ['categoryId', 'color', 'partNumber', 'action'];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceAddComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async deleteDevice(id: Number) {
    await this.services.deleteDevice(id).toPromise();
    location.reload();
  }

}
