// Index.js resetpassword script
const app = {
  baseUrl: "http://3.97.85.123:3030",
  loader: document.getElementById("loader"),
  init: () => {
    document
      .getElementById("submitButton")
      .addEventListener("click", app.submit); // add click event for submit button
  },

  submit: (e) => {
    e.preventDefault(); // prevent submit button reload page

    let password = document.getElementById("password"); // get input password element
    let confirmPassword = document.getElementById("confirmPassword"); // get confirm password element

    if (!password.value && !confirmPassword.value)
      // prevent empty fill
      return app.displayToastMessage("Please fill out");

    let token = window.location.href.split("?token=")[1]; // get token from query string

    if (password.value.trim() !== confirmPassword.value.trim()) {
      // compare password and confirm pass input
      app.displayToastMessage("Password not Match");
    } else {
      app.loader.classList.add("active"); // enable loader
      // call API
      app
        .FetchAPI(token, {
          password: password.value.trim(),
          confirmPassword: confirmPassword.value.trim(),
        })
        .then((response) => {
          if (document.querySelector("#loader .active"))
            app.loader.classList.remove("active"); // hide loader
          app.displayToastMessage(response);
        })
        .catch((err) => {
          if (document.querySelector("#loader .active"))
            // hide loader
            app.loader.classList.remove("active"); // hide loader
          app.displayToastMessage(err.errors[0].description);
        });
    }
  },

  // function fetching API reset password

  FetchAPI: async (token, { password, confirmPassword }) => {
    const url = `${app.baseUrl}/auth/users/resetpassword/${token}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, confirmPassword }),
    });
    // handle errors
    if (!response.ok) {
      return response.json().then((json) => {
        throw json;
      });
    }
    const { data } = await response.json();
    return data;
  },

  displayToastMessage: (message) => {
    // function display toast message
    M.toast({ html: message });
  },
};

document.addEventListener("DOMContentLoaded", app.init);
