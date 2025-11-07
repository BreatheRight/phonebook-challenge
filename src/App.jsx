import { useEffect, useMemo, useState } from "react";
import "./App.css";

// Hardcoded contacts **New: mapped the contact names to the .jpg filenames in \public (Credits to Unsplash for photos)
const CONTACTS = [
    {
        id: 1,
        name: "Aiony Haust",
        phone: "(555) 123-4567",
        email: "sarah.johnson@company.com",
        photo: "/ContactPictures/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        project: "greenhouse",
        role: "Designer",
        bio: "",
    },
    {
        id: 2,
        name: "Alex Suprun",
        phone: "(555) 234-5678",
        email: "michael.chen@company.com",
        photo: "/ContactPictures/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Engineer",
        bio: "",
    },
    {
        id: 3,
        name: "Ali Morshedlou",
        phone: "(555) 345-6789",
        email: "emily.rodriguez@company.com",
        photo: "/ContactPictures/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Producer",
        bio: "",
    },
    {
        id: 4,
        name: "Brock Wegner",
        phone: "(555) 456-7890",
        email: "james.williams@company.com",
        photo: "/ContactPictures/brock-wegner-7yONARoUsbY-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Manager",
        bio: "",
    },
    {
        id: 5,
        name: "Brooke Cagle",
        phone: "(555) 567-8901",
        email: "lisa.anderson@company.com",
        photo: "/ContactPictures/brooke-cagle-nNj_e121IbI-unsplash.jpg",
        project: "greenhouse",
        role: "Coordinator",
        bio: "",
    },
    {
        id: 6,
        name: "Cesar Rincon",
        phone: "(555) 678-9012",
        email: "david.thompson@company.com",
        photo: "/ContactPictures/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Engineer",
        bio: "",
    },
    {
        id: 7,
        name: "Christina Wocintechchat",
        phone: "(555) 789-0123",
        email: "jennifer.lee@company.com",
        photo: "/ContactPictures/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Designer",
        bio: "",
    },
    {
        id: 8,
        name: "Craig Mckay",
        phone: "(555) 890-1234",
        email: "robert.martinez@company.com",
        photo: "/ContactPictures/craig-mckay-jmURdhtm7Ng-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Lead",
        bio: "",
    },
    {
        id: 9,
        name: "Erik Lucatero",
        phone: "(555) 901-2345",
        email: "amanda.taylor@company.com",
        photo: "/ContactPictures/erik-lucatero-d2MSDujJl2g-unsplash.jpg",
        project: "greenhouse",
        role: "Engineer",
        bio: "",
    },
    {
        id: 10,
        name: "Fabio Henning",
        phone: "(555) 012-3456",
        email: "christopher.brown@company.com",
        photo: "/ContactPictures/fabio-henning-mMTqXCM1pYU-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Producer",
        bio: "",
    },
    {
        id: 11,
        name: "Gama Films",
        phone: "(555) 135-7911",
        email: "lena.gentry@company.com",
        photo: "/ContactPictures/gama-films-PkbVlqo2IEU-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Coordinator",
        bio: "",
    },
    {
        id: 12,
        name: "Imansyah Muhamad",
        phone: "(555) 246-8022",
        email: "calvin.collins@company.com",
        photo: "/ContactPictures/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Researcher",
        bio: "",
    },
    {
        id: 13,
        name: "Ivana Cajina",
        phone: "(555) 357-9133",
        email: "chaz.gregory@company.com",
        photo: "/ContactPictures/ivana-cajina-_7LbC5J-jw4-unsplash.jpg",
        project: "greenhouse",
        role: "Designer",
        bio: "",
    },
    {
        id: 14,
        name: "Jack Finnigan",
        phone: "(555) 468-0244",
        email: "elaine.hughes@company.com",
        photo: "/ContactPictures/jack-finnigan-rriAI0nhcbc-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Engineer",
        bio: "",
    },
    {
        id: 15,
        name: "Jake Fagan",
        phone: "(555) 579-1355",
        email: "monica.franco@company.com",
        photo: "/ContactPictures/jake-fagan-Y7C7F26fzZM-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Lead",
        bio: "",
    },
    {
        id: 16,
        name: "Jeremy Brady",
        phone: "(555) 680-2466",
        email: "rory.dickerson@company.com",
        photo: "/ContactPictures/jeremy-brady-B7X7R_Q0c-c-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Coordinator",
        bio: "",
    },
    {
        id: 17,
        name: "Jonas Kakaroto",
        phone: "(555) 791-3577",
        email: "seth.wheeler@company.com",
        photo: "/ContactPictures/jonas-kakaroto-Fs8ZFfVh-cg-unsplash.jpg",
        project: "greenhouse",
        role: "Engineer",
        bio: "",
    },
    {
        id: 18,
        name: "Jonas Kakaroto",
        phone: "(555) 802-4688",
        email: "ryland.ferguson@company.com",
        photo: "/ContactPictures/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Producer",
        bio: "",
    },
    {
        id: 19,
        name: "Leilani Angel",
        phone: "(555) 913-5799",
        email: "jaylee.odom@company.com",
        photo: "/ContactPictures/leilani-angel-K84vnnzxmTQ-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Designer",
        bio: "",
    },
    {
        id: 20,
        name: "Ludovic Migneault",
        phone: "(555) 024-6800",
        email: "gaven.lowe@company.com",
        photo: "/ContactPictures/ludovic-migneault-4uj3iZ5m084-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Manager",
        bio: "",
    },
    {
        id: 21,
        name: "Nina Hill",
        phone: "(555) 135-7912",
        email: "conor.salas@company.com",
        photo: "/ContactPictures/nina-hill-aWVi7wTfLD0-unsplash.jpg",
        project: "greenhouse",
        role: "Engineer",
        bio: "",
    },
    {
        id: 22,
        name: "Noemi Macavei",
        phone: "(555) 246-8023",
        email: "whitney.terrell@company.com",
        photo: "/ContactPictures/noemi-macavei-katocz-or6mrFMVmHM-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Producer",
        bio: "",
    },
    {
        id: 23,
        name: "Philip Martin",
        phone: "(555) 357-9134",
        email: "gracelyn.carr@company.com",
        photo: "/ContactPictures/philip-martin-5aGUyCW_PJw-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Coordinator",
        bio: "",
    },
    {
        id: 24,
        name: "Prince Akachi",
        phone: "(555) 468-0245",
        email: "wade.lamb@company.com",
        photo: "/ContactPictures/prince-akachi-LWkFHEGpleE-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Engineer",
        bio: "",
    },
    {
        id: 25,
        name: "Ransford Quaye",
        phone: "(555) 579-1356",
        email: "savion.pennington@company.com",
        photo: "/ContactPictures/ransford-quaye-DzAFv1iVMGg-unsplash.jpg",
        project: "greenhouse",
        role: "Lead",
        bio: "",
    },
    {
        id: 26,
        name: "Riccardo Pitzalis",
        phone: "(555) 680-2467",
        email: "tyson.mcconnell@company.com",
        photo: "/ContactPictures/riccardo-pitzalis-5ja5MkgoGAU-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Engineer",
        bio: "",
    },
    {
        id: 27,
        name: "Sinitta Leunen",
        phone: "(555) 791-3578",
        email: "rowan.liu@company.com",
        photo: "/ContactPictures/sinitta-leunen-mtHQ342ezmY-unsplash.jpg",
        project: "ORUN Live at Soho",
        role: "Designer",
        bio: "",
    },
    {
        id: 28,
        name: "Slav Romanov",
        phone: "(555) 802-4689",
        email: "elyse.boyle@company.com",
        photo: "/ContactPictures/slav-romanov-BrEAp01_m5w-unsplash.jpg",
        project: "Laurie Anderson Retrospective",
        role: "Coordinator",
        bio: "",
    },
    {
        id: 29,
        name: "Vicky Hladynets",
        phone: "(555) 913-5790",
        email: "makayla.villegas@company.com",
        photo: "/ContactPictures/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg",
        project: "greenhouse",
        role: "Engineer",
        bio: "",
    },
    {
        id: 30,
        name: "Vince Fleming",
        phone: "(555) 024-6801",
        email: "noah.ramirez@company.com",
        photo: "/ContactPictures/vince-fleming-j3lf-Jn6deo-unsplash.jpg",
        project: "This is America - An Anthology 2023-2024",
        role: "Lead",
        bio: "",
    },
];

