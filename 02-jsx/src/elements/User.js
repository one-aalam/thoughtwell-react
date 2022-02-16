export default function User() {
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
