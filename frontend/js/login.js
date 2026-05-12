function togglePassword() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
}

const DEMO_USERS = {
  manager: { password: 'stc2026', full_name: 'Manager', role: 'Admin' },
  ahmed:   { password: 'team1',   full_name: 'Ahmed Al Sabea', role: 'Team Leader' },
  aziz:    { password: 'team2',   full_name: 'Aziz Al Sabea',  role: 'Team Leader' },
  abul:    { password: 'team3',   full_name: 'Abul Hassan',    role: 'Team Leader' },
};

async function doLogin() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('loginError');
  const btn = document.getElementById('loginBtn');

  if (!username || !password) {
    errorDiv.textContent = 'Please enter username and password.';
    errorDiv.style.display = 'block';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Signing in...';
  errorDiv.style.display = 'none';

  const user = DEMO_USERS[username];
  if (user && user.password === password) {
    saveAuth('demo_token_2026', {
      username,
      full_name: user.full_name,
      role: user.role
    });
    window.location.href = '/dashboard';
  } else {
    errorDiv.textContent = 'Invalid username or password.';
    errorDiv.style.display = 'block';
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }
}

document.getElementById('password').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') doLogin();
});

if (isLoggedIn()) {
  window.location.href = '/dashboard';
}