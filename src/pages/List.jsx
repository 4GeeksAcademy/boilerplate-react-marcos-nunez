import { identity, method } from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import Item from "../components/Item";
//import {refreshList,createtList,deletetList} from "../components/Calls"
import Input from "../components/Input";
import { useParams } from "react-router";
import ContactForm from "../components/Form";
import { refreshList, addItem, deleteItem } from "../components/Calls";

const agendaSlug = "p3drac0";

const List = () => {
  let { slug } = useParams();

  let [list, setlist] = useState([]);

  useEffect(() => {
    refreshList(slug, setlist);
  }, []);

  const readForm = (values) => {
    addItem(slug, values, setlist);
  };

  const removeItem = (id) => {
    deleteItem(slug, id, setlist);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4">Add new contact</h2>
              <ContactForm submitForm={readForm} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4">Contact List</h2>
              {list.length > 0 ? (
                <div className="list-group">
                  {list.map((contact) => (
                    <Item
                      name={contact.name}
                      number={contact.phone}
                      email={contact.email}
                      address={contact.address}
                      buttonFunction={() => removeItem(contact.id)}
                    />
                  ))}
                </div>
              ) : (
                <p>No contacts available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
