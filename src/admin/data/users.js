export let users = [
  {
    id: 1,
    email: "test@test.com",
    role: "user",
  },
  {
    id: 2,
    email: "angelique.panzolato@gmail.com",
    role: "admin",
  },
  {
    id: 3,
    email: "user2@example.com",
    role: "user",
  }
];

export function deleteUser(id) {
  users = users.filter((u) => u.id !== id);
}

export function updateUser(id, newData) {
  users = users.map((u) => u.id === id ? { ...u, ...newData } : u);
}