export default function User({ name, handle }) {
    return React.createElement("div", {
      className: "user-cell"
    },
        React.createElement("img", {
            className: "user-cell__avatar",
            src: `https://avatars.dicebear.com/api/open-peeps/${handle}.svg`,
            alt: name
        }),
        React.createElement("div", {
            className: "user-cell__info"
        },
            React.createElement("h3", null, name),
            React.createElement("h6", null, `@${handle}`)
        ),
        React.createElement("div", {
            className: "user-cell__actions"
        },
            React.createElement("button", null, "follow")
        )
    );
}
