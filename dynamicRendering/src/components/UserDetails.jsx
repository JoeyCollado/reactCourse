import PropTypes from "prop-types";

export function UserDetails( {user} ) {
  return (
    <div>
      <b>ID: </b>
      <span>{user.id}</span>
      <br />
      <b>Username: </b>
      <span>{user.username}</span>
      <br />
      <b>Email: </b>
      <span>{user.email}</span>
    </div>
  );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
};
