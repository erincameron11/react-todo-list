import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="button">New Task</button>
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
      </table>
      {/* <div className="container"></div> */}
      


    </main>
  );
}
