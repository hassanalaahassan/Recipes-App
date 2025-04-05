import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

  @Output() searchTerm = new EventEmitter<string>()
  @ViewChild("searchInput") searchInput!:ElementRef

  sendSearchTerm():void{
    const inputValue = this.searchInput.nativeElement.value
    this.searchTerm.emit(inputValue)
  }


}
