let root = document.getElementById("root");

let p = document.createElement("p");
p.innerText = "If you go to bed NOW, you should wake up at...";
root.append(p);

let zzz = document.createElement("button");
zzz.innerText = "zzz";
zzz.addEventListener("click", handleOnClickEvent);
root.append(zzz);

let output = document.createElement("div");
output.className = "output";
root.append(output);

output.innerHTML = `
<p>It takes the average human fourteen minutes to fall asleep.</p>
<p>If you head to bed right now, you should try to wake up at one of the following times:</p>
<p id="hours">11:44 PM or 1:14 AM or 2:44 AM or 4:14 AM or 5:44 AM or 7:14 AM</p>
<p>A good night's sleep consists of 5-6 complete sleep cycles.</p>`;

function handleOnClickEvent() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let hours = document.getElementById('hours');
  
    // When the zzz button is clicked, we want to record the current time;
    let now = Date.now();
  
    // Allow 14 minutes to fall asleep;
    let minute = 60 * 1000; // milliseconds
    now += 14 * minute;
  
    // Create six cycles of 90 minutes each;
    let hoursString = "";
    for (let c = 1; c <= 6; c++) {
      now += 90 * minute; // a sleep cycle passed!
      let cycle = new Date(now);
      hoursString += cycle.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      if (c < 6) {
        hoursString += ", ";
      }
    }
  
    // Display the cycles as suggested wake-up times.
    hours.innerText = hoursString;
  }
  