import html from '../core.js'
import TodoItem from './TodoItem.js'
import { connect } from '../store.js'

function TodoList({ todos, filter, filters }) {

    return html `
    <section class="main">
            <ul class="todo-list">
               ${todos
                .filter(filters[filter])
                .map((todo,index) => TodoItem({todo,index}))}

            </ul>
        </section>
    `
}
export default connect()(TodoList)