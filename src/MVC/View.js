class View {
  constructor() {
    this.form = document.querySelector('.form');
    this.formInput = document.querySelector('.form__input');
    this.todoList = document.querySelector('.list');
  }

  displayTodos(todos) {
    this.todoList.innerHTML = '';
    if (todos.length === 0) {
      this.todoList.innerHTML = `<h1 class="text-teal-400 font-bold">Nothing to do! Add a task?</h1>`;
    } else {
      todos.forEach((todo) => {
        const listItem = `
          <li class="list__item" id=${todo?.id}>
            <input ${todo?.complete ? 'checked' : ''} class="list__item__check mx-2" type="checkbox" />
            <input class="list__item__input ${todo?.complete ? 'checked' : ''} py-1 px-4 w-1/2 lg:w-1/2 rounded-md mr-2 focus:outline-teal-400" 
            value="${todo?.text}" type="text" />
            <button class="list__item__delete py-1 px-4 rounded-md cursor-pointer bg-neutral-200 hover:bg-neutral-300">Delete</button>
          </li>`;
        this.todoList.innerHTML += listItem;
        [...this.todoList.children].forEach((child) => {
          child.style.margin = '1rem auto';
        });
      });
    }
  }

  listenAddTodo(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.formInput.value === '') return null;
      handler(this.formInput.value);
      this.formInput.value = '';
    });
  }

  listenEditTodo(handler) {
    this.todoList.addEventListener('click', (e) => {
      const id = +e.target.closest('.list__item')?.id;
      if (e.target.classList.contains('list__item__input')) {
        e.target.addEventListener('keyup', () => {
          handler(id, e.target.value);
        });
      }
    });
  }

  listenToggleTodo(handler) {
    this.todoList.addEventListener('click', (e) => {
      const id = +e.target.closest('.list__item')?.id;
      if (e.target.classList.contains('list__item__check')) {
        const todoTxtInput = e.target.nextElementSibling;
        todoTxtInput.classList.toggle('checked');
        handler(id);
      }
    });
  }

  listenDeleteTodo(handler) {
    this.todoList.addEventListener('click', (e) => {
      const id = +e.target.closest('.list__item')?.id;
      if (e.target.classList.contains('list__item__delete')) {
        e.target.closest('.list__item').remove();
        handler(id);
      }
    });
  }
}

export default new View();
