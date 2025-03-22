document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.getElementById("event-list");

    const events = [
        {
            title: "Neon Night @ Club XYZ",
            date: "March 20, 2025",
            time: "9 PM - 3 AM",
            link: "#",
            image: "https://wallpaper.dog/large/20497494.jpg",
            about: `
                <p>🎉🏡 <strong>Everyone knows the best memories are made at house parties!</strong></p>
                <p>That’s why we’re bringing you a unique mix of social vibes and dance in a new way, exclusively for all of Auckland’s (new) students 🌟🍸</p>
                <p>It’s a house party with a twist – set in a club for an unforgettable night!</p>
                <p>Get ready for a night of epic tunes, laughter, and pure fun. Every beat will keep you moving!</p>
                <p>See you on the dance floor…</p>
                <p><strong>P.S.</strong> Group tickets offer the best deal, price-wise.</p>
                <hr>
                <p><strong>𝐄𝐯𝐞𝐧𝐭 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧</strong></p>
                <p>🪪 Please bring a valid ID; this event is 18+ only.</p>
                <p>💃 Dress up and get ready for an unforgettable night!</p>
                <p>🌐 Follow us on Instagram: <a href="https://instagram.com/jointhestudentlife" target="_blank">@jointhestudentlife</a></p>
            `
        },
        {
            title: "Beach Bash @ Takapuna Beach",
            date: "March 22, 2025",
            time: "5 PM - 12 AM",
            link: "#",
            image: "https://wallpaper.dog/large/20497494.jpg",
            about: `
                <p>🌊🌴 <strong>Nothing beats a beach party under the stars!</strong></p>
                <p>Join us for the ultimate Takapuna Beach Bash – drinks, music, and non-stop fun! 🍹🎶</p>
                <p>Get ready to dance on the sand, chill with your mates, and make unforgettable memories.</p>
                <p>See you on the shore…</p>
                <p><strong>P.S.</strong> Early bird tickets are selling fast!</p>
                <hr>
                <p><strong>𝐄𝐯𝐞𝐧𝐭 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧</strong></p>
                <p>🪪 Please bring a valid ID; this event is 18+ only.</p>
                <p>🏖️ Beachwear encouraged but keep it stylish!</p>
                <p>🌐 Follow us on Instagram: <a href="https://instagram.com/jointhestudentlife" target="_blank">@jointhestudentlife</a></p>
            `
        }
    ];

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.style.backgroundImage = `url('${event.image}')`;
        eventDiv.style.backgroundSize = "cover";
        eventDiv.style.backgroundPosition = "center";
        eventDiv.style.color = "white";

        eventDiv.innerHTML = `
            <div class="event-content">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date} | <strong>Time:</strong> ${event.time}</p>
                <a href="${event.link}" class="btn">Buy Tickets</a>
                <button class="toggle-about">More Info</button>
                <div class="about-section">${event.about}</div>
            </div>
        `;
        eventList.appendChild(eventDiv);
    });

    // Toggle "More Info" panels
    document.querySelectorAll(".toggle-about").forEach(button => {
        button.addEventListener("click", function () {
            const aboutSection = this.nextElementSibling;
            aboutSection.classList.toggle("visible");
        });
    });
});
