function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    if (reactElement.props) {
        if (reactElement.props.href) domElement.setAttribute('href', reactElement.props.href);
        if (reactElement.props.target) domElement.setAttribute('target', reactElement.props.target);


    }

    container.appendChild(domElement);*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    for (const props in reactElement.props) {
        domElement.setAttribute(props, reactElement.props[props]);
    }
    
    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
