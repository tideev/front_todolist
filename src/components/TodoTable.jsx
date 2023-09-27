export default function TodoTable(props) {
    return (
        <>

            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <td style={{ paddingLeft: "50px", paddingRight: "50px" }}>   </td>
                        <th>Date</th>
                    </tr>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td style={{ paddingLeft: "50px", paddingRight: "50px" }}> - </td>
                            <td>{todo.date}</td>
                            <td style={{ padding: "10px" }}>
                                <button onClick={() => props.onDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}