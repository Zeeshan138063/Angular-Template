import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FleetRoutingModule } from './fleet-routing.module';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleTypeService } from '../services/vehicleType.service';
import { VehicleDetailsService } from '../services/vehicleDetails.service';
import { VehicleDriverService } from '../services/vehicleDriver.service';


import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleDriverComponent } from './vehicle-driver/vehicle-driver.component';

@NgModule({
  imports: [
    CommonModule,
      FleetRoutingModule,
      NgxDatatableModule
    ],

  providers: [
      VehicleTypeService,
      VehicleDetailsService,
      VehicleDriverService
  ],

  declarations: [VehicleTypeComponent, VehicleDetailsComponent, VehicleDriverComponent]
})
export class FleetModule { }
