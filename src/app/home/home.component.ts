import { Component } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  

  ngOnInit() {
      
    AOS.init(
      {duration : 1000}
    );
  }

}
