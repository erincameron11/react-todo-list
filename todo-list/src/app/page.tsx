// import Image from "next/image";
// import { ToDoForm } from '../components/ToDoForm';
// import { ToDoList } from '../components/ToDoList';
import { ToDoWrapper } from '../components/ToDoWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <ToDoWrapper />
      {/* <ToDoForm />
      <ToDoList /> */}

      {/* <button className="button">New Task</button>
      <h2>Tasks:</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Erin</td>
          <td>31</td>
        </tr>
        <tr>
          <td>Laura</td>
          <td>31</td>
        </tr>
      </table> */}
      


    </main>
  );
}