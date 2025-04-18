// Define the shape of a todo item
interface Todo {
    name: string;
    description: string;
    done: boolean;
  }
  
  // The todos array holds items of type Todo
  const todos: Todo[] = [];
  
  /**
   * Adds a new Todo to the todos array.
   * @param name - Title of the todo
   * @param description - Details about the todo
   * @returns The new length of the todos array
   */
  function add(name: string, description: string): number {
    return todos.push({ name, description, done: false });
  }
  
  /**
   * Removes a todo at the given index.
   * @param index - Position of the todo in the array
   * @returns An array of removed elements (empty if none)
   */
  function remove(index: number): Todo[] {
    return todos.splice(index, 1);
  }
  
  /**
   * Lists all todos to the console.
   * @returns void
   */
  function list(): void {
    todos.forEach((todo, idx) => {
      console.log(`${idx} - ${todo.name}`);
    });
  }
  
  /**
   * Updates the name and description of an existing todo.
   * @param index - Position of the todo to update
   * @param name - New title
   * @param description - New details
   * @returns The updated Todo object
   */
  function update(
    index: number,
    name: string,
    description: string
  ): Todo {
    todos[index].name = name;
    todos[index].description = description;
    return todos[index];
  }
  