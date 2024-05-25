const taskinput =document.getAnimations('taskinput')
const addtask =document.getAnimations('addtask')
const todoList =document.getAnimations('todoList')


const addtaskbutton = ()=>{
    const taskname =taskinput.value.trim();
    if(taskname ===''){
        alert('please enter me')
        return
    }

    const li =document.createElement('li')
    li.className='task flex justify-between intem-center p-2bgt-gray-100 rounded shadow'

    // add task name
    const span =document.createElement('span')
    span.className='flex-1'
    span,addEventListener('click', ()=>{
        span.classList.toggle('line-through')
        span.classList.toggle('text-gray-400')

    })

//delate
    const btn =document.createElement('buttton')

    btn.className=('bg-red-400 text-white p-1 rounded hover:bg-red-500')

    btn.textcontent ="delate"
    span.innerHTML=taskname
    li.appendChild(span)
    li.appendChild(btn)

    todoList.appendChild(li)
    btn,addEventListener('click' ,()=>{
        

    })
    taskinput,value=""
}
addtask,addEventListener('click' , addtaskbutton)