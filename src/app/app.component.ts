import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'furniture';
  url: string = "../assets/img/funika_funika-12120-be-meja-kerja-dengan-laci---coklat-muda_full05.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }
}
