const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  let lastname, lastName;
  lastName = "Doe";
  lastname = "Peterson";

  console.log(lastname)

  /*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
