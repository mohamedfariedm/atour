import imgUser from "../../../assets/images/users/user.png";

const UserInfo = () => {
  return (
    <div className="header-user-info-profile">
      <div className="image-user">
        <img
          src={imgUser}
          alt="imgUser"
          className="object-fit-cover"
          width={"82px"}
          height={"82px"}
        />
      </div>
      <h2 className="name-user-info">محمد احمد</h2>
    </div>
  );
};

export default UserInfo;
