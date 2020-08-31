import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'custom-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

    @Input() title: string;
    @Input() subtitle: string;

    constructor() {
        console.log('ListItemComponent::constructor | ');
    }

    ngOnInit() {
    }

}
