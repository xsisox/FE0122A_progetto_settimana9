import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  tasks: Todo[] = []

  task!: any

  messaggio: any = "Recupero task..."

  taskForMessage!:any


  constructor(private tasksService: TodosService) {
  }

  ngOnInit(): any{
    this.provaPromise1()

    if(!this.tasks.length){
      this.messaggio = "Recupero task..."
      this.provaPromise()}


  }

  provaPromise():any{
    let p =new Promise((succ,err) =>
    {setTimeout(()=>{succ(this.messaggio = "Non ci sono task completati")},2000)},
    )
    return p
  }

  provaPromise1(){

    let p = new Promise((succ,err) =>
    {setTimeout(()=>{succ(this.tasks = this.tasksService.getImpegni())},2000)},

    )
    return p
  }


}

