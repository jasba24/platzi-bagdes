import React, { Component } from "react"

class BadgeForm extends Component {
	state = {
		jobTitle: "Designer",
	}

	// handleChange = e => {
	//   this.setState({
	//     [e.target.props.formValues: e.target.value,
	//   })
	// }

	handleClick = e => {
		console.log("button was clicked")
	}

	handleSubmit = e => {
		e.preventDefault()
	}

	render() {
		return (
			<>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>First Name</label>
						<input
							required
							onChange={this.props.onChange}
							className="form-control"
							name="firstName"
							type="text"
							value={this.props.formValues.firstName}
						/>
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input
							required
							onChange={this.props.onChange}
							className="form-control"
							name="lastName"
							type="text"
							value={this.props.formValues.lastName}
						/>
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							required
							onChange={this.props.onChange}
							className="form-control"
							name="email"
							type="email"
							value={this.props.formValues.email}
						/>
					</div>

					<div className="form-group">
						<label>Job Title</label>
						<input
							required
							onChange={this.props.onChange}
							className="form-control"
							name="jobTitle"
							type="text"
							value={this.props.formValues.jobTitle}
						/>
					</div>

					<div className="form-group">
						<label>Twitter</label>
						<input
							required
							onChange={this.props.onChange}
							className="form-control"
							name="twitter"
							type="text"
							value={this.props.formValues.twitter}
						/>
					</div>

					<button onClick={this.handleClick} className="btn btn-primary">
						Save
					</button>

					{this.props.error && (
						<p className="alert alert-danger mb-3" role="alert">
							{this.props.error.message}
						</p>
					)}
				</form>
			</>
		)
	}
}

export default BadgeForm
