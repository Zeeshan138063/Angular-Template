import { ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModel } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from '../../services/facilities.service';
import { FacilitiesModel } from '../../shared/Model/Facilities.Model'
@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FacilitiesComponent {

    facilitiesModel: FacilitiesModel[]
    facilitiesAdd: FacilitiesModel;

    constructor(private facilitiesService: FacilitiesService, private router: Router) {

    }

    ngOnInit() {
        this.facilitiesAdd = { Id: null, Description: "", IsActive: true, Name : "" }
        this.getdata();
    }

    getdata()
    {
        this.facilitiesService.getAllfacilites().subscribe(
            (data: any[]) => {
                this.facilitiesModel = data;
            })
    }
    insertData()
    {
        this.facilitiesService.Insertfacilites(this.facilitiesAdd).subscribe(
            res => res,

        );
    }
    DeleteData(id: number) {

        alert("Start Delete fucntion " + id);
        this.facilitiesService.Deletefacilites(id)
            .subscribe(
            res => res,
        );

        alert("End funcation");



    }
}
    

