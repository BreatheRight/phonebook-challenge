import { useEffect, useMemo, useState } from "react";
import "./App.css";

// Hardcoded contacts
const CONTACTS = [
    {
        id: 1,
        name: "Paul Thomas Anderson",
        phone: "(555) 123-4567",
        email: "sarah.johnson@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 2,
        name: "Joaquin Phoenix",
        phone: "(555) 234-5678",
        email: "michael.chen@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 3,
        name: "Philip Seymour Hoffman",
        phone: "(555) 345-6789",
        email: "emily.rodriguez@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 4,
        name: "Amy Adams",
        phone: "(555) 456-7890",
        email: "james.williams@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 5,
        name: "Laura Dern",
        phone: "(555) 567-8901",
        email: "lisa.anderson@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 6,
        name: "Rami Malek",
        phone: "(555) 678-9012",
        email: "david.thompson@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 7,
        name: "Jesse Plemons",
        phone: "(555) 789-0123",
        email: "jennifer.lee@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 8,
        name: "Ambyr Childers",
        phone: "(555) 890-1234",
        email: "robert.martinez@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 9,
        name: "Madisen Beaty",
        phone: "(555) 901-2345",
        email: "amanda.taylor@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 10,
        name: "Leslie Jones",
        phone: "(555) 012-3456",
        email: "christopher.brown@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 11,
        name: "Lena Gentry",
        phone: "(555) 135-7911",
        email: "lena.gentry@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 12,
        name: "Calvin Collins",
        phone: "(555) 246-8022",
        email: "calvin.collins@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 13,
        name: "Chaz Gregory",
        phone: "(555) 357-9133",
        email: "chaz.gregory@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 14,
        name: "Elaine Hughes",
        phone: "(555) 468-0244",
        email: "elaine.hughes@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 15,
        name: "Monica Franco",
        phone: "(555) 579-1355",
        email: "monica.franco@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 16,
        name: "Rory Dickerson",
        phone: "(555) 680-2466",
        email: "rory.dickerson@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 17,
        name: "Seth Wheeler",
        phone: "(555) 791-3577",
        email: "seth.wheeler@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 18,
        name: "Ryland Ferguson",
        phone: "(555) 802-4688",
        email: "ryland.ferguson@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 19,
        name: "Jaylee Odom",
        phone: "(555) 913-5799",
        email: "jaylee.odom@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 20,
        name: "Gaven Lowe",
        phone: "(555) 024-6800",
        email: "gaven.lowe@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 21,
        name: "Conor Salas",
        phone: "(555) 135-7912",
        email: "conor.salas@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 22,
        name: "Whitney Terrell",
        phone: "(555) 246-8023",
        email: "whitney.terrell@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 23,
        name: "Gracelyn Carr",
        phone: "(555) 357-9134",
        email: "gracelyn.carr@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 24,
        name: "Wade Lamb",
        phone: "(555) 468-0245",
        email: "wade.lamb@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 25,
        name: "Savion Pennington",
        phone: "(555) 579-1356",
        email: "savion.pennington@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 26,
        name: "Tyson Mcconnell",
        phone: "(555) 680-2467",
        email: "tyson.mcconnell@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 27,
        name: "Rowan Liu",
        phone: "(555) 791-3578",
        email: "rowan.liu@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 28,
        name: "Elyse Boyle",
        phone: "(555) 802-4689",
        email: "elyse.boyle@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 29,
        name: "Makayla Villegas",
        phone: "(555) 913-5790",
        email: "makayla.villegas@company.com",
        photo: "ContactIcon.png",
    },
    {
        id: 30,
        name: "Noah Ramirez",
        phone: "(555) 024-6801",
        email: "noah.ramirez@company.com",
        photo: "ContactIcon.png",
    },
];

const App = () => {
    const [contacts, setContacts] = useState(CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");
    useEffect(() => {}, []);
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [showAddForm, setShowAddForm] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }
    function toggleAddForm()
    {
        setShowAddForm(!showAddForm);
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <div className="page__header-T">
                    <h1 className="page__title">Phonebook Challenge</h1>
                    <p className="page__subtitle">Build a simple contact directory</p>
                </div>
                <div className="page__header-R">
                    <button className="btn" type="button">
                        Customize
                    </button>
                    <div className="add-contact-wrapper">
                        <button
                            className="btn btn--primary"
                            type="button"
                            onClick={toggleAddForm}
                        >
                            Add Contact
                        </button>
                        {showAddForm && (
                            <div className="add-contact-dropdown">
                                <h3>Add a Contact</h3>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required
                                            minLength={2}
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            inputMode="tel"
                                            placeholder="(555) 555-5555"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form__actions">
                                        <button className="btn btn--primary" type="submit" data-testid="btn-add">
                                            Add Contact
                                        </button>
                                        <button
                                            className="btn"
                                            type="button"
                                            onClick={toggleAddForm}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <section className="search" aria-labelledby="search-heading">
                 <h2 id="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input">Search</label>
                    <div className="search__input-wrapper">
                        <input
                            id="search-input"
                            type="search"
                            placeholder="Search by name or phone"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            data-testid="search-input"
                        />
                    </div>
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading" style={{ display: 'none' }}>Contacts</h2>
                <ul className="contacts-list">
                    <li className="contacts-list__header">
                        <span>Photo</span>
                        <span>Full name</span>
                        <span>Phone</span>
                        <span>Email</span>
                    </li>
                    {contacts.map((contact) => {
                        return (
                            <li key={contact.id} className="contact-card">
                                <img
                                    src={contact.photo}
                                    alt={`Profile picture corresponding to this ${contact.name}`}
                                    className="contact-photo"
                                />
                                <div className="contact-info">
                                    <h3>{contact.name}</h3>
                                </div>
                                <div className="contact-info">
                                    <p>
                                        <strong>Phone:</strong> {contact.phone}
                                    </p>
                                </div>
                                <div className="contact-info">
                                    <p>
                                        <strong>Email:</strong> {contact.email}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <footer className="page__footer">
                <small>
                    Starter provided. Complete tasks per README and make this page
                    shine.
                </small>
            </footer>
        </main>
    );
};

export default App;
