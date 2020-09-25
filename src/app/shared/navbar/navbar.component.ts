import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  irUsuario(id: string): void {
    if (!id) {
      return;
    }

    this.route.navigate(['/usuario', id]);
  }

}
