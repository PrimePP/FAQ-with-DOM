const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];



const parentItem = document.querySelector('.accordian_body');
const faqs = [faqData[0],faqData[1],faqData[3]];




function showFaq() {
  const plusBtn = document.querySelectorAll('.plus_btn');
  const arrBtn = document.querySelectorAll('.arr_btn');
  const paraText = document.querySelectorAll('.text-desc')
  console.log(plusBtn);
  console.log(arrBtn);

  //showing faq answers from nodeList
   for (let item = 0; item < plusBtn.length; item++) {
      plusBtn[item].addEventListener('click',function(){
        plusBtn[item].classList.toggle('hidden')
        arrBtn[item].classList.toggle('hidden')
        paraText[item].classList.toggle('hidden')
      })
      arrBtn[item].addEventListener('click',()=>{
        plusBtn[item].classList.toggle('hidden')
        arrBtn[item].classList.toggle('hidden')
        paraText[item].classList.toggle('hidden')
      })
   }
 
}

//creates the HTMl elements
function createFaq(faqItems) {
  let faqBody ='';
  for (const item of faqItems) {
    faqBody = `<div class="faq">
  <div class="faq_header">
    <h3>${item.question}</h3>
    <div class="show_btn plus_btn"><span class="plus_icon">&plus;</span></div>
    <div class="show_btn arr_btn hidden"><span class="up_arrow_icon">&UpArrow;</span></div>
  </div>
  <p class="text-desc hidden">${item.answer}</p>
  </div>`; 
  parentItem.insertAdjacentHTML('beforeend',faqBody)
  
  }

}

// function btnStatusUpdate() {
  
// }


createFaq(faqData)
showFaq();
