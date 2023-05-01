const Spacer = ({ y = 30, x = 0 }) => {
  return <div style={{ height: y, width: x }}></div>;
};
const UserCard = ({ firstname, lastname, number, email, password }) => {
  return (
    <div>
      <div>First name: {firstname}</div>
      <Spacer />
      <div>Last name:{lastname} </div>
      <Spacer />
      <div>Phone number:{number} </div>
      <Spacer />
      <div>Email:{email} </div>
      <Spacer />
      <div>Password:{password} </div>
    </div>
  );
};

export default UserCard;
