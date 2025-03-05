

const Username = (props) => {
  return (
    <div>
      <b>Username: </b>
      <span>{props.username}</span>  {/* evaluating to render the props data */}
    </div>
  )
}

export default Username
