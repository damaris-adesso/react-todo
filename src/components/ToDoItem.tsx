import "./ToDoItem.css";

type Props = {
  item: string;
  removeItem: (index: number) => void;
  index: number;
};

const ToDoItem: React.FC<Props> = ({ item, removeItem, index }: Props) => {
  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item}</p>
      <button className="ToDoItem-Delete" onClick={() => removeItem(index)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
