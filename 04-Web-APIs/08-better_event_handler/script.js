const allDivs = document.querySelectorAll("div");
const employeeContainer = document.querySelector("#employeeContainer");

//Loop Through Data in data.js file both are included in html. Best pratice would be to separate the data from the functions.

for (let i = 0; i<employeeData.length; i++){
  //create a variable that holds all the object info, forloop so I can get the array index easily.
  const employee = employeeData[i];

  //Create all the elements needed in each card.
  const employeeCard = document.createElement("div");
  const nameContainer = document.createElement("section");
  const voteContainer = document.createElement("section");
  const voteButton = document.createElement("button");
  
  //Add name and votes text to card from each object
  nameContainer.textContent = employee.name;
  voteContainer.textContent = employee.votes;
  voteButton.textContent = "Vote";

  //Add attributes, class voteButton i'll need later in the listener to filter what i'm listening to. 
  voteButton.setAttribute("class", "voteButton");
    //add the index from the array, so I can add votes to the right object 
    // this is the same as doing: voteButton.setAttribute("data-index", i)
  voteButton.dataset.index = i;

  // add a class to get styles from the css
  employeeCard.setAttribute("class", "employeeCard");
  
  // append nameContainer, voteContainer and voteButton to the Card 
  employeeCard.append(nameContainer);
  employeeCard.append(voteContainer);
  employeeCard.append(voteButton);

  //add the entire card to the employeeContainer
  employeeContainer.append(employeeCard);
}

employeeContainer.addEventListener("click", function(e){
  const clickedElement = e.target;
  if (clickedElement.getAttribute("class")==="voteButton"){ 
    const employeeIndex = parseInt(clickedElement.getAttribute("data-index"));
    employeeData[employeeIndex].votes++
    clickedElement.previousSibling.textContent = employeeData[employeeIndex].votes;
  };
})

