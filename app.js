// Data and constants
const slots = [
    "07:00-08:00",
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
    "19:00-20:00",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const schedules = {
    "O-1": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
        Tuesday:    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        Wednesday:  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        Thursday:   [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        Friday:     [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    },
    "O-2": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        Tuesday:    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        Wednesday:  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        Thursday:   [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        Friday:     [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    "O-3": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        Tuesday:    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        Wednesday:  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        Thursday:   [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        Friday:     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    },
    "O-4": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        Tuesday:    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        Wednesday:  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        Thursday:   [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        Friday:     [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    },
    "O-11": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
        Tuesday:    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Wednesday:  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Thursday:   [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        Friday:     [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    },
    "O-12": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Tuesday:    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Wednesday:  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Thursday:   [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        Friday:     [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    },
    "O-13": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        Tuesday:    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        Wednesday:  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        Thursday:   [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        Friday:     [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
    },
    "O-14": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        Tuesday:    [0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        Wednesday:  [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        Thursday:   [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        Friday:     [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    "P-12": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
        Tuesday:    [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0],
        Wednesday:  [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
        Thursday:   [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        Friday:     [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    "P-24": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        Tuesday:    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        Wednesday:  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        Thursday:   [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        Friday:     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    "I-11": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        Tuesday:    [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        Wednesday:  [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        Thursday:   [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        Friday:     [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    },
    "I-14": {
        //           7  8  9 10 11 12 13 14 15 16 17 18 19
        Monday:     [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        Tuesday:    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0],
        Wednesday:  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        Thursday:   [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0],
        Friday:     [0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    },
};

// Global state
let isManualMode = false;
let updateInterval;
let manualDateTime = new Date();
let lastHour = -1;

// DOM elements
const appWrapperEl = document.getElementById("app-wrapper");
const manualDateControls = document.getElementById(
    "manual-date-controls"
);
const revertBtn = document.getElementById("revert-auto-btn");
const ribbonContainer = document.getElementById("time-ribbon-container");
const track = document.getElementById("ribbon-track");
const handle = document.getElementById("ribbon-handle");
const roomsStatusContainerEl = document.getElementById("rooms-status-container");
const closedRoomsContainerEl = document.getElementById("closed-rooms-container");
const closedRoomsListEl = document.getElementById("closed-rooms-list");
const closingSoonRoomsContainerEl = document.getElementById("closing-soon-rooms-container");
const closingSoonRoomsListEl = document.getElementById("closing-soon-rooms-list");
const classesInUseContainerEl = document.getElementById(
    "classes-in-use-container"
);
const classesInUseListEl = document.getElementById(
    "classes-in-use-list"
);
const daySwitcherContainerEl = document.getElementById("day-switcher-container");
const manualWeekdayEl = document.getElementById("manual-weekday");
const prevDayBtn = document.getElementById("prev-day");
const nextDayBtn = document.getElementById("next-day");


// Utility function to find the current time slot index
function currentSlotIndex(date) {
    const h = date.getHours();
    const m = date.getMinutes();
    for (let i = 0; i < slots.length; i++) {
        const [start, end] = slots[i].split("-").map((s) => s.trim());
        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);
        const startMinutes = sh * 60 + sm;
        const endMinutes = eh * 60 + em;
        const nowMinutes = h * 60 + m;
        if (nowMinutes >= startMinutes && nowMinutes < endMinutes) return i;
    }
    return -1;
}

// Function to update the user interface based on the current time
function updateUI() {
    const now = isManualMode ? manualDateTime : new Date();
    const weekday = weekdays[now.getDay()];
    const nowInfoEl = document.getElementById("now-info");
    const noRoomsMsgEl = document.getElementById("no-rooms-message");
    const bestRoomsListEl = document.getElementById("best-rooms-list");

    const timeStatus = isManualMode ? "Manual" : "Live";
    nowInfoEl.textContent = `${timeStatus}: ${weekday} ${now.toLocaleDateString()} ${now.toLocaleTimeString(
        "es-MX"
    )}`;

    updateHandlePosition(now);
    if (isManualMode) {
        manualWeekdayEl.textContent = weekday;
    }


    const currentHour = now.getHours();
    if (currentHour === lastHour && !isManualMode) {
        return;
    }
    lastHour = currentHour;

    noRoomsMsgEl.classList.add("hidden");
    roomsStatusContainerEl.classList.add("hidden");
    closedRoomsContainerEl.classList.add("hidden");
    closingSoonRoomsContainerEl.classList.add("hidden");
    classesInUseContainerEl.classList.add("hidden");

    const slotIndex = currentSlotIndex(now);
    const nextSlotIndex = slotIndex + 1;

    if (
        !schedules["O-1"][weekday] ||
        weekday === "Saturday" ||
        weekday === "Sunday"
    ) {
        bestRoomsListEl.innerHTML = "";
        noRoomsMsgEl.classList.remove("hidden");
        noRoomsMsgEl.textContent = "No hay clases en fin de semana";
        appWrapperEl.classList.remove("max-w-2xl", "max-w-4xl");
        return;
    }

    if (slotIndex === -1) {
        bestRoomsListEl.innerHTML = "";
        noRoomsMsgEl.classList.remove("hidden");
        noRoomsMsgEl.textContent =
            now.getHours() >= 20
                ? "Todas las clases han terminado"
                : "No han empezado las clases";
        appWrapperEl.classList.remove("max-w-2xl", "max-w-4xl");
        return;
    }

    let availableRooms = [],
        closedRooms = [],
        classesInUse = [],
        closingRooms = [],
        widgetCount = 1;

    for (const [room, days] of Object.entries(schedules)) {
        const occ = days[weekday];
        if (!occ) continue;

        const currentOccupied = occ[slotIndex] === 1;
        const futureSlots = occ.slice(slotIndex + 1);
        const allFutureFree = futureSlots.every(v => v === 0);

        // Classes in use
        if (currentOccupied) {
            let occupiedCount = 0;
            for (let i = slotIndex; i < occ.length; i++) {
                if (occ[i] === 1) occupiedCount++;
                else break;
            }
            classesInUse.push({
                room,
                text: `Usada por ${occupiedCount} hora(s)`,
            });

            if (allFutureFree) {
                const endTime = slots[slotIndex].split("-")[1];
                closingRooms.push({ room, text: `Cierra a las ${endTime}` });
            }
        }

        // Closed rooms (free now and forever)
        if (!currentOccupied && allFutureFree) {
            closedRooms.push(room);
        }

        // Available rooms (free now but not closed for day)
        if (!currentOccupied && !allFutureFree) {
            let freeCount = 0;
            let nextOccupiedSlotIndex = -1;
            for (let i = slotIndex; i < occ.length; i++) {
                if (occ[i] === 0) freeCount++;
                else {
                    nextOccupiedSlotIndex = i;
                    break;
                }
            }
            const freeText =
                nextOccupiedSlotIndex !== -1
                    ? `libre por ${freeCount} hora(s)`
                    : `libre por el resto del dia `;
            availableRooms.push({ room, freeText, freeCount });
        }
    }


    availableRooms.sort((a, b) => b.freeCount - a.freeCount);
    bestRoomsListEl.innerHTML =
        availableRooms.length > 0
            ? availableRooms
                .map(
                    ({ room, freeText }) =>
                        `<li><div><span>${room}</span><span class="text-sm font-normal text-gray-500">${freeText}</span></div></li>`
                )
                .join("")
            : "";

    if (availableRooms.length === 0 && slotIndex !== -1) {
        noRoomsMsgEl.textContent = "No hay salones disponibles";
    }

    noRoomsMsgEl.classList.toggle("hidden", availableRooms.length > 0);

    if (closedRooms.length > 0 || closingRooms.length > 0) {
        roomsStatusContainerEl.classList.remove("hidden");
        widgetCount++;
    }

    if (closedRooms.length > 0) {
        closedRoomsContainerEl.classList.remove("hidden");
        closedRoomsListEl.innerHTML = closedRooms
            .map((r) => `<li>${r}</li>`)
            .join("");
    }

    if (closingRooms.length > 0) {
        closingSoonRoomsContainerEl.classList.remove("hidden");
        closingSoonRoomsListEl.innerHTML = closingRooms
            .map(({ room, text }) => `<li>${room} - ${text}</li>`)
            .join("");
    }

    if (classesInUse.length > 0) {
        classesInUseContainerEl.classList.remove("hidden");
        classesInUseListEl.innerHTML = classesInUse
            .map(({ room, text }) => `<li>${room} - ${text}</li>`)
            .join("");
        widgetCount++;
    }

    appWrapperEl.classList.remove("max-w-2xl", "max-w-4xl");
    if (widgetCount === 3) appWrapperEl.classList.add("max-w-4xl");
    else if (widgetCount === 2) appWrapperEl.classList.add("max-w-2xl");

}

// --- Ribbon and Calendar Logic ---
function timeToPercent(date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const totalMinutes = (h - 7) * 60 + m;
    const rangeMinutes = 13 * 60;
    return Math.max(0, Math.min(1, totalMinutes / rangeMinutes));
}

function percentToTime(percent) {
    const rangeMinutes = 13 * 60;
    const minutesFromStart = percent * rangeMinutes;
    const snappedMinutes = Math.round(minutesFromStart / 30) * 30;
    const h = Math.floor(snappedMinutes / 60) + 7;
    const m = Math.floor(snappedMinutes % 60);
    const newDate = new Date(manualDateTime);
    newDate.setHours(h, m, 0, 0);
    return newDate;
}

let handlePercent = 0; // global

function updateHandlePosition(date) {
    if (date) {
        handlePercent = timeToPercent(date);
    }
    handlePercent = Math.max(0, Math.min(1, handlePercent));
    handle.style.left = `${handlePercent * 100}%`;
}

function switchToManualMode() {
    if (isManualMode) return;
    isManualMode = true;
    clearInterval(updateInterval);
    manualDateTime = new Date();
    manualDateControls.classList.remove("hidden");
    setupDaySwitcher();
}

function revertToAuto() {
    if (!isManualMode) return;
    isManualMode = false;
    manualDateControls.classList.add("hidden");
    updateInterval = setInterval(updateUI, 1000);
    updateUI();
    updateHandlePosition(new Date());
}

// New Day Switcher Functions
function setupDaySwitcher() {
    manualWeekdayEl.textContent = weekdays[manualDateTime.getDay()];
    prevDayBtn.onclick = () => {
        manualDateTime.setDate(manualDateTime.getDate() - 1);
        setupDaySwitcher();
        updateUI();
    };
    nextDayBtn.onclick = () => {
        manualDateTime.setDate(manualDateTime.getDate() + 1);
        setupDaySwitcher();
        updateUI();
    };
}


function createTimeMarks() {
    const marksContainer = document.getElementById("time-marks-container");
    if (!marksContainer) return;
    marksContainer.innerHTML = "";

    const startHour = 7;
    const endHour = 20;

    for (let hour = startHour; hour <= endHour; hour++) {
        const percent = (hour - startHour) / (endHour - startHour);

        const mark = document.createElement("div");
        mark.className = "time-mark";
        mark.style.left = `${percent * 100}%`;

        const label = document.createElement("span");
        label.className = "time-label";
        label.textContent = `${hour}:00`;
        label.style.left = `${percent * 100}%`;

        marksContainer.appendChild(mark);
        marksContainer.appendChild(label);
    }
}

// Event Listeners
handle.addEventListener("mousedown", (e) => {
    e.preventDefault();
    switchToManualMode();

    const trackRect = track.getBoundingClientRect();
    const onMouseMove = (moveEvent) => {
        let x = moveEvent.clientX - trackRect.left;
        let percent = Math.max(0, Math.min(1, x / trackRect.width));
        manualDateTime = percentToTime(percent);
        updateHandlePosition(manualDateTime);
    };

    const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        updateUI();
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});

revertBtn.addEventListener("click", revertToAuto);
ribbonContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    revertToAuto();
});

function startAutoMode() {
    isManualMode = false;
    manualDateControls.classList.add("hidden");
    updateUI();
    updateInterval = setInterval(updateUI, 1000);
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
    createTimeMarks();
    startAutoMode();
    window.addEventListener("resize", () => {
        updateHandlePosition(isManualMode ? manualDateTime : new Date());
    });
});

window.addEventListener("load", () => {
    updateHandlePosition(new Date());
});
