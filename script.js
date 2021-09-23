const nameText = document.querySelector("h1");
const endText = document.querySelector("h2");
const freeloaderText = document.querySelector(".freeloaders");
const button = document.querySelector("span");
// const shopButton = document.querySelector("a");
const owners = {
  0: { name: "Lorien", link: "instagram.com/lorien.lorien" },
};

const freeloaders = {
  0: { name: "Shanti", link: "instagram.com/shanti_woah" },
  1: { name: "Alysse", link: "instagram.com/alysseburford" },
  2: { name: "Jahvis", link: "instagram.com/jahvisloveday" },
};

function joinNames(names) {
  const namesLength = Object.keys(names).length;
  let joinedNames = "";

  if (namesLength == 1) return names[0].name;

  for (let i = 0; i < namesLength; i += 1) {
    if (i < namesLength - 2) {
      joinedNames += `${names[i].name}, `;
    } else if (i == namesLength - 2) {
      joinedNames += `${names[i].name} `;
    } else {
      joinedNames += `& ${names[i].name}`;
    }
  }

  return joinedNames;
}

function changeText(names) {
  nameText.innerHTML = names;
  endText.textContent = "owns urbooty.";
}

button.addEventListener("click", function () {
  const joinedNames = joinNames(owners);
  changeText(joinedNames);
  freeloaderText.style.display = "block";
  // shopButton.classList.add("visible");
});
