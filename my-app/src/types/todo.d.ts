interface ItodoItemContent {
  content: string;
}

interface ITodoItem extends ItodoItemContent {
  id: string;
  competed: boolean;
  editing: boolean;
}
