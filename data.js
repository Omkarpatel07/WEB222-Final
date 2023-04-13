window.reviewData = [
    {
        name: "Shiv Patel",
        date: new Date(2022, 10, 20),
        rating: 4,
        text: "I had a blast playing volleyball with my friends at the beach! The sun, sand, and the thrill of the game made it an unforgettable experience. The feeling of spiking the ball over the net and diving for a dig was incredibly satisfying. It's a great way to get some exercise, enjoy friendly competition, and have fun in the sun!"
    },
    {
        name: "Daanish Ajmera",
        date: new Date(2022, 11, 25),
        rating: 4,
        text: "Volleyball is my favorite sport, and playing it in real life is an absolute joy. The teamwork, strategy, and athleticism required make it a challenging and rewarding game. I love the social aspect of playing with a group of people and the adrenaline rush of going for a kill. Whether it's a casual pickup game or a competitive league, volleyball in real life is a fantastic way to stay active and have a great time."
    },
    {
        name: "Masumi Thakkar",
        date: new Date(2022, 11, 30),
        rating: 4,
        text: "As someone who's new to volleyball, I was pleasantly surprised by how much fun I had playing the game. It's a great way to stay active and improve my hand-eye coordination. The thrill of serving the ball, setting up plays, and making a successful spike is addictive. I appreciate how inclusive and welcoming the volleyball community is, and I'm looking forward to playing more and honing my skills."
    },
    {
        name: "Vaidehi Patel",
        date: new Date(2023, 1, 10),
        rating: 5,
        text:  "Playing volleyball in real life is a fantastic workout and an excellent way to bond with friends and family. The fast-paced nature of the game keeps you on your toes, and the friendly competition adds an exciting element. I love the feeling of diving for a ball and the satisfaction of a well-executed block. It's a great way to enjoy the outdoors, get some fresh air, and have a blast with your loved ones!"
    },
    {
        name: "Dev",
        date: new Date(2023, 1, 31),
        rating: 5,
        text: "Volleyball is a game that's filled with energy, excitement, and camaraderie. I enjoy the challenge of coordinating with my teammates, strategizing plays, and executing precise moves. It's a great way to socialize, meet new people, and stay fit. The sense of accomplishment when you make a great play or win a hard-fought game is unbeatable. I highly recommend playing volleyball in real life to anyone who loves sports and wants a fun and fulfilling experience."
    },
    
 ];
 function generateReviewHTML(reviews) {
    const reviewsContainer = document.getElementById('review-table');
  
    reviews.forEach((review) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
  
      const nameHeader = document.createElement('h3');
      nameHeader.textContent = review.name;
      reviewDiv.appendChild(nameHeader);
  
      const datePara = document.createElement('p');
      datePara.textContent = review.date.toLocaleDateString();
      reviewDiv.appendChild(datePara);
  
      const ratingPara = document.createElement('p');
      const ratingString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      ratingPara.textContent = ratingString;
      ratingPara.classList.add('rating');
      reviewDiv.appendChild(ratingPara);
  
      const textPara = document.createElement('p');
      textPara.textContent = review.text;
      reviewDiv.appendChild(textPara);
  
      reviewsContainer.appendChild(reviewDiv);
    });
  }

// function generateReviewHTML(reviews) {
//     const reviewsContainer = document.getElementById('review-table');
//     reviews.forEach((review) => {
//         const row = document.createElement('tr');

//         const nameCell = document.createElement('td');
//         nameCell.textContent = review.name;
//         row.appendChild(nameCell);

//         const dateCell = document.createElement('td');
//         dateCell.textContent = review.date;
//         row.appendChild(dateCell);

//         const ratingCell = document.createElement('td');
//         ratingCell.textContent = review.rating;
//         row.appendChild(ratingCell);

//         const reviewCell = document.createElement('td');
//         reviewCell.textContent = review.review;
//         row.appendChild(reviewCell);

//         reviewsContainer.appendChild(row);
//     });
// }

// // Call the function with reviewData after the data is available
// generateReviewHTML(reviewData);

// document.addEventListener('DOMContentLoaded', function() {
//     createTable(reviewData);

//     const form = document.querySelector('.review-form-input-area');
//     form.addEventListener('submit', function(event) {
//       // Prevent the default behavior of the form (i.e. reloading the page) when the form is submitted
//       event.preventDefault();
  
//       // Get the values entered by the user
//       const name = document.querySelector('#name').value;
//       const date = document.querySelector('#date').value;
//       const rating = document.querySelector('input[name="rating"]:checked').value;
//       const review = document.querySelector('#review').value;
  
//       // Create a new object with the input data
//       const newReview = { name, date, rating, review };
  
//       // Add the new object to the reviewData array
//       reviewData.push(newReview);
  
//       // Clear the form
//       form.reset();
  
//       // Re-create the table with the updated data
//       createTable(reviewData);
//     });

//   });

// function createTable(reviews) {
//     // Fetching the tbody element
//     let table = document.querySelector("#reviews-table");
//     let newRow, newCell, newText;
  
//     // Iterating through the reviews and creating table
//     reviews.forEach(function (review) {
//       // creates a table row
//       newRow = table.insertRow();
//       newRow.className = "card";
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-name";
//       newCell.textContent = "Name: ";
//       newText = document.createTextNode(review.name);
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-date";
//       newCell.textContent = "Date: ";
//       newText = document.createTextNode(review.date);
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-rating";
//       newCell.textContent = "Rating: ";
//       newText = document.createTextNode(getRatingStars(review.rating));
//       newCell.appendChild(newText);
  
//       newCell = newRow.insertCell();
//       newCell.className = "reviews-review";
//       newText = document.createTextNode(review.review);
//       newCell.appendChild(newText);
//     });
//   }
  
//   function getRatingStars(rating) {
//     let starsHtml = '';
//     for (let i = 0; i < rating; i++) {
//       starsHtml += '★ ';
//     }
//     for (let i = rating; i < 5; i++) {
//       starsHtml += '☆ ';
//     }
//     return starsHtml.trim();
//   }