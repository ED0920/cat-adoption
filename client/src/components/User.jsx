const Spacer = ({ y = 30, x = 0 }) => {
  return <div style={{ height: y, width: x }}></div>;
};
const UserCard = ({ firstname, lastname, number, email, password }) => {
  return (
    <div>
      <div>First name:&nbsp;&nbsp;{firstname}</div>
      <Spacer />
      <div>Last name:&nbsp;&nbsp;{lastname}</div>
      <Spacer />
      <div>Phone number:&nbsp;&nbsp;{number}</div>
      <Spacer />
      <div>Email:&nbsp;&nbsp;{email}</div>
      <Spacer />
      <div>Password:&nbsp;&nbsp;{password}</div>
    </div>
  );
};

export default UserCard;
