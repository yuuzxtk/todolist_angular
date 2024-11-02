import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Task } from './core/models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'todolist';
  taskname:string = 'novo'
  welcomeMessage: string = 'Welcome to my first Angular App!';
  showList: boolean = true;

  tasks: Task[] = [
    {title: 'Arrumar o quarto', done: false},
    {title: 'Estudar para a facul', done: false},
    {title: 'Ler emails', done: false},
    {title: 'Lavar a roupa', done: false}

  ];






  helloworld(){
    console.log('Hello World!');
  }

  updateTitle(title: string){
    this.title = title;
  }
  newTask(taskname: string){
    this.taskname = taskname;
  }

  addTask(){
    this.tasks.push({title: this.taskname, done: false});
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
  }
}