const nameText = document.querySelector("h1");
const endText = document.querySelector("h2");
const button = document.querySelector("span");
// const shopButton = document.querySelector('a');
const owners = {
  0: ["Lorien", "instagram.com/lorien.lorien"],
};

const freeloaders = {
  0: ["Shanti", "instagram.com/shanti_woah"],
  1: ["Alysse", "instagram.com/alysseburford"],
  2: ["Jahvis", "instagram.com/jahvisloveday"],
};

const namesLength = Object.keys(names).length;

function joinNames(names) {
  let joinedNames = "";

  for (let i = 0; i < namesLength; i += 1) {
    if (i < namesLength - 2) {
      joinedNames += `${names[i][0]}, `;
    } else if (i == namesLength - 2) {
      joinedNames += `${names[i][0]} `;
    } else {
      joinedNames += `& ${names[i][0]}`;
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
  // shopButton.classList.add('visible');
});
