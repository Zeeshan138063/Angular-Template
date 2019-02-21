import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
    {
        path: 'vehicledetails',
        component: VehicleDetailsComponent,
        data: {
            title: 'Vehicle Details'
        }
    },

    {
        path: 'vehicletype',
        component: VehicleTypeComponent,
        data: {
            title: 'Vehicle Type'
        }
    },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
