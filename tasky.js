const taskContainer = document.querySelector(".task__container")
console.log(taskContainer);
const saveChanges = () => {
  const taskData = {
      id: `${Date.now()}`,
      imageUrl: document.getElementById("imageurl").value,
      taskTitle: document.getElementById("tasktitle").value,
      taskType: document.getElementById("tasktype").value,
      taskDescription: document.getElementById("taskdescription").value
    };


    const newCard = `

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
    `;
  taskContainer.insertAdjacentHTML("beforeend", newCard);
  };
