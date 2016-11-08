import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portal-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit { 
     isMenuOpen:boolean = false;
     ngOnInit() {
        // this.params.title = "Header";
  }
  showMenu(isMenuOpen : boolean){
    this.isMenuOpen = !isMenuOpen;
  }

}
