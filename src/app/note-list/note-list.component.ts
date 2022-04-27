import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  constructor() { }
  userNote :Array<{id : number , value : string}>= [];
  ngOnInit(): void {
     this.userNote = JSON.parse(localStorage.getItem("note") || "[]")
  }
  saveNote() {
    localStorage.setItem("note",JSON.stringify(this.userNote))
  }
  deleteNote(idx) {
    this.userNote.splice(idx, 1)
    this.saveNote();
  }
  addNewNote() {
    this.userNote.push({
      id: Date.now(),
      value: ''
    });
  }
}
