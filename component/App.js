import html from '../core.js'
import header from './Header.js'
import TodoList from './Todolist.js'
import Footer from './Footer.js'
import { connect } from '../store.js'

function App({ todos }) {
    return html `
    <section class="todoapp">
    ${header()}
    ${todos.length > 0 && TodoList()}
    ${todos.length > 0 && Footer()}
    </section>
    `
}
export default connect()(App)