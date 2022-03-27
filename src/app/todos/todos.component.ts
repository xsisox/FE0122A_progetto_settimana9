import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo'; // agg
import { TodosService } from '../todos.service';//agg



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {



  tasks: Todo[] = []

  task: any = "Scrivi un impegno!"

  messaggio:string = "Recupero task da fare..."

  constructor(private tasksService: TodosService) {}

  ngOnInit(): void {
    this.provaPromise1()

    if(!this.tasks.length){this.provaPromise()}
  }

  addTask(){
    if(this.task == "Scrivi un impegno!" || this.task == ""){
      this.task = "Scrivi un impegno!"
    }else{
      this.tasksService.aggiungiImpegno(this.task)
      this.task = ""
    }
  }

  completato(el:Todo){

    let p = new Promise((succ) =>
    {setTimeout(()=>{succ(

      this.tasksService.fleggaTask(el)

      )},2000)},)

      return p
    }

    //da fare nel service
    provaPromise(){

      let p = new Promise((succ,err) =>
      {setTimeout(()=>{succ(this.messaggio= "Ops, non ci sono task!")},2000)},

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

