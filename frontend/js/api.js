const API_URL = 'http://localhost:3000/api';

function getToken() {
  return localStorage.getItem('kpi_token');
}

function getUser() {
  return JSON.parse(localStorage.getItem('kpi_user') || '{}');
}

function saveAuth(token, user) {
  localStorage.setItem('kpi_token', token);
  localStorage.setItem('kpi_user', JSON.stringify(user));
}

function clearAuth() {
  localStorage.removeItem('kpi_token');
  localStorage.removeItem('kpi_user');
}

function isLoggedIn() {
  return !!getToken();
}

async function apiCall(endpoint, method = 'GET', body = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  };
  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);
  const response = await fetch(`${API_URL}${endpoint}`, options);
  return response.json();
}

async function loginAPI(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return response.json();
}

async function getKPIScores(month, year) {
  return apiCall(`/kpi/scores?month=${month}&year=${year}`);
}

async function getYearlyScores(year) {
  return apiCall(`/kpi/yearly?year=${year}`);
}

async function getTeams() {
  return apiCall('/kpi/teams');
}

async function getAgents() {
  return apiCall('/kpi/agents');
}

async function askAIAPI(question, month, year) {
  return apiCall('/ai/analyze', 'POST', { question, month, year });
}

async function getUploadHistory() {
  return apiCall('/upload/history');
}