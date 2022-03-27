import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private impegni: Todo[] = []

  private impegno!: string

  //private impegnoObj!: object

  //private avvisoTodos!: string


  aggiungiImpegno(elemento:string){
    this.impegno = elemento

    let nuovoImpegno =
    {
      id: this.impegni.length,
      title: this.impegno,
      completed: false
    }

    let p = new Promise((succ) =>
    {setTimeout(()=>{succ(

    this.impegni.push(
      nuovoImpegno)

    )},2000)},)

    this.salvaDati(nuovoImpegno)
    return p
  }


  getImpegni(){

    //RICHIAMO DATI DAL LOCAL STORAGE
    let chiamataLocal:any= localStorage.getItem("taskSalvati");
    let taskLocal= JSON.parse(chiamataLocal);

    if(taskLocal){
      return this.impegni = taskLocal
    }else{
      return this.impegni
    }
  }

  fleggaTask(el:Todo){
    //RICHIAMO DATI DAL LOCAL STORAGE
    let chiamataLocal:any= localStorage.getItem("taskSalvati");
    let taskLocal= JSON.parse(chiamataLocal);

    taskLocal.splice(el.id,1)

    let nuovo = el

    nuovo.completed = true
    taskLocal.push(nuovo)
    localStorage.setItem("taskSalvati", JSON.stringify(taskLocal))
  }


  salvaDati(aggiungi:any) {
    let task= localStorage.getItem("taskSalvati");
    let dataBase = task ? JSON.parse(task) : [];
    dataBase.push(aggiungi);
    localStorage.setItem("taskSalvati", JSON.stringify(dataBase));
  }





}
