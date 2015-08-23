
package training.sample.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CUSTUtil {

	private final static String URL = "jdbc:mysql://localhost:3306/customer_db";
	private final static String USER = "root";
	private final static String PASSWORD = "";

	static {
		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static Connection connectToDB() {
		Connection con = null;
		try {
			con = DriverManager.getConnection(URL, USER, PASSWORD);
			System.out.println("connection is established");
		} catch (SQLException e) {
			e.printStackTrace();
			System.err.println("Error establishing the connection" + e.getMessage());
		}
		return con;
	}
	
	

	public static void main(String[] args) {
		DBUtil.connectToDB();
	}
	public static void closeResources(PreparedStatement ps, ResultSet rs, Connection con) {
		// TODO Auto-generated method stub
		try
		{
			if(ps!=null)
			{
				ps.close();
			}
			if(rs!=null)
			{
				rs.close();
			}
			if(con!=null)
			{
				con.close();
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		
	}
}
