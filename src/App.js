import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';


//react components
//const App = () => <h1>Hello World</h1>

// class App extends React.Component {
//        render() {
//            return <h1>Hello World</h1>
//        }
//     }


// class App extends React.Component {
//   render() {
    
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <b>Bold</b>
//       </div>
//     )
//   }
// }

// //set properties
// class App extends React.Component {
//   render() {
//     let txt=this.props.txt
//     return <h1>{txt}</h1>
//   }
// }

// //setstate
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt:'this is the state txt',
//       cat:0
//     }
//   }
//   update( e ) {
//     this.setState({txt: e.target.value})
//   }
//      render() {
//       return(
//         <div>
//           <input type="text"
//           onChange = {this.update.bind(this)} />
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//       </div>
//       )
//    }
//   }

// //props.children
// class App extends React.Component {
//      render() {
//        return <button>I <Heart /> React</button>

// }
// }
//   const Button = (props) => <button>{props.children}</button>

//   class Heart extends React.Component{
//     render() {
//       return <span>&hearts;</span>
      
//     }
//   }

// //adding custom proptype validation******
// class App extends React.Component {
//      render() {
//        return<Title text="1234" />
//     }
//   }

//   const Title = (props) => <h1>Title:{props.text} </h1>

//   Title.propTypes = {
//     text(props, propName, component) {
//       if(!(propName in props)){
//         return new Error(`missing ${propName}`)
//       }
//       if(props[propName].length < 5){
//         return new Error(`${propName} was too short`)
//       }
//     }
//   }
        

// //synthetic event system

// class App extends React.Component {
//     constructor(){
//       super();
//       this.state = {currentEvent: '___'}
//       this.update= this.update.bind(this)
//       }
//       update( e ) {
//             this.setState({currentEvent: e.type})
//         }
//         render() {
//           return (
//             <div>
//               <textarea
//                 onCopy={this.update}
//                 onKeyPress={this.update}
//                 onCut={this.update}
//                 onPaste={this.update}
//                 onBlur={this.update}
//                 onDoubleClick={this.update}
//                 cols="30"
//                 rows="10" />
//               <h1>{this.state.currentEvent}</h1>
//             </div>
//           )
//         }
//     }


//using react ref

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {a: ''}
//   }
//   update(  ) {
//     this.setState({
//       a:ReactDOM.findDOMNode(this.a).value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Input 
//         ref={ component => this.a = component}
//         update={this.update.bind(this)}
//         /> {this.state.a}
//         <hr />
//         <input 
//         ref="b"
//         type="text"
//         onChange={this.update.bind(this)}
//         /> {this.state.b}
//       </div>
//     )
//   }
// }

// class Input extends React.Component {
//    render(){
//      return <input type="text" onChange={this.props.update}/>
//    }
//   }

// //react component lifecycle methods

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {val:0}
//     this.update=this.update.bind(this)
//   }
//   update( ) {
//     this.setState({val: this.state.val +1})
//   }
//   componentWillMount(){
//     console.log('componentWillMount');
//   }
// render(){
//   console.log('render');
//   return <button onClick={this.update}>{this.state.val}</button>
// }
// componentDidMount(){
//   console.log('componentDidMount');
// }

// componentWillUnmount(){
//   console.log('componentWillUnmount');
// }

// }

// class Wrapper extends React.Component{
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
// }
// unmount(){
//   ReactDOM.unmountComponentAtNode(document.getElementById('a'))
// }
// render(){
//   return(
//     <div>
//       <button onClick={this.mount.bind(this)}>Mount</button>
//       <button onClick={this.unmount.bind(this)}>UnMount</button>
//       <div id="a"></div>
//     </div>
//   )
// }
// }


// //using map to create react components
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {items: []}
//     }
//     componentWillMount(){
//         fetch( 'http://swapi.co/api/people/?format=json' )
//         .then(response => response.json())
//         .then( ({results:items}) => this.setState({items}))
//     }
//     filter(e){
//         this.setState({filter: e.target.value})
//     }
//      render() {
//          let items = this.state.items;
//          if(this.state.filter){
//              items= items.filter( item =>
//                 item.name.toLowerCase()
//                 .includes(this.state.filter.toLowerCase()))
//          }
//         return(
//             <div>
//                 <input type="text"
//                 onChange={this.filter.bind(this)} />
//                 {items.map(item =>
//                     <person key={item.name} person={item} />)}
//             </div>
//         )
//      }
//     }

//     const Person = (props) => <h4>{props.person.name}</h4>


// //react components with HOC
// const HOC = (InnerComponent) => class extends React.Component{
//     constructor(){
//         super();
//         this.state = {count:0}
//     }
//     update(){
//         this.setState({count: this.state.count + 1})
//     }
//     componentWillMount(){
//         console.log('will mount')
//     }
//     render(){
//         return(
//         <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//         />
//         )
//     }
// }
// class App extends React.Component {
//        render(){
//         return(
//             <div>
//                 <Button>button</Button>
//                 <hr/>
//                 <LabelHOC>label</LabelHOC>
//             </div>
//         )
//     }
// }    

// const Button = HOC((props) => <button onClick={props.update}>{props.children}- {props.count}</button>)

// class Label extends React.Component {
//     componentWillMount(){
//         console.log('label will mount')
//     }
//     render(){
//      return(
//         <label onMouseMove={this.props.update}>{this.props.children}-{this.props.count} </label>
// )
// }
// }

// const LabelHOC =HOC(Label)


//using react.clone
class App extends React.Component {
    render(){
    return(
        <Buttons>
            <button value="A">A</button>
            <button value="B">B</button>
            <button value="C">C</button>
        </Buttons>
    )
    }
}

class Buttons extends React.Component{
    constructor(){
        super();
        this.state= {selected: 'None'}
    }
    selectItem(selected){
        this.setState({selected})
    }
    render() {
        let fn = child =>
        React.cloneElement(child,{
            onClick: this.selectItem.bind(this, child.props.value)
        })
        let items= React.Children.map(this.props.children, fn);
        return (
            <div>
            <h2>You have Selected:{this.state.selected} </h2>
            {items}
            </div>
        )
    }
}


// class App extends React.Component{
//     constructor(){
//         super();
//         this.state= {
//             red:0
//         }
//         this.update = this.update.bind(this)
//     }
//     update(e){
//        this.setState({
//            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
//        })
//     }
//     render() {
//         return (
//             <div>
//                 <NumInput
//                  ref="red" update={this.update} />
//                 {this.state.red}
                
//             </div>
//         );
//     }
// }

// class NumInput extends React.Component{
//     render() {
//         return (
//             <div>
//                 <input ref="inp" type="range"
//                 min="0"
//                 max="550"
//                 onChange={this.props.update} />
//             </div>
//         );
//     }
// }



export default App;
