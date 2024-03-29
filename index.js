import users from "./users.js";

document.addEventListener("DOMContentLoaded", function () {
  const userTable = document.getElementById("userTable");
  renderUserTable(users);

  const filterInput = document.getElementById("filterInput");
  filterInput.addEventListener("keyup", function () {
    const filteredUsers = filterUsers(
      users,
      filterInput.value.trim().toLowerCase()
    );
    renderUserTable(filteredUsers);
  });
});

function renderUserTable(users) {
  const userTable = document.getElementById("userTable");
  userTable.innerHTML = generateUserTable(users);
}

function generateUserTable(users) {
  let tableHTML = `
    <table class="table table-striped table-blue user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
  `;

  users.forEach((user) => {
    tableHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
        <td>${user.company.name}</td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  return tableHTML;
}

function filterUsers(users, query) {
  if (!query) {
    return users;
  }
  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.address.street.toLowerCase().includes(query) ||
      user.address.city.toLowerCase().includes(query) ||
      user.company.name.toLowerCase().includes(query)
    );
  });
}
