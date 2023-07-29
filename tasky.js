const taskContainer = document.querySelector(".task__container")
const globalStore = [];
console.log(taskContainer);
const generateNewCard = (taskData) => 
  `
 <div class="col-sm-12 col-md-6 col-md-4" id=${taskData.id}>

     <div class="card h-100 d-flex flex-column" style="width: 20rem;">
         <div class="card-header d-flex justify-content-end gap-2">
             <button type="button" class="btn btn-outline-success"><i
                     class="fa-solid fa-pencil"></i></button>
             <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"
                     aria-hidden="true"></i></button>
         </div>
         <div class="card-body">
             <img class="card-img-top" src=${taskData.imageUrl} alt="imgurl" style="height: 200px;">
             <h5 class="card-title mt-4 fw-bolder text-primary ">${taskData.taskTitle}</h5>
             <p class="card-text fs-5 fst-italic ">${taskData.taskDescription}</p>
             <a href="#" class="btn btn-primary">${taskData.taskType}</a>
         </div>
     </div>

 </div>
 `
;

const loadInitialCardData = () => {

  //1.localStorage to get tasky card data(array object)
  const getCardData = localStorage.getItem("tasky");

  //2.Convert to normal object
  const {cards} =JSON.parse(getCardData);

  //3.Loop over those array of task object to create HTML card
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend" , generateNewCard(cardObject));

      //4.Update globalStore
      globalStore.push(cardObject);
  );


const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };





    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
    globalStore.push(taskData);
    localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
};
