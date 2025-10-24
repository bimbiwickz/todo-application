const BASE_URL = "http://localhost:8080/api/tasks";

export const fetchTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createTask = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const markTaskDone = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/done`, { method: "PUT" });
  return res.json();
};
