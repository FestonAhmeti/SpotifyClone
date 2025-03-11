import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for pipes

@Component({
  selector: 'app-browse-card',
  standalone: true, // Ensure the component is standalone
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './browse-card.component.html',
  styleUrls: ['./browse-card.component.css'],
})
export class BrowseCardComponent implements OnInit {
  @Input() bgColor: string = '#1DB954';
  @Input() textColor: string = 'white';
  @Input() title: string = 'Default Title';

  constructor() {}

  ngOnInit(): void {}
}