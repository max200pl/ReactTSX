class Todo {
  id: string; // only define in tscript
  text: string; // only define in tscript

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
export default Todo;
