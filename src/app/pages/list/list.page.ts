import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModel } from 'src/app/model/data.model';
import { DataService } from 'src/app/service/data/data.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;

    public items: Array<DataModel> = [];

    constructor(public router: Router, public dataService: DataService) {
        console.log('ListPage::constructor');

        dataService.getData().subscribe(data => {
            console.log('DataService::getData | subscribe');

            this.items = data;
            console.log('DataService::getData | items =', this.items.length);
        });
    }

    ngOnInit() {
    }

    navigateTo(item: DataModel) {
        console.log('ListPage::navigateTo | item=', item);


        console.log('navigateTo:' + item.name + ',' + item.note + ', ' + item.icon);

        this.dataService.currentItem = item;
        this.router.navigateByUrl('details');
    }

    addItem() {
        console.log('ListPage::addItem | ');

        this.dataService.addItem('New Item');
    }
}
