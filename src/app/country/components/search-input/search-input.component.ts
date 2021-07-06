import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(term => {
        this.onDebounce.emit(term)
      });
  }

  @Input() placeholder:string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  searchCountry() {
    this.onEnter.emit(this.term)
  }

  pressedKey() {
    this.debouncer.next(this.term);
  }

}
