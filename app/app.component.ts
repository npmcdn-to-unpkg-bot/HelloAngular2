/**
 * Created by zc1415926 on 2016/3/30.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:
    '<h1>{{title}}</h1>' +
    '<h2>{{hero.name}} details!</h2>' +
    '<div><label>id: </label>{{hero.id}}</div>' +
    '<div><label>name: </label>' +
    '<input [(ngModel)]="hero.name" placeholder="name"></div>'
})
export class AppComponent {
    public title = 'Tour of Heroes';

    public hero: Hero = {
        id: 1,
        name: 'windstorm'
    };
}

export class Hero{
    id: number;
    name: string;
}