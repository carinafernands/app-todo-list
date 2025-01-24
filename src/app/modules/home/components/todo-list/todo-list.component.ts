import { Component, DoCheck, OnInit } from "@angular/core";

//Interface
import { taskList } from './../../model/task-list';
import { first, last } from "rxjs";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck {
  public taskList: Array<taskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }
  ngDoCheck(): void {
    this.setLocalStorate();

  }
  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja apagar todas as atividades?");

    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja apagar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }

    }
  }

  public setLocalStorate(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
    localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}

