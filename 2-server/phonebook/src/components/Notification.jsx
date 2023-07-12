const Notification = ({ subName }) => {
  if (!subName) return null;

  return <div className="notification">Added {subName}</div>;
};

export default Notification;
