import "./ToDoItem.css";

type Props = {
  item: {
    todo: string;
    id: number;
  };
  removeItem: (id: number) => void;
};

const ToDoItem: React.FC<Props> = ({ item, removeItem }: Props) => {
  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item.todo}</p>
      <button className="ToDoItem-Delete" onClick={() => removeItem(item.id)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
