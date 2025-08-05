const UserForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="fname" placeholder="Enter fname" />
        <input type="text" name="lname" placeholder="Enter lname" />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
};
export default UserForm;
