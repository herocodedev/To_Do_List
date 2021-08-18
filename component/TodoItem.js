import html from '../core.js'


function TodoItem({ todo, index }) {
    return html `
    <li class="${todo.completed && 'completed'}">
        <div class="view">
            <div class="icons"><i class="fas fa-star"></i></div>
            <input type="checkbox" class="toggle" 
            onchange="dispatch('toggle',${index})"
            ${todo.completed && 'checked'}>
            <label class="title">${todo.title}</label><br>
            <button class="close"
            onclick="dispatch('Delete',${index})"
            ><i class="fas fa-times"></i></button>
            <label class="bonus">VIỆC QUAN TRỌNG CẦN BẠN HOÀN THÀNH SỚM</label>
            </div>
    </li>
    `
}
export default TodoItem