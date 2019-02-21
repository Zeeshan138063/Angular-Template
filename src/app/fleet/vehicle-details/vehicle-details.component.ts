import { Component, OnInit } from '@angular/core';
import { VehicleDetailsService } from '../../services/vehicleDetails.service';
import { VehicleDetailsModel } from '../../shared/Model/VehicleDetails.Model'; 
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
    vehicleDetailsModel: VehicleDetailsModel[];
    constructor(private vehicleDetailsService: VehicleDetailsService) { }

  ngOnInit() {
  }


  GetDetailsData() {
      this.vehicleDetailsService.getAllVehicleDetails().subscribe(
          (data: any[]) => {
              this.vehicleDetailsModel = data;


          })

  }
}
