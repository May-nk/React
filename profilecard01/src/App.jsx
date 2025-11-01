import ProfileCard from "./components/profilecard";

const App = () => {
  const contacts = [
    {
      name: "Vanshu",
      username: "@vanshu36",
      status: "Connecting",
      lastSeen: "12m ago",
      profileImg:
        "https://images.unsplash.com/photo-1756982784258-0fa7595fa3a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      isOnline: true,
    },
    {
      name: "Liam Carter",
      username: "@liam_dev",
      status: "Online",
      lastSeen: "Active now",
      profileImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      isOnline: true,
    },
    {
      name: "Ava Johnson",
      username: "@ava_js",
      status: "Away",
      lastSeen: "1h ago",
      profileImg:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      isOnline: false,
    },
    {
      name: "Noah Smith",
      username: "@noah.codes",
      status: "Do not disturb",
      lastSeen: "5m ago",
      profileImg:
        "https://images.unsplash.com/photo-1743275532239-47a4a15b9e60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      isOnline: true,
    },
    {
      name: "Emily Davis",
      username: "@emily.design",
      status: "Offline",
      lastSeen: "3 days ago",
      profileImg:
        "https://images.unsplash.com/photo-1750857740591-ee1cdcad78ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      isOnline: false,
    },
    {
      name: "Ethan Brooks",
      username: "@ethan_dev",
      status: "Typing...",
      lastSeen: "Active now",
      profileImg:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      isOnline: true,
    },
  ];

  return (
    <div className="parent">
      {contacts.map(function (elem, idx) {
        return (
          <div key={idx}>
            <ProfileCard
              name={elem.name}
              isOnline={elem.isOnline}
              lastSeen={elem.lastSeen}
              profileImg={elem.profileImg}
              username={elem.username}
              status={elem.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
