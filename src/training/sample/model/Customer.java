package training.sample.model;


public class Customer {

	
	private String first_name;
	private String last_name;
	private int phone_prefix;
	private String phone_number;
	private String email;
	private int date;
	private int no_of_guests;
	private String specialRequests;
	private String visit;
	private String notifications;
	private String confirmationNumber;
	
	public String getConfirmationNumber() {
		return confirmationNumber;
	}
	public void setConfirmationNumber(String confirmationNumber) {
		this.confirmationNumber = confirmationNumber;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	
	public int getPhone_prefix() {
		return phone_prefix;
	}
	public void setPhone_prefix(int phone_prefix) {
		this.phone_prefix = phone_prefix;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	public int getDate() {
		return date;
	}
	public void setDate(int date) {
		this.date = date;
	}
	public int getNo_of_guests() {
		return no_of_guests;
	}
	public void setNo_of_guests(int no_of_guests) {
		this.no_of_guests = no_of_guests;
	}
	public String getSpecialRequests() {
		return specialRequests;
	}
	public void setSpecialRequests(String specialRequests) {
		this.specialRequests = specialRequests;
	}
	
	public String getVisit() {
		return visit;
	}
	public void setVisit(String visit) {
		this.visit = visit;
	}
	public String getNotifications() {
		return notifications;
	}
	public void setNotifications(String notifications) {
		this.notifications = notifications;
	}
}
