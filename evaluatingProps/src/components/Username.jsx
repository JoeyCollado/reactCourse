

const Username = (props) => {
  return (
    <div>
      <b>Username: </b>
      <span>{props.myUsername}</span>  {/* evaluating to render the props data */}
    </div>
  )
}

export default Username
