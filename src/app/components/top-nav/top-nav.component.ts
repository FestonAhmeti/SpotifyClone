import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  standalone: true, // This tells Angular it's a standalone component
  imports: [CommonModule], // Import CommonModule here to use *ngIf, *ngFor, etc.
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  public isSearchFieldVisible: boolean = false;
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private sb: SearchBarService) {}

  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe((status: boolean) => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
  }

  filterBrowsingList(inputElement: HTMLInputElement) {
    this.inputFilterRes.emit(inputElement.value);
  }
}