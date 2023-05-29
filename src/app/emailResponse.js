const EmailResponse = ({ success, error }) => {
  return (
    <div>
      {success && (
        <div className="flex flex-col w-full h-[300px] bg-black/60 relative -top-[150%] z-50 justify-center items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="w-16 h-16 transform translate-x-1 translate-y-1"
            >
              <path
                fillRule="evenodd"
                d="M7.293 12.95l-3.646-3.646a.5.5 0 11.708-.708L7.5 11.793l6.147-6.147a.5.5 0 01.708.708l-6.5 6.5a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 010-.708l.5-.5a.5.5 0 01.708 0l2.646 2.646z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold my-2">Email sent successfully!</h2>
          <p>Thank you for contacting us.</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col w-full h-[300px] bg-black/60 relative -top-[150%] z-50 justify-center items-center">
          <h2 className="text-2xl font-bold my-2">Error sending email</h2>
          <p>
            Sorry, there was an error while sending your email. Please try again
            later.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailResponse;
