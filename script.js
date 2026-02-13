const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

const sampleEvents = [
    {
        title: "Web Dev",
        date: "2025-03-04",
        category: "Workshop",
        description: "Web development bootcamp"
    },
    {
        title: "Tech Conference",
        date: "2025-03-25",
        category: "Conference",
        description: "Annual tech conference event"
    }
];


// FORM SUBMIT
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value.trim(),
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value.trim()
    };

    if (!eventData.title || !eventData.date) return;

    addEvent(eventData);
    eventForm.reset();
});


// CREATE EVENT CARD
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}


// ADD EVENT
function addEvent(eventData) {

    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}


// CLEAR ALL EVENTS
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = `
        <div class="empty-state">
            No events yet. Add your first event!
        </div>
    `;
});


// ADD SAMPLE EVENTS
addSampleBtn.addEventListener("click", () => {
    sampleEvents.forEach(addEvent);
});


// DELETE EVENT (Event Delegation)
eventContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {
        const card = event.target.closest(".event-card");
        if (card) card.remove();
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = `
            <div class="empty-state">
                No events yet. Add your first event!
            </div>
        `;
    }
});