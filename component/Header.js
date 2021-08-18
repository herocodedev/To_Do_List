import html from '../core.js'

function header() {
    return html `
    <header class="header">
        <h1>todos</h1>
        <input class="add-todo" placeholder="Add a task..." 
        onkeyup="event.keyCode === 13 && dispatch('add',this.value.trim())"
        autofocus>
        <div class="icon" onclick=><i class="fas fa-pen"></i></div>
    </header>
    `
}
export default header