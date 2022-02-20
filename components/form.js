
const Form = ({ errorMessage, onSubmit }) => (
    <form onSubmit={onSubmit}>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
  
      <div className="submit">
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Sign Up / Login</button>
      </div>
  
      {errorMessage && <p className="error">{errorMessage}</p>}
  
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          justify-content: space-between;
        }
        .submit > a {
          text-decoration: none;
        }
        .submit > button {
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .submit > button:hover {
          border-color: #888;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }
      `}</style>
    </form>
  )
  
  export default Form