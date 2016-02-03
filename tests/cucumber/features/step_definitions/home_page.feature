Feature: Home Page

	Home Page should display

	Background:
		Given:	Visitor

	@dev
	Scenario: Visit the Home Page
		When: I navigate to '/'
		Then: I should see the title 'Web Apps'



