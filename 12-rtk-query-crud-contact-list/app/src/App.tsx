import "./App.css";
import { Contact } from "./models/contact.model";
import { useContactQuery, useContactsQuery } from "./services/api";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();

  return (
    <div className="App">
      <h1>Contacts App</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((contact: Contact) => {
            return (
              <div className="data" key={contact.id}>
                <span>{contact.name}</span>
                <span>
                  <ContactDetail id={contact.id} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export const ContactDetail = ({ id }: { id: number }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
