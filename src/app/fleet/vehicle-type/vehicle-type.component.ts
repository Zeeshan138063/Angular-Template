import { Component, OnInit } from '@angular/core';
import { VehicleTypeService } from '../../services/vehicleType.service';
import { VehicleTypeModel } from '../../shared/Model/VehicleType.Model';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {

    vehicleTypeModel: VehicleTypeModel[]


    constructor(private vehicleTypeService: VehicleTypeService) {

    

}

ngOnInit() {

   


    this.GetAll();
}


    GetAll() {

        this.vehicleTypeService.getAllVehicleType().subscribe(
            (data: any[]) => {
                this.vehicleTypeModel = data;
                console.log(this.vehicleTypeModel);
                
                })
        
}


}
