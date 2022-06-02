(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/admin/index/AdminProfile.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/index/AdminProfile.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_maskedinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-maskedinput */ "./node_modules/react-maskedinput/es/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var AdminProfile = /*#__PURE__*/function (_Component) {
  _inherits(AdminProfile, _Component);

  var _super = _createSuper(AdminProfile);

  function AdminProfile(props) {
    var _this;

    _classCallCheck(this, AdminProfile);

    _this = _super.call(this, props);
    _this.state = {
      formsubmiterror: null,
      formsubmiterrorClassCode: null,
      adminname: _this.props.adminname,
      sectionname: 'updateprofile',
      cashiers: null,
      users: null,
      downloadlogusers: null,
      selectedPlayerId: null,
      imagename: null,
      imagefile: null,
      admindetails: _this.props.admindetails,
      focused: null,
      downloaddate: null,
      downloaduser: null,
      downloaddisplaydata: null
    };
    _this.displayaddcashierform = _this.displayaddcashierform.bind(_assertThisInitialized(_this));
    _this.displayadduserform = _this.displayadduserform.bind(_assertThisInitialized(_this));
    _this.displayupdateprofileform = _this.displayupdateprofileform.bind(_assertThisInitialized(_this));
    _this.deletelog = _this.deletelog.bind(_assertThisInitialized(_this));
    _this.deleteuser = _this.deleteuser.bind(_assertThisInitialized(_this));
    _this.onChangeImg = _this.onChangeImg.bind(_assertThisInitialized(_this));
    _this.changeAdminInput = _this.changeAdminInput.bind(_assertThisInitialized(_this));
    _this.onDateChange = _this.onDateChange.bind(_assertThisInitialized(_this));
    _this.onFocusChange = _this.onFocusChange.bind(_assertThisInitialized(_this));
    _this.selectPlayer = _this.selectPlayer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AdminProfile, [{
    key: "selectPlayer",
    value: function selectPlayer(e) {
      console.log(e.target.value);
      this.setState({
        selectedPlayerId: e.target.value
      });
    }
  }, {
    key: "onChangeImg",
    value: function onChangeImg(event) {
      this.setState({
        imagename: URL.createObjectURL(event.target.files[0]),
        imagefile: event.target.files[0]
      });
    }
  }, {
    key: "changeAdminInput",
    value: function changeAdminInput(e) {
      var admindetails = this.state.admindetails;
      admindetails[e.target.id] = e.target.value;
      this.setState({
        admindetails: admindetails
      });
    }
  }, {
    key: "deleteuser",
    value: function deleteuser(logId) {
      var _this2 = this;

      this.setState({
        deletePlayerData: 'Deleting data...'
      });
      var formData = {
        logId: logId
      };
      new Promise(function (resolve, reject) {
        fetch(SERVER_BASE_URL_FULL + 'admin/deleteuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formData: formData
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.setState({
            deletePlayerData: null,
            users: data.users
          });
        }).catch(function (error) {
          alert("System Exception");
          reject(error);
        });
      });
      return false;
    }
  }, {
    key: "deletelog",
    value: function deletelog(logId) {
      var _this3 = this;

      this.setState({
        deletePlayerData: 'Deleting data...'
      });
      var formData = {
        logId: logId
      };
      new Promise(function (resolve, reject) {
        fetch(SERVER_BASE_URL_FULL + 'admin/deletecashier', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formData: formData
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this3.setState({
            deletePlayerData: null,
            cashiers: data.cashiers
          });
        }).catch(function (error) {
          alert("System Exception");
          reject(error);
        });
      });
      return false;
    }
  }, {
    key: "submitdownload",
    value: function submitdownload() {
      var _this4 = this;

      //console.log(typeof document.getElementById('select_players'));
      this.setState({
        sectionname: 'downloadlog'
      });
      var formData = {
        downloaddate: this.state.downloaddate,
        downloaduser: this.state.selectedPlayerId
      };
      new Promise(function (resolve, reject) {
        fetch(SERVER_BASE_URL_FULL + 'admin/displaylogbydate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formData: formData
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data.users);

          _this4.setState({
            downloaddisplaydata: data.results,
            downloadlogusers: data.users
          });
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: "displayaddcashierform",
    value: function displayaddcashierform() {
      var _this5 = this;

      this.setState({
        sectionname: 'addcashier'
      });
      var formData = {};
      new Promise(function (resolve, reject) {
        fetch(SERVER_BASE_URL_FULL + 'admin/getAllcashier', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formData: formData
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data.cashiers);

          if (Object.prototype.hasOwnProperty.call(data, 'error')) {
            _this5.setState({
              formsubmiterror: data.error,
              formsubmiterrorClassCode: 'display-error'
            });
          } else {
            _this5.setState({
              cashiers: data.cashiers
            });
          }
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: "displayadduserform",
    value: function displayadduserform() {
      var _this6 = this;

      this.setState({
        sectionname: 'adduser'
      });
      var formData = {};
      new Promise(function (resolve, reject) {
        fetch(SERVER_BASE_URL_FULL + 'admin/getAlluser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            formData: formData
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(data.users);

          if (Object.prototype.hasOwnProperty.call(data, 'error')) {
            _this6.setState({
              formsubmiterror: data.error,
              formsubmiterrorClassCode: 'display-error'
            });
          } else {
            _this6.setState({
              users: data.users
            });
          }
        }).catch(function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: "displayupdateprofileform",
    value: function displayupdateprofileform() {
      this.setState({
        sectionname: 'updateprofile'
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this7 = this;

      var errorsCount = 0;
      var oldpassnull = true;
      var newpassnull = true;
      var atleastonefieldenter = false;
      this.setState({
        formsubmiterror: null,
        formsubmiterrorClassCode: null
      });

      if (document.getElementById('username').value == null || document.getElementById('username').value == '') {
        errorsCount++;
      } else atleastonefieldenter = true;

      if (document.getElementById('old_pass').value != null || document.getElementById('old_pass').value != '') {
        oldpassnull = false;
        atleastonefieldenter = true;
      }

      if (document.getElementById('new_pass').value != null || document.getElementById('new_pass').value != '') {
        newpassnull = false;
        atleastonefieldenter = true;
      }

      if (atleastonefieldenter) errorsCount = 0;

      if (oldpassnull && !newpassnull || !oldpassnull && newpassnull) {
        errorsCount++;
      }

      if (document.getElementById('conf_new_pass').value != document.getElementById('new_pass').value) errorsCount++;

      if (errorsCount === 0) {
        var fd = new FormData();
        if (this.state.imagefile != null) fd.append('image', this.state.imagefile, this.state.imagefile.name);
        fd.append('username', document.getElementById('username').value);
        fd.append('old_pass', document.getElementById('old_pass').value);
        fd.append('new_pass', document.getElementById('new_pass').value);
        fd.append('business_name', document.getElementById('businessname').value);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(SERVER_BASE_URL_FULL + 'admin/updateprofile', fd).then(function (response) {
          console.log(response);

          if ('error' in response.data) {
            _this7.setState({
              formsubmiterror: response.data.error,
              formsubmiterrorClassCode: 'display-error'
            });
          } else {
            var admindetails = _this7.state.admindetails;
            admindetails['logo'] = response.data.logo;

            _this7.setState({
              admindetails: admindetails
            });

            _this7.setState({
              adminname: response.data.admin_username,
              formsubmiterror: 'Profile updated successfully',
              formsubmiterrorClassCode: 'display-success'
            });
          }
        });
      } else {
        if (document.getElementById('conf_new_pass').value != document.getElementById('new_pass').value) {
          this.setState({
            formsubmiterror: 'Confirm new password is not matching with new password',
            formsubmiterrorClassCode: 'display-error'
          });
        } else {
          this.setState({
            formsubmiterror: 'Please fill required field',
            formsubmiterrorClassCode: 'display-error'
          });
        }
      }

      return false;
    }
  }, {
    key: "submitcashier",
    value: function submitcashier() {
      var _this8 = this;

      var errorsCount = 0;
      this.setState({
        formsubmiterror: null,
        formsubmiterrorClassCode: null
      });

      if (document.getElementById('cashier_name').value == null || document.getElementById('cashier_name').value == '') {
        errorsCount++;
      }

      if (document.getElementById('cashier_username').value == null || document.getElementById('cashier_username').value == '') {
        errorsCount++;
      }

      if (document.getElementById('cashier_pass').value == null || document.getElementById('cashier_pass').value == '') {
        errorsCount++;
      }

      if (errorsCount === 0) {
        var formData = {
          'cashier_name': document.getElementById('cashier_name').value,
          'cashier_username': document.getElementById('cashier_username').value,
          'cashier_pass': document.getElementById('cashier_pass').value
        };
        new Promise(function (resolve, reject) {
          fetch(SERVER_BASE_URL_FULL + 'admin/insertcashier', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              formData: formData
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data.cashiers);

            if (Object.prototype.hasOwnProperty.call(data, 'error')) {
              _this8.setState({
                formsubmiterror: data.error,
                formsubmiterrorClassCode: 'display-error'
              });
            } else {
              document.getElementById("create-cashier-form").reset();

              _this8.setState({
                cashiers: data.cashiers,
                formsubmiterror: 'Cashier added successfully',
                formsubmiterrorClassCode: 'display-success'
              });
            }
          }).catch(function (error) {
            console.log(error);
          });
        });
      } else {
        this.setState({
          formsubmiterror: 'Please fill required field',
          formsubmiterrorClassCode: 'display-error'
        });
      }

      return false;
    }
  }, {
    key: "submituser",
    value: function submituser() {
      var _this9 = this;

      var errorsCount = 0;
      this.setState({
        formsubmiterror: null,
        formsubmiterrorClassCode: null
      });

      if (document.getElementById('user_name').value == null || document.getElementById('user_name').value == '') {
        errorsCount++;
      }

      if (document.getElementById('phone').value == null || document.getElementById('phone').value == '') {
        errorsCount++;
      }

      if (errorsCount === 0) {
        var formData = {
          'user_name': document.getElementById('user_name').value,
          'phone': document.getElementById('phone').value
        };
        new Promise(function (resolve, reject) {
          fetch(SERVER_BASE_URL_FULL + 'admin/insertuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              formData: formData
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data.users);

            if (Object.prototype.hasOwnProperty.call(data, 'error')) {
              _this9.setState({
                formsubmiterror: data.error,
                formsubmiterrorClassCode: 'display-error'
              });
            } else {
              document.getElementById("phone").value = null;
              document.getElementById("create-user-form").reset();

              _this9.setState({
                users: data.users,
                formsubmiterror: 'User added successfully',
                formsubmiterrorClassCode: 'display-success'
              });
            }
          }).catch(function (error) {
            console.log(error);
          });
        });
      } else {
        this.setState({
          formsubmiterror: 'Please fill required field',
          formsubmiterrorClassCode: 'display-error'
        });
      }

      return false;
    }
  }, {
    key: "onDateChange",
    value: function onDateChange(date) {
      this.setState({
        downloaddate: date,
        downloaddisplaydata: null
      }); //this.props.onDateChange(date);
    }
  }, {
    key: "onFocusChange",
    value: function onFocusChange(_ref) {
      var focused = _ref.focused;
      this.setState({
        focused: focused
      }); //this.props.onFocusChange(focused);
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var downloadLogLink = SERVER_BASE_URL_FULL + 'admin/download/' + this.state.downloaddate + '/' + this.state.selectedPlayerId;
      console.log(this.state.selectedPlayerId);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.state.formsubmiterror != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.state.formsubmiterrorClassCode
      }, this.state.formsubmiterror))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          verticalAlign: "top"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.displayupdateprofileform();
        },
        type: "button",
        className: "".concat(this.state.sectionname == 'updateprofile' ? 'submitbuttonactive' : 'submitbutton')
      }, "Edit Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.displayaddcashierform();
        },
        type: "button",
        className: "".concat(this.state.sectionname == 'addcashier' ? 'submitbuttonactive' : 'submitbutton')
      }, "Add Cashier"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.displayadduserform();
        },
        type: "button",
        className: "".concat(this.state.sectionname == 'adduser' ? 'submitbuttonactive' : 'submitbutton')
      }, "Add User"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.submitdownload();
        },
        type: "button",
        className: "".concat(this.state.sectionname == 'downloadlog' ? 'submitbuttonactive' : 'submitbutton')
      }, "Download Log"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: SERVER_BASE_URL_FULL + 'admin/logout',
        type: "button",
        className: "submitbutton"
      }, "Logout")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.sectionname == 'updateprofile' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Existing Username : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.state.adminname))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "New Username : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "username"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Old Password : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "old_pass"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "New Password : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "new_pass"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Confirm New Password : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "conf_new_pass"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Business Name : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "businessname",
        value: this.state.admindetails.businessname,
        onChange: this.changeAdminInput
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Add your logo : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        name: "image",
        onChange: this.onChangeImg
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), this.state.admindetails.logo != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        height: "60",
        src: "".concat(IMG_UPLOAD).concat(this.state.admindetails.logo)
      }) : '')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.submit();
        },
        type: "button",
        className: "submitbutton"
      }, "Update")))))))))) : null, this.state.sectionname == 'addcashier' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "create-cashier-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Cashier Name : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "cashier_name"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Cashier UserName : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "cashier_username"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Cashier Password : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "cashier_pass"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.submitcashier();
        },
        type: "button",
        className: "submitbutton"
      }, "Add Cashier")))))))))) : null, this.state.sectionname == 'adduser' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "create-user-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "User Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterix",
        "aria-hidden": "true"
      }, "*"), " : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "user_name"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Phone Number", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterix",
        "aria-hidden": "true"
      }, "*"), " : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_maskedinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "phone",
        type: "text",
        mask: "111-111-1111"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        width: "20%",
        height: "60"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.submituser();
        },
        type: "button",
        className: "submitbutton"
      }, "Add User")))))))))) : null, this.state.sectionname == 'downloadlog' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        id: "create-user-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          verticalAlign: "top"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.selectPlayer,
        name: "select_players",
        id: "select_players"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: "",
        value: ""
      }, "--Select Player--"), this.state.downloadlogusers !== null && this.state.downloadlogusers.length > 0 && this.state.downloadlogusers.map(function (player) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: player.user_id,
          value: player.user_id
        }, player.user_name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this10.submitdownload();
        },
        type: "button",
        className: "submitbutton"
      }, "Apply")))))) : null)), this.state.cashiers != null && this.state.sectionname == 'addcashier' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%",
        id: "players"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Cashier Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      })), this.state.cashiers !== null && this.state.cashiers.map(function (eachplayersdata, keyplayersdata) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: "eachuser-".concat(keyplayersdata)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.cashier_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.cashier_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          onClick: function onClick() {
            return _this10.deletelog(eachplayersdata.cashier_id);
          },
          src: "".concat(IMG, "delete.png"),
          height: "20"
        })));
      }))))))))) : null, this.state.users != null && this.state.sectionname == 'adduser' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%",
        id: "players"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      })), this.state.users !== null && this.state.users.map(function (eachplayersdata, keyplayersdata) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: "eachuser-".concat(keyplayersdata)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.user_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.user_phone_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          onClick: function onClick() {
            return _this10.deleteuser(eachplayersdata.user_id);
          },
          src: "".concat(IMG, "delete.png"),
          height: "20"
        })));
      }))))))))) : null, this.state.sectionname == 'downloadlog' && this.state.downloaddisplaydata != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%",
        id: "players"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        width: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Cashier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Collection Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        width: "20%"
      }, "Notes")), this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length > 0 && this.state.downloaddisplaydata.map(function (eachplayersdata, keyplayersdata) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: "eachuser-".concat(keyplayersdata)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.cashier_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.user_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(eachplayersdata.collection_time).format('MM/DD/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(eachplayersdata.collection_time).format('HH:mm:ss'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.amount_collected), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.type_of_collection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.type_of_payment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          width: "20%"
        }, eachplayersdata.notes));
      }), this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "7"
      }, "No log found")) : null)))), this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: downloadLogLink,
        className: "submitbutton"
      }, "Download Log"))) : null)))) : null));
    }
  }]);

  return AdminProfile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminProfile);

/***/ }),

/***/ "./resources/js/modules/admin/adminprofile.js":
/*!****************************************************!*\
  !*** ./resources/js/modules/admin/adminprofile.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_admin_index_AdminProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/admin/index/AdminProfile */ "./resources/js/components/admin/index/AdminProfile.js");



var app = document.getElementById('page');

if (app !== null) {
  var adminname = app.dataset.adminname;
  var admindetails = JSON.parse(app.dataset.admindetails);
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_admin_index_AdminProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    adminname: adminname,
    admindetails: admindetails
  }), app);
}

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map