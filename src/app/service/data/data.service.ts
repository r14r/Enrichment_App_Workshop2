import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../../model/data.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    currentItem: DataModel;

    url = 'assets/data.json';

    url_oneline = 'https://restcountries.eu/rest/v2/all';

    data: Observable<DataModel[]>;
    items: DataModel[];

    constructor(private http: HttpClient) {
        console.log('DataService::constructor |');

        this.getData();
    }



    getData(): Observable<DataModel[]> {
        console.log('DataService::getData |');

        this.data = this.http.get<DataModel[]>(this.url);

        return this.data;
    }











    // updateItem(updateItem: DataModel) {
    //     let item = this.items.findIndex(item => item.name == updateItem.name);
    //     this.items[itemIndex] = newValues;
    // }

    addItem(name) {
        console.log('DataService::addItem | name =', name);

        const item = new DataModel();
        item.name = name;

        this.items.push(item);
    }

}
