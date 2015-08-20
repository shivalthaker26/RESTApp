
package training.sample.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import training.sample.exceptions.AppException;
import training.sample.model.Auth;
import training.sample.model.Customer;
import training.sample.model.Employee;
import training.sample.utils.CUSTUtil;
import training.sample.utils.DBUtil;

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
				
				cust.setId(rs.getInt("ID"));
				cust.setFirst_name(rs.getString("FIRST_NAME"));
				cust.setLast_name(rs.getString("LAST_NAME"));
				cust.setPhone_prefix(rs.getInt("PH_PREFIX"));
				cust.setPhone_number(rs.getString("PHONE"));
				cust.setEmail(rs.getString("EMAIL"));
				cust.setReservation_date(rs.getInt("RESERV_DATE"));
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
			DBUtil.closeResources (ps, rs, con);
		}
		
		
		return custList;
	
		

	
}
	
public Customer getPerson(int custId) throws AppException {
		
		Customer cust = new Customer();
		
		Connection con = CUSTUtil.connectToDB();
		
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = con.prepareStatement("SELECT * FROM customer WHERE ID=?");
			ps.setInt(1, custId);
			
			rs = ps.executeQuery();
			
			
			if(rs.next())
			{				
				cust.setId(rs.getInt("ID"));
				cust.setFirst_name(rs.getString("FIRST_NAME"));
				cust.setLast_name(rs.getString("LAST_NAME"));
				cust.setPhone_prefix(rs.getInt("PH_PREFIX"));
				cust.setPhone_number(rs.getString("PHONE"));
				cust.setEmail(rs.getString("EMAIL"));
				cust.setReservation_date(rs.getInt("RESERV_DATE"));
				cust.setNo_of_guests(rs.getInt("NO_OF_GUESTS"));
				cust.setVisit(rs.getString("VISIT"));
				cust.setSpecialRequests(rs.getString("REQUEST"));
				cust.setNotifications(rs.getString("NOTIFICATIONS"));
				
			}
			else
			{
				throw new AppException("Customer with ID =" + custId + " does not exists in Database.");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException("Error in fetching records from Database", e.getCause());
			
		}
		finally
		{
			DBUtil.closeResources (ps, rs, con);
		}
		
		
		return cust;
		

	
}




public Employee addPerson(Employee emp) throws AppException {
		
	Connection con = DBUtil.connectToDB();
	
	PreparedStatement ps = null;
	ResultSet rs = null;
	try {
		ps = con.prepareStatement("INSERT INTO employee (FIRST_NAME, LAST_NAME, EMAIL, ADDRESS1, ADDRESS2, CITY, ZIP, PHONE, STATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", PreparedStatement.RETURN_GENERATED_KEYS);
		ps.setString(1,emp.getFirstName());
		ps.setString(2,emp.getLastName());
		ps.setString(3, emp.getEmail());
		ps.setString(4, emp.getAddress1());
		ps.setString(5, emp.getAddress2());
		ps.setString(6, emp.getCity());
		ps.setInt(7, emp.getZip());
		ps.setString(8, emp.getPhone());
		ps.setString(9, emp.getState());

		ps.executeUpdate();
		
		rs = ps.getGeneratedKeys();
		
		if(rs.next())
		{
			emp.setId(rs.getInt(1));;
		}
		
		
	} catch (SQLException e) {
		e.printStackTrace();
		throw new AppException("Error in fetching records from Database", e.getCause());
		
	}
	finally
	{
		DBUtil.closeResources (ps, rs, con);
	}
	
	
	return emp;
	


}

public boolean  authenticated(Auth auth)
{
	return true; 
}
}