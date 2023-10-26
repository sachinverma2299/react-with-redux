import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "../src/features/account/AccountOperations"
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state)=>state.customer.fullName);
  console.log(fullName)
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </div>
        )}
    </div>
  );
}

export default App;
