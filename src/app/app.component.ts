import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    username: string;
    user: any;

    title = 'angular 1';

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getData('achalsaharan').subscribe((data) => {
            console.log(data);
            this.user = data;
        });
    }

    getPost(): void {
        console.log('button clicked:', this.username);
        this.apiService.getData(this.username).subscribe((data) => {
            console.log(data);
            this.user = data;
        });
    }
}
