const Book = (sequelize, dataTypes) => {
  const User = sequelize.define("User", {
    title: dataTypes.STRING,
    author: dataTypes.STRING,
    pageQuantity: dataTypes.INTEGER
  });
  return User;
}

module.exports = Book;