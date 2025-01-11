let skills = [{title:"JavaScript", 
               point1:"Certified JS Specialist by CIW(Certified Internet Web Professional).", 
               point2:"Fluent in React.JS",
               point3: "Knowledgeable in Express.JS & Node.JS"
},
{
               title:"HTML5 & CSS3", 
               point1:"Full understanding of HTML5 Standards.", 
               point2:"Capable of producing clean webpage layouts that allow easy navigation for users.",
               point3: "Experienced in making creative UIs using CSS."
},
{
               title:"Other Notable Skills", 
               point1:"Well versed in Python, PHP and SQL.", 
               point2:"Experience with MongoDB and other similar database structures."
}];

// Variables for skill title and each skill
let skillObject;
let skillTitle = document.querySelector("#skill-title");
let skill1 = document.querySelector("#skill-1");
let skill2 = document.querySelector("#skill-2");
let skill3 = document.querySelector("#skill-3");
let index = 0;

// Set default skills info on slider
skillTitle.innerHTML = skills[index].title;
skill1.innerHTML = skills[index].point1;
skill2.innerHTML = skills[index].point2;
skill3.innerHTML = skills[index].point3;

// Left/Right arrow buttons for slider
let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");


leftArrow.addEventListener("click", () => {
    if (index == 0) {
        index = 2;
        skillTitle.innerHTML = skills[index].title;
        skill1.innerHTML = skills[index].point1;
        skill2.innerHTML = skills[index].point2;
        skill3.innerHTML = skills[index].point3;
    } else {
        index--;
        skillTitle.innerHTML = skills[index].title;
        skill1.innerHTML = skills[index].point1;
        skill2.innerHTML = skills[index].point2;
        skill3.innerHTML = skills[index].point3;
    }
})
rightArrow.addEventListener("click", () => {
    if (index == 2) {
        index = 0;
        skillTitle.innerHTML = skills[index].title;
        skill1.innerHTML = skills[index].point1;
        skill2.innerHTML = skills[index].point2;
        skill3.innerHTML = skills[index].point3;
    } else {
        index++;
        skillTitle.innerHTML = skills[index].title;
        skill1.innerHTML = skills[index].point1;
        skill2.innerHTML = skills[index].point2;
        skill3.innerHTML = skills[index].point3;
    }
})

// contact-hero button:
let contactButton = document.querySelector("#contact-button-wrapper");
let contactButtonText = document.querySelector("#contact-button-text");


const container = document.getElementById('buttonContainer');
    const button = document.getElementById('hoverButton');
    const buttonText = button.querySelector('.button-text');

    button.addEventListener('mousemove', (event) => {
        // Get the position of the mouse relative to the container
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calculate the button's movement within a limited range
        const maxMove = 60; // Maximum movement in pixels
        const offsetX = (x - rect.width / 2) / (rect.width / 2) * maxMove;
        const offsetY = (y - rect.height / 2) / (rect.height / 2) * maxMove;

        // Move the button based on mouse position
        button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        // Calculate the text's slight movement (less than the button's movement)
        const textMoveFactor = 0.35; // Reduce the movement to 35% of the button's movement
        const textOffsetX = offsetX * textMoveFactor;
        const textOffsetY = offsetY * textMoveFactor;

        // Move the text slightly towards the mouse direction
        buttonText.style.transform = `translate(calc(-50% + ${textOffsetX}px), calc(-50% + ${textOffsetY}px))`;
    });

    button.addEventListener('mouseout', () => {
        // Reset button and text position when the mouse leaves the container
        button.style.transform = 'translate(0, 0)';
        buttonText.style.transform = 'translate(-50%, -50%)';
    });
