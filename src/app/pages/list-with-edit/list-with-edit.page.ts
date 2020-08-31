import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModel } from 'src/app/model/data.model';
import { DataService } from 'src/app/service/data/data.service';

@Component({
  selector: 'app-list-with-edit',
  templateUrl: './list-with-edit.page.html',
  styleUrls: ['./list-with-edit.page.scss'],
})
export class ListWithEditPage implements OnInit {
  private selectedItem: any;

  public items: Array<DataModel> = [];

  constructor(public router: Router, public dataService: DataService) {
    console.log('ListWithEditPage::constructor');

    dataService.getData().subscribe(data => {
      console.log('DataService::getData | subscribe');

      this.items = data;
      console.log('DataService::getData | items =', this.items.length);
    });
  }

  ngOnInit() {
  }

  navigateTo(item) {
    console.log('ListWithEditPage::navigateTo | item=', item);


    console.log('navigateTo:' + item.title + ',' + item.note + ', ' + item.icon);

    this.dataService.currentItem = item;
    this.router.navigateByUrl('details');
  }

  delete(item) {
    console.log('ListWithEditPage::delete | item=', item);
  }

}
