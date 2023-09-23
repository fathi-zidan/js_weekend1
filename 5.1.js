function trim(str) {
    if (str.length < 2) {
      return str; 
    } else {
      return str.slice(1, -1); //start from the second and stop before the last
    }
  }
  console.log(trim("Hello")); 
  console.log(trim("12345")); 
  