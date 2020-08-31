import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { ComponentsModule } from 'src/app/components/components.module';
@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    item: any;

    constructor(public dataService: DataService) {
        this.item = dataService.currentItem;

        console.log(this.item);
    }

    ngOnInit() {
    }

    delete(item) {
        console.log('ListWithEditPage::delete | item=', item);
      }
}
