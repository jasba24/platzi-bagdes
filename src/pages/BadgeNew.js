import React, { Component } from "react"
import "./styles/BadgeNew.css"
import confLogo from "../images/platziconf-logo.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import api from "../api"
import PageLoading from '../components/PageLoading';

class BadgeNew extends Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	}

	handleChange = e => {
		// const nextForm = this.state.form
		// nextForm[e.target.name] = e.target.value

		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		})
	}

	handleSubmit = async e => {
		e.preventDefault()
		this.setState({ loading: true, error: null })

		try {
			await api.badges.create(this.state.form)
			this.setState({ loading: false })

			this.props.history.push("/badges")
		} catch (error) {
			this.setState({ loading: false, error: error })
		}
	}

	render() {
		if (this.state.loading) {
			return <PageLoading />
		}
		return (
			<>
				<div className="BadgeNew__hero">
					<img
						src={confLogo}
						alt="logo"
						className="BadgeNew__hero--image img-fluid"
					/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName || "FIRST_NAME"}
								lastName={this.state.form.lastName || "LAST_NAME"}
								twitter={this.state.form.twitter || "twitter"}
								jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
								email={this.state.form.email}
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default BadgeNew
