var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(' ')[1];
  }

  this.setFirstName = function(first) {
    firstAndLast = first + firstAndLast.replace(/(^.+)( .+$)/, '$2');
  }

  this.setLastName = function(last) {
    firstAndLast = firstAndLast.replace(/(^.+ )(.+$)/, '$1') + last;
  }

  this.setFullName = function(firstnLast) {
    firstAndLast = firstnLast;
  }
  

};

var bob = new Person('Bob Ross');
bob.getFullName();

//-----------------------------------------------------------------------

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.match(/^\w+/)[0];
  };

  this.getLastName = function() {
    return fullName.match(/\w+$/)[0];
  }

  this.setFirstName = function(first) {
    fullName = first + fullName.match(/ .+$/)[0];
  }

  this.setLastName = function(last) {
    fullName = fullName.match(/^.+ /)[0] + last;
  }

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }
  

};

var bob = new Person('Bob Ross');
bob.getFullName();

//-----------------------------------------------------------------------

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();