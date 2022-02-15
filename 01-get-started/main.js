const App = () => {
    return React.createElement('div', {},
        React.createElement('img', { src: './favicon.svg', alt: 'logo', width: 60 }),
        React.createElement('h1', {},
            React.createElement('span', {}, 'thought'),
            React.createElement('u', { style: { color: 'indigo'}}, 'well')
        ),
        React.createElement('p', {}, 'where people connnect on what they\'re up to...')
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app')
);
