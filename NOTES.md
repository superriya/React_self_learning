facebook having 33k components.
ES7 React/Redux/GraphQL/React-Native snippets

# What is React?

# What is JSX?
    JSX is nothing but a JavaScript XML where we can write HTML code into JavaScript and place them in the DOM without using any function like appendChild() or createElement().
    JSX is not a necessary to write React Application, but JSX makes your react code simpler and elegant
    JSX ultimately transpiles to pure JavaScript which is understood by the browsers. 
    JSX describe the UI

# What is Virtual Dom?
    Virtual Dom is the blueprint of Real Dom.
    whenever HTML elements get changed, then the Virtual Dom gets updated.

# What is Functional component and Class Components
    Two component types

        Stateless Functionl component
            JavaScript functions
                simple functions
                use Func components as much as possible
                absence of 'this' keyword
                solution without using state
                Mainly responsible for the ui 
                Stateless/dumb/presentional

        Stateful class component   
            class extending component class
            render method returning HTML
                More feature rich
                Maintain their own private data - state 
                complex ui logic
                provide lifecycle hooks
                Stateful/smart/container

# What is Props? How it works in Functional component and Class Components

# What is this keyword?

# what is arrow function?

# What is component State?
    state is a reserved keyword in react.
    State is nothing but an object that is privetly maintain inside a component
        never modify the states directly insted make use of setState()
        if we use it directly react will not render the component
    

# what is setState()?
    This method accpets an objects which is nothing but the newState of the object 
    setState method has two parameters  
        1: state object
        2: callback function(arrow function)

# Difference between props and State

-  Props:
    - Props get passed to the component
    - function parameters
    - props are immutable(the parents own the props and can not be changed by theb children )
    - props can be accessed in Functional component by props and in Class Components by this.props

-  State:
    - State is managed within the component
    - Variables declared in the function body
    - state can be changed (state on the other hand managed by the component and hence component has full control to change the state)
    - state can be accessed in Functional component by useState Hook and in Class Components by this.state


# Destructuring props and state

- when the user interacts with our applications events are fired e.g. mouseover, mouseclick, keypress, changeEvent and so on.
- In React onclick event c has to be camelcase/uppercase

# Event handling in function and class

# Binding Event Handlers(Event bindig is required in react)
- there are 4 types of approach to binding events
    - 1 approach : use bind keyword in render method 
        - <button onClick={this.clickHandler.bind(this)}>Click</button> 

    - 2 approach : use arrow function in render method 
        - <button onClick={ () => this.clickHandler()}>Click</button> 

    - 3 approach : use bind keyword in class constructor
        - this.clickHandler = this.clickHandler.bind(this)


    - 4 approach : event binding using arrow function in class property
        - clickHandler = () => {
                this.setState({
                    message : "Goodbye!"
                })
            }
        <button onClick={ this.clickHandler }>Click</button>

    # Template literals (Template strings)
        - Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
        - Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). 
        - The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
        - it's feature in ES6 and it's not feature to specific in React.

    # Method's as Props
        - create method in parent component and passing that method as props in child component
            <button onClick={ props.greetHandler }>Greet Parent!</button>
        - pass string parameter from child component to parent component using arrow function 
            <button onClick={ () => props.greetHandler('child')}>Greet Parent!</button>

    # Conditional Rendering
        1. if/else
            - if/else statement don't work inside the JSX and it's not valid because JSX is just synthactic sugur for function calls and object construction. 

        2. Element variables
        3. Ternary conditional operator
        4. Short circuit operator

    # List and keys
        - key prop is a special string attribute you need to include when creating a list of elements.
        - keys give the elements a stable identity
        - keys help React identify which items have changed, are added, or are removed.
        - Help in efficient update of the user interface. 
        - key prop attribute is not accessible in the child component. 

    # Index as key anti-pattern
        - How to use the index as a key when rendering list and when to use index as a key?
            - The items in your list do not have a unique id.
            - The list is a static list and will not change.
            - The list will never be reordered or filtered.
    
    # Styling React Components
        1. CSS stylesheets
        2. inline styling
        3. CSS Modules
            - CSS will not applied to child component.
        4. CSS in JS Libaries

    # Controlled Component - Form handling
        1. input text
        2. textarea
        3. select 
    
    # Component Lifecycle Methods
        1. Mounting
            - When an instance of a component is being created and inserted into the DOM
            - Mounting have four methods
                1. constructor
                2. static getDerivedStateFromProps
                3. render
                4. componentDidMount
                    - Invoked immediately after a component and all it's children components have been rendered to the DOM.
                    - Interact with the DOM or perform any ajax calls to load data.

        2. Updating
            - When a component is being re-rendered as a result of a changes to either it's props or state
            - Updating have five methods
                1. static getDerivedStateFromProps
                2. shouldComponentUpdate
                3. render 
                4. getSnapShotBeforeUpdate
                    - Capture some information from the DOM.
                5. componentDidUpdate

        3. Unmounting
            - When a component is being removed from the DOM
            - Unmounting we just have only one method
                1. componentWillUnmount

        4. Error Handling
            - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
            - Error have two methods
                1. state getDerivedStateFromError
                2. componentDidCatch

    # Fragments
        - A common pattern in React is for a component to return multiple elements. 
        - Fragments let you group a list of children without adding extra nodes to the DOM.
            render() {
                return (
                    <React.Fragment>
                    <ChildA />
                    <ChildB />
                    <ChildC />
                    </React.Fragment>
                );
            }

        - Short Syntax
            - There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags:
            
            render() {
                return (
                <>
                    <td>Hello</td>
                    <td>World</td>
                </>
                );
            }

        - Keyed Fragments
            - Fragments declared with the explicit <React.Fragment> syntax may have keys. 
                function Glossary(props) {
                    return (
                        <dl>
                        {props.items.map(item => (
                            // Without the `key`, React will fire a key warning
                            <React.Fragment key={item.id}>
                            <dt>{item.term}</dt>
                            <dd>{item.description}</dd>
                            </React.Fragment>
                        ))}
                        </dl>
                    );
                } 
            - key is the only attribute that can be passed to Fragment.

    # Pure Components
        - We can create a component by extending the PureComponent class.
        - A regular component does not implement the shouldComponentUpdate method. It always returns true by default.
        - A pure component on the other hand implements shouldComponentUpdate lifecycle method with a shallow props and state comparison. 
        - Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.
        - Pure Components are introduced for performance enhancement to improve the performance of your components. 
        - Never mutate the state. Always return a new object that reflects the new state.
        - A pure components though only work with class based components.

    # memo
        - memo use to functional base component.
        - use 16 or above 16. version for memo function.
    
    # Refs
    - Refs make it possible to access DOM Node directly within react .
    - e.g. on page load we want input fields to be focus 
    - fetch the input value

    # Refs with Class Components
    - if we need a ref to a child component from a parent component it is possible in Class Components 
    - refs can not be attached to a functional components.