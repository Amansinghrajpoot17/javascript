function addtask (){
    const taskInput= document.getElementById('taskInput');
    const taskText= taskInput.value.trim();
    if (taskText===''){
        alert('please enter a task');
        return;
    }
    const taskList= document.getElementById('taskList');
    const listitem= document.createElement('li');
    const taskspan= document.createElement('span');
    taskspan.textContent= taskText;
    const completeButton= document.createElement('button');
    completeButton.innerHTML='&#10003;';
    completeButton.onclick=()=>{
        taskspan.classList.toggle('completed');
    }
    const removeButton = document.createElement('button');
    removeButton.textContent='remove';
    removeButton.className='remove-btn';
    removeButton.onclick=()=>{
        taskList.removeChild(listitem);
    }
    listitem.appendChild(completeButton);
    listitem.appendChild(taskspan);
    listitem.appendChild(removeButton);
    taskList.appendChild(listitem);
    taskInput.value='';
}