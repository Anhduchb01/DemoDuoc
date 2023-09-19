<template>
  <div class="form-container outer">
    <div class="form-form">
      <div class="form-form-wrap">
        <div class="form-container">
          <div class="form-content">
            <h1 class="title-login">Sign In</h1>
            <p style="margin-bottom: 15px;" class="alert-login-success">Log in to your account to continue.</p>
            <form v-on:keyup.enter="SubmitLogin()" id="login-ajax" class="text-left validate-form">
              <span style="color: #fc001d;font-size: 14px;padding-left: 10px !important;" id="email-errors">{{message}}</span>
              <div class="form">
                <div id="username-field" class="field-wrapper input">
                  <label for="username">USERNAME</label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input v-model="username" id="username" name="username" type="text" class="form-control" placeholder="Username or Email" tabindex="1" />
                  <label id="username-error" class="error" for="username">{{inputEmptryUsername}}</label>
                </div>
                <div id="password-field" class="field-wrapper input mb-2">
                  <div class="d-flex justify-content-between">
                    <label for="password">PASSWORD</label>
                    <a href="/admin/forgot-password" class="forgot-pass-link" tabindex="3">
                      Forgot
                      Password?
                    </a>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input v-model="password" id="password" name="password" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Password" tabindex="2" />
                  <label id="username-error" class="error" for="username">{{inputEmptryPassword}}</label>
                  <svg v-on:click="showPass =! showPass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="toggle-password" class="feather feather-eye">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <!-- v-on:click="SubmitLogin()" -->
                <div class="d-sm-flex justify-content-between" style="flex-direction: column;margin-top:-16px">
                  <div class="field-wrapper">
                    <button v-on:click="SubmitLogin()" style="margin-top: 12px;" id="submit-login" type="button" class="btn btn-primary" value tabindex="4">Log In</button>
                  </div>
                </div>
                <div class="division">
                  <span></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "/static/baseAPI.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      inputEmptryUsername: "",
      inputEmptryPassword: "",
      showPass: false,
    };
  },
  methods: {
    onEnter: function () {
      alert("successfully");
    },
    SubmitLogin() {
      this.inputEmptryUsername = "";
      this.inputEmptryPassword = "";
      this.message = "";
      if (this.username === "") {
        this.inputEmptryUsername = "User name or Email is required";
      }
      if (this.password === "") {
        this.inputEmptryPassword = "Password is required";
      }
      if (this.username !== "" && this.password !== "") {
        HTTP.post(`post-login`, {
          username: this.username.trim(),
          password: this.password.trim(),
        })
          .then((response) => {
            var now = new Date();
            var time = now.getTime();
            var expireTime = time + 1000*60;
            let data = response.data;
            this.message = data.message;
            if (data.role == "admin") {
              this.$cookies.set("token", data.token, {
                path: "/",
                maxAge: 60 * 60 * 24 * 30
              });
              this.$cookies.set("username", data.username, {
                path: "/",
                maxAge: 60 * 60 * 24 * 30
              });
              window.location.href = "/admin";
            } else if (data.role == "customer") {
              window.location.href = "/";
            }
          })
          .catch((e) => {
            this.message = "Something is wrong";
          });
      }
    },
  },
};
</script>

<style >
@import "~/static/css/login.css";
@import "~/static/assetsAdmin/backend/assets/css/authentication/form-2.css";
@import "https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap";
@import "~/static/assetsAdmin/backend/bootstrap/css/bootstrap.min.css";
@import "~/static/assetsAdmin/backend/assets/css/forms/switches.css";
input#password,
input#username {
  height: 46.8px !important;
}
.btn-primary {
  box-shadow: 0 10px 20px -10px #4361ee;
  color: #fff !important;
  background-color: #4361ee !important;
  border-color: #4361ee !important;
}
.text-left {
  text-align: left !important;
  letter-spacing: 0.0312rem;
  font-family: "Quicksand", sans-serif;
}
.form-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
}
.form-form .form-container {
  align-items: center;
  display: flex;
  flex-grow: 1;
  width: 100%;
  min-height: 100%;
}
.form-form .form-container .form-content {
  display: block;
  width: 100%;
  padding: 25px;
  background: #fff;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #e0e6ed;
}
</style>