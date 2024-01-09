const root=ReactDOM.createRoot(document.querySelector('.root'));
const div=React.createElement('p',{className:'text'},'Inside div')
// console.log(ReactDOM);
root.render(div);
console.log(ReactDOM.root)