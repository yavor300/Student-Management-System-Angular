import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  searchValue: string = '';
  @Output() eventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendValue() {
    this.eventEmitter.emit(this.searchValue);
  }

}
