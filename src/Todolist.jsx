import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Todolist = ({ todolist, delTodo, mark }) => {
  return (
    <ul>
      {todolist.map((todoitem) => (
        <li key={todoitem.id} id={todoitem.id}>
          {
            <div className="flex justify-between my-2">
              <div className="flex items-center ">
                <div onClick={() => mark(todoitem.id)} className="border-2 border-orange-500 text-2xl rounded-full mx-3 cursor-pointer">
                  {todoitem.isComplete ? <MdDone /> : <RxCross2 />}
                </div>
                <p className={todoitem.isComplete ? "line-through": ""}>{todoitem.text}</p>
              </div>
              <div
                onClick={() => {
                  delTodo(todoitem.id);
                }}
                className="text-2xl"
              >
                <RiDeleteBin6Line />
              </div>
            </div>
          }
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
