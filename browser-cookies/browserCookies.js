/** Cookies */
console.log(document.cookie);

// calling the setter api on document.cookie
// by default, they expire when the session ends, when the tab is closed

// inserting or updating cookies
document.cookie = "name=Samrood"; // this doesn't override existing cookie but add's to it
document.cookie = "sessionHours=5";

// deleting a cookie
// using expires
document.cookie = `name=Samrood; expires=${new Date().toUTCString()}`;
// using max-age
document.cookie = "sessionHours=5; max-age=0";

console.log(document.cookie); // won't have name and sessionHours

// some other parameters with cookies

// setting a path for the cookie

// path=somePath -> path within the website where the cookie is going to be used // defaults to /
// secure -> can only work with HTTPS and not with http
// samesite=strict -> cookie should not be shared cross-origin
// priority=high, sets priority for cookies when cookies exceed allowed limit
// and they are being deleted, not sure about browser support for this. chrome does.

document.cookie = "name=Samrood; path=/; secure; samesite=strict;";

console.log(document.cookie);

console.log(getCookie("name"));

// getting the value for a cookie key

function getCookie(key) {
  const [_, value] = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${key}=`))
    .split("=");

  return value ?? null;
}