// Appending contacts grouping logic to allow for filtering by project which defaults to spotlight view upon project seleciton
const PROJECTS = [
    "greenhouse",
    "This is America - An Anthology 2023-2024",
    "ORUN Live at Soho",
    "Laurie Anderson Retrospective",
];

const App = () => {
    const DEFAULT_ROWS = 10;
    const [contacts, setContacts] = useState(CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    const [mode, setMode] = useState("table"); // two modes for user selection: defualt table or spotlight for singles
    const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState("");

    // Add contact form (repurposed from original template)
    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    const [showAddForm, setShowAddForm] = useState(false);

    // Filter contacts, case-insensitive
    const filteredContacts = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = contacts.slice();
        if (selectedProject) {
            list = list.filter((c) => c.project === selectedProject);
        }
        if (q) {
            list = list.filter(
                (c) => c.name.toLowerCase().includes(q) || c.phone.toLowerCase().includes(q)
            );
        }
        return list;
    }, [contacts, query, selectedProject]);

    const pageSize = mode === "spotlight" || Number(rowsPerPage) === 1 ? 1 : Number(rowsPerPage);
    const totalPages = Math.max(1, Math.ceil(filteredContacts.length / pageSize));

    // Ensuring currentPage in range when filteredContacts or pageSize changes
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);

    // Paging helpers
    function goToPage(p) {
        const next = Math.min(Math.max(1, p), totalPages);
        setCurrentPage(next);
    }
    function prevPage() {
        goToPage(currentPage - 1);
    }
    function nextPage() {
        goToPage(currentPage + 1);
    }

    // When selecting a project, switch into spotlight mode and reset page
    function handleSelectProject(p) {
        setSelectedProject(p);
        if (p) {
            setMode("spotlight");
            setRowsPerPage(1);
            setCurrentPage(1);
        }
    }

    // Compute contacts for current page
    const pagedContacts = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredContacts.slice(start, start + pageSize);
    }, [filteredContacts, currentPage, pageSize]);

    // Form handlers
    function toggleAddForm() {
        setShowAddForm(!showAddForm);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || form.name.trim().length < 2) return alert("Name required (min 2 characters)");
        if (!form.phone) return alert("Phone is required");
        const newContact = {
            id: contacts.length + 1,
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            photo: "/ContactPictures/aiony-haust-3TLl_97HNJo-unsplash.jpg",
            project: "greenhouse",
            role: "",
            bio: "",
        };
        setContacts([newContact, ...contacts]);
        setForm({ name: "", phone: "", email: "" });
        setShowAddForm(false);
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <div className="page__header-left">
                    <h1 className="page__title">The Guest House Production Co.</h1>
                    <p className="page__subtitle">Contact Management</p>

                    <p className="search__results" data-testid="results-count" style={{ marginTop: '0.5rem' }}>
                        Showing {filteredContacts.length} {filteredContacts.length === 1 ? "result" : "results"}
                        {loading ? " (loading...)" : ""}
                        {error ? ` (error: ${error})` : ""}
                    </p>
                </div>

                <div className="page__header-right">
                    <div className="search" style={{ marginRight: '1rem' }}>
                        <label htmlFor="search-input">Search</label>
                        <div className="search__input-wrapper">
                            <input id="search-input" type="search" placeholder="Search by name or phone" value={query} onChange={(e) => setQuery(e.target.value)} data-testid="search-input" />
                        </div>
                    </div>
                    <button className="btn" type="button">
                        Customize
                    </button>
                    <div className="add-contact-wrapper">
                        <button className="btn btn--primary" type="button" onClick={toggleAddForm}>
                            Add Contact
                        </button>
                        {showAddForm && (
                            <div className="add-contact-dropdown">
                                <h3>Add a Contact</h3>
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="field">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required minLength={2} />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="phone">Phone</label>
                                        <input id="phone" name="phone" inputMode="tel" placeholder="(555) 555-5555" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" name="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                    <div className="form__actions">
                                        <button className="btn btn--primary" type="submit" data-testid="btn-add">Add Contact</button>
                                        <button className="btn" type="button" onClick={toggleAddForm}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Controls */}
            <div className="controls" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem' }}>
                <div>
                    <label htmlFor="mode-table">Mode:</label>
                    <button id="mode-table" className={`btn ${mode === 'table' ? 'btn--primary' : ''}`} type="button" onClick={() => { setMode('table'); setRowsPerPage(DEFAULT_ROWS); setCurrentPage(1); }} aria-pressed={mode === 'table'}>Table</button>
                    <button id="mode-spotlight" className={`btn ${mode === 'spotlight' ? 'btn--primary' : ''}`} type="button" onClick={() => { setMode('spotlight'); setRowsPerPage(1); setCurrentPage(1); }} aria-pressed={mode === 'spotlight'}>Spotlight</button>
                </div>


                <div style={{ minWidth: 240 }}>
                    <label htmlFor="project-select">In Production</label>
                    <select id="project-select" value={selectedProject} onChange={(e) => handleSelectProject(e.target.value)} aria-label="In Production project selector">
                        <option value="">(none)</option>
                        {PROJECTS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                        ))}
                    </select>
                </div>
            </div>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading" style={{ display: 'none' }}>Contacts</h2>

                {/* Spotlight --> one contact per page, pagination available to view next contact */}
                {mode === 'spotlight' ? (
                    <div className="spotlight">
                        {pagedContacts.length === 0 ? (
                            <p>No contacts for this selection.</p>
                        ) : (
                            pagedContacts.map((contact) => (
                                <div key={contact.id} className="spotlight-card" style={{ display: 'flex', gap: '1rem', padding: '1rem', alignItems: 'center' }}>
                                    <img src={contact.photo} alt={`Photo of ${contact.name}`} style={{ width: 160, height: 160, borderRadius: 8, objectFit: 'cover' }} />
                                    <div>
                                        <h2 style={{ margin: 0 }}>{contact.name}</h2>
                                        <p style={{ margin: 0, opacity: 0.8 }}>{contact.role}</p>
                                        <p style={{ marginTop: '0.5rem' }}><strong>Phone:</strong> {contact.phone}</p>
                                        <p><strong>Email:</strong> {contact.email}</p>
                                        <h3 style={{ marginTop: '1rem' }}>Bio</h3>
                                        <p aria-live="polite">{contact.bio || <em>(no bio)</em>}</p>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Spotlight mode pagination */}
                        <div style={{ marginTop: '1rem' }} aria-label="Spotlight pagination">
                            <button className="btn" onClick={prevPage} aria-label="Previous page">Prev</button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button key={p} className={`btn ${p === currentPage ? 'btn--primary' : ''}`} onClick={() => goToPage(p)} aria-label={`Go to page ${p}`}>{p}</button>
                            ))}
                            <button className="btn" onClick={nextPage} aria-label="Next page">Next</button>
                        </div>
                    </div>
                ) : (
                    /* Table mode with pagination */
                    <>
                        <ul className="contacts-list">
                            <li className="contacts-list__header">
                                <span>Photo</span>
                                <span>Full name</span>
                                <span>Role</span>
                                <span>Phone</span>
                                <span>Email</span>
                            </li>
                            {pagedContacts.map((contact) => (
                                <li key={contact.id} className="contact-card">
                                    <img src={contact.photo} alt={`Photo of ${contact.name}`} className="contact-photo" />
                                    <div className="contact-info"><h3>{contact.name}</h3></div>
                                    <div className="contact-info"><p className="contact-role">{contact.role}</p></div>
                                    <div className="contact-info"><p>{contact.phone}</p></div>
                                    <div className="contact-info"><p>{contact.email}</p></div>
                                </li>
                            ))}
                        </ul>

                        {/* Pagnination (planned for ChakraUI component replacement next iteration) */}
                    </>
                )}
            </section>

            {mode === 'table' ? (
                <footer className="page__footer-chakra">
                    <div className="footer-inner" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="pagination-left" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <button className="btn" onClick={prevPage} aria-label="Previous page">Prev</button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                <button key={p} className={`btn ${p === currentPage ? 'btn--primary' : ''}`} onClick={() => goToPage(p)} aria-label={`Go to page ${p}`}>{p}</button>
                            ))}
                            <button className="btn" onClick={nextPage} aria-label="Next page">Next</button>
                        </div>

                        <div className="pagination-right" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                            <span className="rows-text" style={{ color: 'var(--text-muted, #9AA6A6)', fontSize: '0.9rem' }}>{(filteredContacts.length === 0) ? '0' : `${(currentPage - 1) * pageSize + 1}-${Math.min(currentPage * pageSize, filteredContacts.length)} of ${filteredContacts.length}`} rows</span>
                            <select className="rows-select" value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))} aria-label="Rows per page (footer)" style={{ padding: '0.25rem 0.5rem', borderRadius: 6 }}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={25}>25</option>
                            </select>
                        </div>
                    </div>
                </footer>
            ) : (
                <footer className="page__footer">
                    <small>Starter provided. Complete tasks per README and make this page shine.</small>
                </footer>
            )}
        </main>
    );
};

export default App;
