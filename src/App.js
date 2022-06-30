import { usuarios } from "./__mock__/usuarios"
import { User } from "./components/user"

function App() {
  return (
    <ul>
      {
        usuarios.map(
          (user) => {
            return(
              <User
                key={`${user.id.toString()}-${user.customerName}`}
                name={user.customerName} 
                email={user.email}
                edadCustomer={user.edad}
                />
            )
          }
        )
      }
    </ul>
  );
}

export default App;


