const Notification = ({ message, isSucceed }) => {
	
	if (message === null) {
	  	return null
	}
  
	return (
	  	<div className={isSucceed? "succeed": "error"}>
			{message}
	  	</div>
	)
  }

export default Notification