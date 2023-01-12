interface ItodoItemContent {
  content: string;
}

interface ITodoItem extends ItodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
