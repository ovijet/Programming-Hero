import "./App.css";
import ControlForm from "./components/ControlForm/ControlForm";
import FormAction from "./components/SubmitForm/ForemAction/FormAction";
import SubmitForm from "./components/SubmitForm/SubmitForm";

function App() {
  return (
    <>
      <div>
        <h1>Explore React Form</h1>
        {/* <SubmitForm></SubmitForm> */}
        {/* <FormAction></FormAction> */}
        <ControlForm></ControlForm>
      </div>
    </>
  );
}

export default App;
