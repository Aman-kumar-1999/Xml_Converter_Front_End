import React from 'react'

class loginService {

    
   loginUser(user) {
    localStorage.setItem('token', user);

    return true;
  }

  //isLogin: user is logged in or not
  isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
    return true;
  }

  //get token
  getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user.USER)); // for test url
    // localStorage.setItem('user', JSON.stringify(user)) // for prod url
    // console.log("set value in localStorage is : "+localStorage);
  }

  //getUser
  getUser() {
    let userStr = localStorage.getItem('user');
    // console.log("set value in userStr is : "+userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }


  // get user role

  getUserRole() {
    // let user = this.getUser();
    // console.log("inside role : "+this.getUser().roleid.roleName);
    console.log("inside role : "+this.getUser().profile);

    return this.getUser().profile;
    // return this.getUser().profile;
    // return this.getUser().roleid.roleName;
  }

  
}

export default new loginService();