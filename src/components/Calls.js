// Refresh contact list
export function refreshContactList(setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas`, {
    method: "GET",
  }).then((resp) => {
    resp.json().then((resp) => {
      console.log(resp.agendas);
      setcontactList(resp.agendas);
    });
  });
}

// Delete contact list
export function deleteContactList(slug, contactList, setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
    method: "DELETE",
  }).then(() => {
    refreshContactList(setcontactList);
  });
}

// Create contact list
export function createContactList(text, setcontactList) {
  fetch(`https://playground.4geeks.com/contact/agendas/${text}`, {
    method: "POST",
  }).then(() => {
    refreshContactList(setcontactList);
  });
}

// Refresh contact list
export function refreshList(slug, setlist) {
  fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
    method: "GET",
  }).then((resp) => {
    resp.json().then((resp) => {
      console.log(resp);
      setlist(resp.contacts);
    });
  });
}

export function addItem(slug, item, setlist) {
  console.log(item);
  fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((resp) => refreshList(slug, setlist));
}

export function deleteItem(slug, id, setlist) {
  // Asegúrate de que contact.id sea un número

  fetch(
    `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,
    {
      method: "DELETE",
    },
  ).then((resp) => refreshList(slug, setlist));
}
