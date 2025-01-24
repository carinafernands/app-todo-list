import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItenTaskList: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){

    this.addItenTaskList = this.addItenTaskList.trim(); //retira todos os espaços 
   if(this.addItenTaskList){
    this.emitItemTaskList.emit(this.addItenTaskList);
    this.addItenTaskList = "";
   }
  }
}
