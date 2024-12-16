import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: string[] = [];

  ngOnInit() {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  setTodo() {
    const inputTodo = document.getElementById('inputTodo') as HTMLInputElement;
    if(inputTodo.value !== "") {
      this.todos.push(inputTodo.value);
      inputTodo.value = '';

      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  onEnter(event: Event) {
    this.setTodo();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
