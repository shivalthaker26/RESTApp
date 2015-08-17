package training.sample.exceptions;

public class AppException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7036092126442921375L;

	public AppException (String msg)
	{
 		super(msg);
	}
	
	public AppException(String msg, Throwable cause)
	{
		super(msg, cause);
	}
}