
package training.sample.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import training.sample.exceptions.AppException;
import training.sample.model.Auth;
import training.sample.model.Customer;
import training.sample.utils.CUSTUtil;

public class CustomerDAO {

	public List<Customer> getAll() throws AppException{
		
		List<Customer> custList = new ArrayList<Customer>() ;
		
		Connection con = CUSTUtil.connectToDB();
		
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement("SELECT * FROM customer");
			
			rs = ps.executeQuery();
			
			
			while(rs.next()){
				Customer cust = new Customer();
				cust.setConfirmationNumber(rs.getString("CONFIRM_NUM"));
				cust.setFirst_name(rs.getString("FIRST_NAME"));
				cust.setLast_name(rs.getString("LAST_NAME"));
				cust.setPhone_prefix(rs.getInt("PH_PREFIX"));
				cust.setPhone_number(rs.getString("PHONE"));
				cust.setEmail(rs.getString("EMAIL"));
				cust.setDate(rs.getInt("RESERV_DATE"));
				cust.setNo_of_guests(rs.getInt("NO_OF_GUESTS"));
				cust.setVisit(rs.getString("VISIT"));
				cust.setSpecialRequests(rs.getString("REQUEST"));
				cust.setNotifications(rs.getString("NOTIFICATIONS"));
				
				
				custList.add(cust);
				

				
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error in fetching records from Database", e.getCause());
			
		}
		finally
		{
			CUSTUtil.closeResources (ps, rs, con);
		}
		
		
		return custList;
	
		

	
}
	
public Customer getPerson(String conf_num) throws AppException {
		
		Customer cust = new Customer();
		
		Connection con = CUSTUtil.connectToDB();
		
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement("SELECT * FROM customer WHERE CONFIRM_NUM=?");
			ps.setString(1, conf_num);
			
			rs = ps.executeQuery();
			
			
			if(rs.next())
			{	cust.setConfirmationNumber(rs.getString("CONFIRM_NUM"));			
				cust.setFirst_name(rs.getString("FIRST_NAME"));
				cust.setLast_name(rs.getString("LAST_NAME"));
				cust.setPhone_prefix(rs.getInt("PH_PREFIX"));
				cust.setPhone_number(rs.getString("PHONE"));
				cust.setEmail(rs.getString("EMAIL"));
				cust.setDate(rs.getInt("RESERV_DATE"));
				
				cust.setNo_of_guests(rs.getInt("NO_OF_GUESTS"));
				cust.setVisit(rs.getString("VISIT"));
				cust.setSpecialRequests(rs.getString("REQUEST"));
				cust.setNotifications(rs.getString("NOTIFICATIONS"));
				
			}
			else
			{
				throw new AppException("Customer with CONFIRM_NUM =" + conf_num + " does not exists in Database.");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error in fetching records from Database", e.getCause());
			
		}
		finally
		{
			CUSTUtil.closeResources (ps, rs, con);
		}
		
		
		return cust;
		

	
}

public Customer addCustomer(Customer cust) throws AppException {
	
	
	Connection con = CUSTUtil.connectToDB();
	PreparedStatement ps = null;
	ResultSet rs = null;
	try {
		ps = con.prepareStatement("INSERT INTO customer(CONFIRM_NUM, FIRST_NAME, LAST_NAME, PH_PREFIX, PHONE, EMAIL, RESERV_DATE, NO_OF_GUESTS, VISIT, REQUEST, NOTIFICATIONS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)");
		ps.setString(1, UUID.randomUUID().toString());
		ps.setString(2, cust.getFirst_name());
		ps.setString(3, cust.getLast_name());
		ps.setInt(4, cust.getPhone_prefix());
		ps.setString(5, cust.getPhone_number());
		ps.setString(6, cust.getEmail());
		ps.setInt(7, cust.getDate());
		ps.setInt(8, cust.getNo_of_guests());
		ps.setString(9, cust.getVisit());
		ps.setString(10,cust.getVisit());
		ps.setString(11, cust.getNotifications());
		
		ps.executeUpdate();

		
	} catch (SQLException e) {
		e.printStackTrace();
		throw new AppException("Error in fetching records from Database", e.getCause());
		
	}
	finally
	{
		CUSTUtil.closeResources (ps, rs, con);
	}
	
	
	return cust;
	


}






public boolean  authenticated(Auth auth)
{
	return true; 
}
}