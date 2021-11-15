// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const GP_ID = "GP01";
export const environment = {
  production: false,

  // Settings
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgMTgiLCJIZXRIYW5TdHJpbmciOiIwMy8wNS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NTE1MzYwMDAwMDAiLCJuYmYiOjE2MzUwOTQ4MDAsImV4cCI6MTY1MTY4MzYwMH0.WR33CYjpZsWp64GNg_ygfcOGHHNsT5DomeXdzWKxRyg",
  tokenCybersoft: "TokenCybersoft",
  userLogin: "USER_LOGIN",
  authorization: "Authorization",
  accessToken: "accessToken",
  GP_ID,

  // API
  urlApi: "https://elearningnew.cybersoft.edu.vn",

  // Quản lý khóa hoc
  getListCourse: `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?`,
  getCourseCategory: `api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
  getCourseByCategory: `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?`,


  // Quản lý người dùng
  getListUser: `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GP_ID}`

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
