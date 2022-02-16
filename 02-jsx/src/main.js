import logoSvg from './favicon.svg'
import './styles.css'

function User() {
    return React.createElement("div", {
      className: "user-cell"
    },
        React.createElement("img", {
            className: "user-cell__avatar",
            src: "https://avatars.dicebear.com/api/open-peeps/johndoe.svg",
            alt: "John Doe"
        }),
        React.createElement("div", {
            className: "user-cell__info"
        },
            React.createElement("h3", null, "John Doe"),
            React.createElement("h6", null, "@" + "johndoe")
        ),
        React.createElement("div", {
            className: "user-cell__actions"
        },
            React.createElement("button", null, "follow")
        )
    );
}

function UserList() {
    return React.createElement("div", {
        className: "user-list"
      },
      React.createElement("h4", { className: "user-list__title"}, 'Who to follow'),
      React.createElement(User, {}),
    )
}

const Header = () => {
    return React.createElement('div', { className: 'header' },
        React.createElement('img', { src: logoSvg , alt: 'logo', width: 60 }),
        React.createElement('h1', {},
            React.createElement('span', {}, 'thought'),
            React.createElement('u', { style: { color: 'indigo'}}, 'well')
        ),
        React.createElement('h6', {}, 'where people connnect on what they\'re up to...'),
    )
}

const App = () => {
    return React.createElement('div',
        { className: 'container' },
        React.createElement(Header),
        React.createElement(UserList),
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
