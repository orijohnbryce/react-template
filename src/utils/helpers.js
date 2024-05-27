export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}
  

export function saveUserToStorage(token) {
    const user = parseJwt(token)

    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
}

export function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}